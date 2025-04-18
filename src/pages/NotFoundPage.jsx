import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const Eye = () => {
	const eyeRef = useRef(null);
	const pupilRef = useRef(null);

	const eyeX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
	const eyeY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!eyeRef.current) return;

			const eyeRect = eyeRef.current.getBoundingClientRect();
			const eyeCenterX = eyeRect.left + eyeRect.width / 2;
			const eyeCenterY = eyeRect.top + eyeRect.height / 2;

			// Calculate distance from mouse to eye center
			const distanceX = e.clientX - eyeCenterX;
			const distanceY = e.clientY - eyeCenterY;

			// Calculate the angle
			const angle = Math.atan2(distanceY, distanceX);

			// Calculate the distance (with a maximum limit)
			const maxDistance = 15;
			const distance = Math.min(
				Math.sqrt(distanceX * distanceX + distanceY * distanceY) / 15,
				maxDistance
			);

			// Calculate new position
			const moveX = Math.cos(angle) * distance;
			const moveY = Math.sin(angle) * distance;

			eyeX.set(moveX);
			eyeY.set(moveY);
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<motion.div
			ref={eyeRef}
			className='relative w-24 h-24 bg-lightprimary rounded-full  flex items-center justify-center overflow-hidden'
		>
			<div className='flex items-center gap-x-2 justify-center'>
				<motion.div
					ref={pupilRef}
					className='w-7 h-7 bg-black rounded-full flex items-center justify-center'
					style={{
						x: eyeX,
						y: eyeY,
					}}
				>
					<div className='w-2 h-2 bg-white rounded-full' />
				</motion.div>
				<motion.div
					ref={pupilRef}
					className='w-7 h-7 bg-black rounded-full flex items-center justify-center'
					style={{
						x: eyeX,
						y: eyeY,
					}}
				>
					<div className='w-2 h-2 bg-white rounded-full' />
				</motion.div>
			</div>
		</motion.div>
	);
};

const NotFoundPage = () => {
	return (
		<>
			<Helmet>
				<title>404 - Page Not Found | WebMekanic</title>
				<meta
					name='description'
					content="The page you're looking for doesn't exist or has been moved."
				/>
				<meta
					name='robots'
					content='noindex, nofollow'
				/>
			</Helmet>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='min-h-[80vh] mt-20 md:mt-0 flex flex-col items-center justify-center px-5 md:px-20'
			>
				<motion.div
					initial={{ scale: 0.5 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='flex items-center gap-4 mb-4'
				>
					<span className='text-[10rem] font-bold text-primary rock-3d-regular'>
						4
					</span>
					<Eye />

					<span className='text-[10rem] font-bold text-primary rock-3d-regular'>
						4
					</span>
				</motion.div>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='text-2xl md:text-3xl font-semibold text-center mb-4'
				>
					Oops! Page Not Found
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className='text-gray-600 text-center mb-8 max-w-md'
				>
					The page you're looking for doesn't exist or has been moved.
					Let's get you back on track!
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className='flex flex-col sm:flex-row gap-4'
				>
					<Link
						to='/'
						className='flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors'
					>
						<FaHome />
						<span>Go Home</span>
					</Link>
					<button
						onClick={() => window.history.back()}
						className='flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors'
					>
						<FaArrowLeft />
						<span>Go Back</span>
					</button>
				</motion.div>
			</motion.div>
		</>
	);
};

export default NotFoundPage;
