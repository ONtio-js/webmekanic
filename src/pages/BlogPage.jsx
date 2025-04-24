import React, { useState } from 'react';
import {
	FaArrowLeft,
	FaArrowRight,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaWhatsapp,
	FaTelegram,
	FaPinterest,
	FaInstagram,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { BsShare } from 'react-icons/bs';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet';
import { FaHeart } from 'react-icons/fa';
import { formatDate } from '../utils/Date';
import { motion, AnimatePresence } from 'framer-motion';
import { useBlog } from '../context/blog/BlogContext';
import { generateHashtags } from '../utils/HashTags';

const BlogPage = () => {
	const [showShareTooltip, setShowShareTooltip] = useState(false);
	const [showLoveEmoji, setShowLoveEmoji] = useState(false);
	const [emojiPosition, setEmojiPosition] = useState({ x: 0, y: 0 });
	const [showLikeAnimation, setShowLikeAnimation] = useState(false);
	const [likePosition, setLikePosition] = useState({ x: 0, y: 0 });
	const location = useLocation();
	const slug = location.pathname.split('/')[2];
	const {
		loading,
		error,
		likedPosts,
		handleLike,
		getBlogBySlug,
		getRelatedBlogs,
	} = useBlog();
	const blog = getBlogBySlug(slug);
	const relatedBlogs = blog ? getRelatedBlogs(blog) : [];

	const handleNativeShare = async () => {
		const shareData = {
			title: blog.title,
			text: `${blog.short_description} ${generateHashtags(
				`${blog.title} ${blog.detail_content}`
			)}`,
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

	const handleSocialShare = async (platform, event) => {
		// Show love emoji animation at click position
		setEmojiPosition({ x: event.clientX, y: event.clientY });
		setShowLoveEmoji(true);

		const url = encodeURIComponent(window.location.href);
		const title = encodeURIComponent(blog.title);
		const description = encodeURIComponent(blog.short_description);
		const hashtags = encodeURIComponent(
			generateHashtags(`${blog.title} ${blog.short_description}`)
		);

		let shareUrl = '';
		switch (platform) {
			case 'facebook':
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}%20${hashtags}`;
				break;
			case 'twitter':
				shareUrl = `https://x.com/intent/tweet?url=${url}&text=${title}%20${hashtags}`;
				break;
			case 'linkedin':
				shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${description}%20${hashtags}`;
				break;
			case 'whatsapp':
				shareUrl = `https://wa.me/?text=${title}%20${url}%20${hashtags}`;
				break;
			case 'telegram':
				shareUrl = `https://t.me/share/url?url=${url}&text=${title}%20${hashtags}`;
				break;
			case 'pinterest':
				shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${title}%20${hashtags}`;
				break;
			case 'instagram':
				// Instagram doesn't have a direct sharing URL, so we'll copy the link
				await navigator.clipboard.writeText(window.location.href);
				setShowShareTooltip(true);
				return;
			default:
				// Fallback for browsers that don't support Web Share API
				await navigator.clipboard.writeText(window.location.href);
				setShowShareTooltip(true);
				return;
		}

		window.open(shareUrl, '_blank', 'width=600,height=400');
	};

	const handleLikeWithAnimation = (title, slug, event) => {
		const button = event.currentTarget;
		button.classList.add('animate-like');

		// Remove animation class after animation ends
		setTimeout(() => {
			button.classList.remove('animate-like');
		}, 1000);

		// Call the original handleLike function
		handleLike(title, slug);
	};

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
		return (
			<div className='flex flex-col justify-center items-center min-h-[500px]'>
				<div className='text-red-500 mb-4'>Blog not found</div>
				<Link
					to='/blogs'
					className='bg-primary text-white px-4 py-2 rounded-md'
				>
					Back to Blogs
				</Link>
			</div>
		);
	}

	return (
		<>
			<Helmet>
				<title>{blog.title}</title>
				<meta
					name='description'
					content={`${blog.short_intro}`}
				/>
				<meta
					name='keywords'
					content={`${blog.title}, ${blog.short_intro}, ${blog.detail_content}`}
				/>
				<link
					rel='icon'
					type='image/svg+xml'
					href={blog.cover_picture}
				/>
				<meta
					name='author'
					content='WebMekanic'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta
					name='language'
					content='English'
				/>
				<meta
					name='revisit-after'
					content='7 days'
				/>
				<meta
					name='rating'
					content='General'
				/>
			</Helmet>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='px-10 lg:px-20 mb-40 mt-20 md:mt-0 min-w-[410px] sm:w-full'
			>
				{/* Love emoji animation */}
				<AnimatePresence>
					{showLoveEmoji && (
						<motion.div
							initial={{ opacity: 0, scale: 0.5, y: 0 }}
							animate={{
								opacity: [0, 0.3, 0.7, 1, 0.7, 0.3, 0],
								scale: [0.5, 0.8, 1.2, 1.5, 1.2, 0.8, 0.5],
								y: [0, -30, -60, -90, -120, -150, -180],
								x: [0, 5, -5, 5, 10, -10, -5, 5, 0],
							}}
							transition={{
								duration: 1,
								times: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
								ease: 'easeIn',
								repeat: 0,
							}}
							style={{
								position: 'fixed',
								left: emojiPosition.x,
								top: emojiPosition.y,
								zIndex: 1000,
								pointerEvents: 'none',
							}}
							className='text-4xl'
							onAnimationComplete={() => setShowLoveEmoji(false)}
						>
							❤️
						</motion.div>
					)}
				</AnimatePresence>

				<Link
					onClick={() => window.history.back()}
					className='flex items-center justify-center gap-3 font-medium bg-lightgray max-w-[100px] py-2 rounded-full my-3'
				>
					<FaArrowLeft size={16} /> Back
				</Link>
				<img
					src={`${blog.cover_picture}`}
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
				<div className='w-full flex justify-between items-center gap-5 mt-10 text-lightblack text-lg'>
					<div className='flex items-center justify-between '>
						<button
							onClick={(e) =>
								handleLikeWithAnimation(
									blog.title,
									blog.slug,
									e
								)
							}
							className={`flex items-center gap-2 text-lg ${
								likedPosts.has(blog.title)
									? 'text-red-500'
									: 'text-gray-500 hover:text-red-500'
							} transition-colors`}
						>
							<FaHeart size={20} />
							<span className='text-lightblack'>
								{blog.like_count || 0}
							</span>
						</button>
					</div>

					{/* Like animation */}
					<AnimatePresence>
						{showLikeAnimation && (
							<motion.div
								initial={{ opacity: 0, scale: 0.5, y: 0 }}
								animate={{
									opacity: [0, 0.3, 0.7, 1, 0.7, 0.3, 0],
									scale: [0.5, 0.8, 1.2, 1.5, 1.2, 0.8, 0.5],
									y: [0, -30, -60, -90, -120, -150, -180],
									x: [0, 5, -5, 5, 10, -10, -5, 5, 0],
								}}
								transition={{
									duration: 1,
									times: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
									ease: 'easeIn',
									repeat: 0,
								}}
								style={{
									position: 'fixed',
									left: likePosition.x,
									top: likePosition.y,
									zIndex: 1000,
									pointerEvents: 'none',
								}}
								className='text-4xl'
								onAnimationComplete={() =>
									setShowLikeAnimation(false)
								}
							>
								❤️
							</motion.div>
						)}
					</AnimatePresence>

					<div className='flex items-center md:gap-3 gap-2 capitalize'>
						<button
							onClick={handleNativeShare}
							className='flex items-center gap-2 hover:text-primary transition-colors'
							title='Share'
						>
							<p>share</p>
							<BsShare size={20} />
						</button>
						<div className='flex items-center md:gap-4 gap-2'>
							<button
								onClick={(e) =>
									handleSocialShare('facebook', e)
								}
								className='text-[#1877F2] hover:opacity-80 transition-opacity'
								title='Share on Facebook'
							>
								<FaFacebook size={20} />
							</button>
							<button
								onClick={(e) => handleSocialShare('twitter', e)}
								className='text-[#1DA1F2] hover:opacity-80 transition-opacity'
								title='Share on Twitter'
							>
								<FaTwitter size={20} />
							</button>
							<button
								onClick={(e) =>
									handleSocialShare('linkedin', e)
								}
								className='text-[#0A66C2] hover:opacity-80 transition-opacity'
								title='Share on LinkedIn'
							>
								<FaLinkedin size={20} />
							</button>
							<button
								onClick={(e) =>
									handleSocialShare('whatsapp', e)
								}
								className='text-[#25D366] hover:opacity-80 transition-opacity'
								title='Share on WhatsApp'
							>
								<FaWhatsapp size={20} />
							</button>
							<button
								onClick={(e) =>
									handleSocialShare('telegram', e)
								}
								className='text-[#0088cc] hover:opacity-80 transition-opacity'
								title='Share on Telegram'
							>
								<FaTelegram size={20} />
							</button>
							<button
								onClick={(e) =>
									handleSocialShare('pinterest', e)
								}
								className='text-[#E60023] hidden md:block hover:opacity-80 transition-opacity'
								title='Share on Pinterest'
							>
								<FaPinterest size={20} />
							</button>
							<button
								onClick={(e) =>
									handleSocialShare('instagram', e)
								}
								className='text-[#E4405F] hidden md:block hover:opacity-80 transition-opacity'
								title='Copy link for Instagram'
							>
								<FaInstagram size={20} />
							</button>
						</div>
						{showShareTooltip && (
							<div className='absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm'>
								Link copied to clipboard!
							</div>
						)}
					</div>
				</div>

				{relatedBlogs.length > 0 && (
					<div className='mt-20'>
						<h3 className='text-2xl font-semibold mb-8'>
							Related Posts
						</h3>
						<div className='grid md:grid-cols-3 gap-8'>
							{relatedBlogs.map((relatedBlog, index) => (
								<motion.div
									key={relatedBlog.slug}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className='rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
								>
									<img
										src={`${relatedBlog.cover_picture}`}
										alt={relatedBlog.title}
										className='w-full h-[200px] object-cover'
									/>
									<div className='p-4'>
										<h4 className='text-lg font-semibold mb-2'>
											{relatedBlog.title}
										</h4>
										<p className='text-gray-600 text-sm mb-4'>
											{relatedBlog.short_intro}
										</p>
										<Link
											to={`/blogs/${relatedBlog.slug}`}
											className='flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors'
										>
											Read More <FaArrowRight size={15} />
										</Link>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				)}
			</motion.div>
		</>
	);
};

export default BlogPage;
