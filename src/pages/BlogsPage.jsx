import React from 'react';
import { FaArrowRight, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { motion } from 'framer-motion';
import { formatDate } from '../utils/Date';
import { useBlog } from '../context/blog/BlogContext';
import { Helmet } from 'react-helmet';
const BlogsPage = () => {
	const {
		blogs,
		loading,
		error,
		likedPosts,
		handleLike,
		getFeaturedBlog,
		currentPage,
		totalPages,
		handlePageChange,
	} = useBlog();
	const featuredBlog = getFeaturedBlog();

	const renderPaginationNumbers = () => {
		const pages = [];
		const maxVisiblePages = 5;
		let startPage = Math.max(
			1,
			currentPage - Math.floor(maxVisiblePages / 2)
		);
		let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

		if (endPage - startPage + 1 < maxVisiblePages) {
			startPage = Math.max(1, endPage - maxVisiblePages + 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(
				<button
					key={i}
					onClick={() => handlePageChange(i)}
					className={`flex items-center justify-center w-8 h-8 text-sm rounded-full ${
						currentPage === i
							? 'bg-primary text-white'
							: 'bg-gray-100 hover:bg-gray-200'
					}`}
				>
					{i}
				</button>
			);
		}

		return pages;
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
				<button
					onClick={() => window.location.reload()}
					className='bg-primary text-white px-4 py-2 rounded-md'
				>
					Try Again
				</button>
			</div>
		);
	}

	return (
		<>
			<Helmet>
				<title>Blogs | WebMekanic</title>
				<meta
					name='description'
					content='Explore our latest blog posts and stay updated with the latest trends in web development and digital marketing.'
				/>
				<meta
					name='keywords'
					content='Blogs, Web Development, Digital Marketing, Latest Trends, WebMekanic'
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
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='mt-20 md:mt-10 flex flex-col items-center px-5 md:px-10 lg:px-20'
			>
				{featuredBlog && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='rounded-md w-full h-[200px] md:h-[500px] border md:p-10 text-white flex flex-col justify-end relative overflow-hidden'
					>
						<div
							className='absolute inset-0 bg-cover bg-center bg-no-repeat '
							style={{
								backgroundImage: `url(${featuredBlog.cover_picture})`,
							}}
						/>
						<div className='absolute inset-0 bg-black/50' />
						<div className='relative  p-5'>
							<div className='flex flex-col gap-2'>
								<h3 className='md:text-2xl font-thin md:font-medium'>
									Featured
								</h3>
								<h1 className='text-xl md:text-4xl font-medium max-w-[700px]'>
									{featuredBlog.title}
								</h1>
								<div className='flex items-center gap-8'>
									<p className='text-sm md:text-xl text-intro font-thin md:font-normal '>
										{featuredBlog.short_intro}
									</p>
									<Link
										to={`/blogs/${featuredBlog.slug}`}
										className='bg-primary text-center px-5 py-3 rounded-md min-w-[120px] hover:bg-primary/90 transition-colors'
									>
										Read More
									</Link>
								</div>
							</div>
						</div>
					</motion.div>
				)}

				<section className='mt-10 mb-40 w-full'>
					<h2 className='font-semibold text-2xl py-3'>
						Latest Posts
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 justify-center'>
						{blogs.map((blog, index) => (
							<motion.div
								key={blog.slug || index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className=' md:w-full rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
							>
								<img
									src={`${blog.cover_picture}`}
									alt={blog.title}
									className='w-full h-[300px] object-cover'
								/>
								<div className='flex flex-col gap-2 p-4'>
									<h3 className='text-xl font-semibold text'>
										{blog.title}
									</h3>
									<p className='text-gray-600 text-intro'>
										{blog.short_intro}
									</p>
									<div className='flex items-center justify-between mt-2'>
										<p className='text-gray-500 text-sm'>
											{formatDate(blog.created_at)}
										</p>
										<button
											onClick={() =>
												handleLike(
													blog.title,
													blog.slug
												)
											}
											className={`flex items-center gap-1 text-sm ${
												likedPosts.has(blog.title)
													? 'text-red-500'
													: 'text-gray-500 hover:text-red-500'
											} transition-colors`}
										>
											<FaHeart />
											<span>{blog.like_count || 0}</span>
										</button>
									</div>
									<Link
										to={`/blogs/${blog.slug}`}
										className='flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors'
									>
										Read More <FaArrowRight size={15} />
									</Link>
								</div>
							</motion.div>
						))}
					</div>

					{blogs.length > 0 && (
						<div className='flex items-center gap-8 w-full mt-20 justify-center border-t py-2 border-b border-lightblack/20'>
							<button
								onClick={() =>
									handlePageChange(currentPage - 1)
								}
								disabled={currentPage === 1}
								className={`bg-gray-100 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-200 transition-colors ${
									currentPage === 1
										? 'opacity-50 cursor-not-allowed'
										: ''
								}`}
							>
								Previous
							</button>
							<div className='flex items-center gap-3'>
								{renderPaginationNumbers()}
								{totalPages > 5 && (
									<>
										<span className='text-gray-500'>
											of
										</span>
										<span className='bg-gray-100 flex items-center justify-center w-8 h-8 text-sm rounded-full'>
											{totalPages}
										</span>
									</>
								)}
							</div>
							<button
								onClick={() =>
									handlePageChange(currentPage + 1)
								}
								disabled={currentPage === totalPages}
								className={`bg-gray-100 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-200 transition-colors ${
									currentPage === totalPages
										? 'opacity-50 cursor-not-allowed'
										: ''
								}`}
							>
								Next
							</button>
						</div>
					)}
				</section>
			</motion.div>
		</>
	);
};

export default BlogsPage;
