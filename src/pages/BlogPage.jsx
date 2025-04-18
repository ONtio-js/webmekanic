import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { BsShare } from 'react-icons/bs';
import { GOOGLE_SHEET_URL } from '../Constant';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet';
import { FaHeart } from 'react-icons/fa';
import { formatDate } from '../utils/Date';
const BlogPage = () => {
	const [blog, setBlog] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showShareTooltip, setShowShareTooltip] = useState(false);
	const location = useLocation();
	const slug = location.pathname.split('/')[2];

	// Initialize likedPosts from localStorage
	const [likedPosts, setLikedPosts] = useState(() => {
		const savedLikes = localStorage.getItem('likedPosts');
		return savedLikes ? new Set(JSON.parse(savedLikes)) : new Set();
	});

	// Save likedPosts to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem('likedPosts', JSON.stringify([...likedPosts]));
	}, [likedPosts]);

	const handleLike = async (title) => {
		if (likedPosts.has(title)) {
			// Show a message that they've already liked this post
			alert('You have already liked this post!');
		}

		try {
			const formData = new URLSearchParams();
			formData.append('title', title);

			const response = await fetch(GOOGLE_SHEET_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				mode: 'no-cors',
				body: formData,
			});

			setLikedPosts((prev) => new Set([...prev, title]));
			await fetchBlog();
		} catch (error) {
			console.error('Like error:', error);
		}
	};

	const handleShare = async () => {
		const shareData = {
			url: window.location.href,
		};

		try {
			if (navigator.share) {
				await navigator.share(shareData);
			} else {
				// Fallback for browsers that don't support Web Share API
				await navigator.clipboard.writeText(window.location.href);
				setShowShareTooltip(true);
				setTimeout(() => setShowShareTooltip(false), 2000);
			}
		} catch (error) {
			console.error('Error sharing:', error);
		}
	};

	const fetchBlog = async () => {
		try {
			setLoading(true);
			const response = await fetch(GOOGLE_SHEET_URL);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			const currentBlog = data.find((blog) => blog.slug === slug);

			if (!currentBlog) {
				throw new Error('Blog not found');
			}

			setBlog(currentBlog);
		} catch (error) {
			console.error('Fetch error:', error);
			setError(`Failed to fetch blog: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchBlog();
	}, [slug]);

	if (loading) {
		return (
			<div className='flex justify-center items-center h-[500px]'>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className='flex flex-col justify-center items-center min-h-[500px]'>
				<div className='text-red-500 mb-4'>{error}</div>
				<Link
					to='/blogs'
					className='bg-primary text-white px-4 py-2 rounded-md'
				>
					Back to Blogs
				</Link>
			</div>
		);
	}

	if (!blog) {
		return null;
	}

	return (
		<>
			<Helmet>
				<title>{blog.title}</title>
				<meta
					name='description'
					content={`${blog.short_description}`}
				/>
			</Helmet>
			<div className='px-5 md:px-10 lg:px-20 mb-40 mt-20'>
				<Link
					to='/blogs'
					className='flex items-center justify-center gap-3 font-medium bg-lightgray max-w-[100px] py-2 rounded-full my-10'
				>
					<FaArrowLeft size={16} /> Back
				</Link>
				<img
					src={blog.blog_picture}
					alt={blog.title}
					className='w-full h-[200px] rounded-3xl md:h-[500px] object-cover'
				/>
				<div className='flex flex-col md:flex-row md:items-center  gap-y-3 justify-between py-10'>
					<h2 className='text-2xl font-semibold '>{blog.title}</h2>
					<p className='text-lightblack'>
						{formatDate(blog.created_at)}
					</p>
				</div>
				<div
					className='text-lg text-lightblack leading-loose prose prose-lg max-w-none'
					dangerouslySetInnerHTML={{ __html: blog.detail_content }}
				/>
				<div className='flex items-center gap-5 mt-10 text-lightblack text-lg'>
					<div className='flex items-center justify-between mt-2'>
						<button
							onClick={() => handleLike(blog.title)}
							className={`flex items-center gap-1 text-sm ${
								likedPosts.has(blog.title)
									? 'text-red-500'
									: 'text-gray-500 hover:text-red-500'
							} transition-colors`}
						>
							<FaHeart size={20} />
							<span>{blog.like_count || 0}</span>
						</button>
					</div>
					<div className='flex items-center gap-3 capitalize relative'>
						<button
							onClick={handleShare}
							className='flex items-center gap-2 hover:text-primary transition-colors'
						>
							<p>share</p>
							<BsShare
								size={15}
								color='blue'
							/>
						</button>
						{showShareTooltip && (
							<div className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm'>
								Link copied to clipboard!
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogPage;
