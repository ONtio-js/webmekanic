import React, { createContext, useContext, useState, useEffect } from 'react';
import { GOOGLE_SHEET_URL, BASE_API_URL } from '../../Constant';

const BlogContext = createContext();

export const useBlog = () => {
	const context = useContext(BlogContext);
	if (!context) {
		throw new Error('useBlog must be used within a BlogProvider');
	}
	return context;
};

export const BlogProvider = ({ children }) => {
	const [allBlogs, setAllBlogs] = useState([]);
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(6);
	const [likedPosts, setLikedPosts] = useState(() => {
		const savedLikes = localStorage.getItem('likedPosts');
		return savedLikes ? new Set(JSON.parse(savedLikes)) : new Set();
	});

	const fetchBlogs = async () => {
		try {
			setLoading(true);
			const response = await fetch(`${BASE_API_URL}blog/posts/`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			setAllBlogs(data);
			updatePaginatedBlogs(data, currentPage);
		} catch (error) {
			console.error('Fetch error:', error);
			setError(`Failed to fetch blogs: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};

	const updatePaginatedBlogs = (allBlogs, page) => {
		const startIndex = (page - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		setBlogs(allBlogs.slice(startIndex, endIndex));
		setCurrentPage(page);
	};

	const handlePageChange = (page) => {
		updatePaginatedBlogs(allBlogs, page);
	};

	const handleLike = async (title, slug) => {
		if (likedPosts.has(title)) {
			alert('You have already liked this post!');
			return;
		}

		try {
			console.log('Attempting to like post:', { title, slug });
			const url = `${BASE_API_URL}blog/posts/like/?slug=${slug}`;
			console.log('Request URL:', url);

			const response = await fetch(url, {
				method: 'POST',

				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});

			console.log('Response status:', response.status);
			console.log('Response headers:', response.headers);

			if (!response.ok) {
				const errorText = await response.text();
				console.error('Error response:', errorText);
				throw new Error(
					`HTTP error! status: ${response.status}, message: ${errorText}`
				);
			}

			const data = await response.json();
			console.log('Success response:', data);

			setLikedPosts((prev) => new Set([...prev, title]));
			localStorage.setItem(
				'likedPosts',
				JSON.stringify([...likedPosts, title])
			);
			await fetchBlogs();
		} catch (error) {
			console.error('Like error details:', error);
			alert(`Failed to like post: ${error.message}`);
		}
	};

	const getBlogBySlug = (slug) => {
		return blogs.find((blog) => blog.slug === slug);
	};

	const getFeaturedBlog = () => {
		return blogs.find((blog) => blog.is_featured == '1');
	};

	const getRelatedBlogs = (currentBlog, limit = 3) => {
		if (!currentBlog || !blogs.length) return [];

		// Remove the current blog from the list
		const otherBlogs = blogs.filter(
			(blog) => blog.slug !== currentBlog.slug
		);

		// Calculate similarity scores based on title and description
		const blogsWithScores = otherBlogs.map((blog) => {
			let score = 0;

			// Check for matching words in titles
			const currentTitleWords = currentBlog.title
				.toLowerCase()
				.split(' ');
			const blogTitleWords = blog.title.toLowerCase().split(' ');
			const titleMatches = currentTitleWords.filter(
				(word) => blogTitleWords.includes(word) && word.length > 3
			).length;
			score += titleMatches * 2;

			// Check for matching words in descriptions
			const currentDescWords = currentBlog.short_intro
				.toLowerCase()
				.split(' ');
			const blogDescWords = blog.short_intro.toLowerCase().split(' ');
			const descMatches = currentDescWords.filter(
				(word) => blogDescWords.includes(word) && word.length > 3
			).length;
			score += descMatches;

			return { ...blog, score };
		});

		// Sort by score and return top N blogs
		return blogsWithScores
			.sort((a, b) => b.score - a.score)
			.slice(0, limit);
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	const value = {
		blogs,
		loading,
		error,
		likedPosts,
		handleLike,
		getBlogBySlug,
		getFeaturedBlog,
		getRelatedBlogs,
		fetchBlogs,
		currentPage,
		totalPages: Math.ceil(allBlogs.length / itemsPerPage),
		handlePageChange,
	};

	return (
		<BlogContext.Provider value={value}>{children}</BlogContext.Provider>
	);
};
