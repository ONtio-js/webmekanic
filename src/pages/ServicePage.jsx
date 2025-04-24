import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	maintenance,
	mobileApp,
	service,
	uiUxDesign,
	webDevelopment,
} from '../Constant';
import {
	app,
	app2,
	app3,
	design,
	design2,
	design3,
	group,
	maintenance1,
	maintenance2,
	maintenance3,
	website,
	website2,
	website3,
} from '../assets/services';
import { GrCheckmark } from 'react-icons/gr';
import { FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
const ServicePage = () => {
	const [activeService, setActiveService] = useState('UI/UX Design');
	const [activeId, setActiveId] = useState(1);

	const handleServiceBtn = (title, id) => {
		setActiveService(title);
		setActiveId(id);
	};

	const serviceContent = useMemo(() => {
		switch (activeService) {
			case 'UI/UX Design':
				return {
					title: 'UI/UX Design – Crafting Engaging & User-Centric Experiences',
					banner: design,
					description:
						"Great design goes beyond aesthetics. it's about usability, accessibility, and creating experiences that users love. Our UI/UX design services ensure that your digital product is not only visually stunning but also intuitive and user-friendly.",
					features: uiUxDesign[0],
					benefits: uiUxDesign[1],
					images: [design2, design3],
				};
			case 'Web Development':
				return {
					title: 'Web Development – Building High-Performance, Scalable Websites',
					banner: website,
					description:
						'Your website is your digital storefront. it should be fast, secure, and visually appealing. We develop high-performance websites that elevate your brand, attract customers, and drive business growth.',
					features: webDevelopment[0],
					benefits: webDevelopment[1],
					images: [website2, website3],
				};
			case 'Mobile Development':
				return {
					title: 'App Development – Building Powerful & Intuitive Mobile Experiences',
					banner: app,
					description:
						"In today's digital world, mobile apps are essential for businesses to connect with customers on the go. We develop high-performance, user-friendly mobile applications that deliver seamless experiences, ensuring engagement and growth across iOS and Android platforms.",
					features: mobileApp[0],
					benefits: mobileApp[1],
					images: [app2, app3],
				};
			case 'Maintenance & Support':
				return {
					title: 'Maintenance & Support – Ensuring Peak Performance & Security',
					banner: maintenance1,
					description:
						'A great website or app needs continuous support to stay secure, up-to-date, and optimized for performance. Our maintenance services ensure your digital product runs smoothly at all times.',
					features: maintenance[0],
					benefits: maintenance[1],
					images: [maintenance2, maintenance3],
				};
			default:
				return null;
		}
	}, [activeService]);


	return (
		<>
		<Helmet>
			<title>Our Services | Tailored Digital Solutions to Elevate Your Brand</title>
			<meta name="description" content="Explore our comprehensive suite of services designed to elevate your brand and drive digital excellence. From UI/UX design to web development and mobile app development, we deliver tailored solutions that align with your business goals." />
			<meta name="keywords" content="UI/UX Design, Web Development, Mobile App Development, Maintenance & Support, Digital Solutions, Brand Elevation, User-Centric Design, Scalable Websites, Mobile Apps, Website Maintenance, Digital Transformation" />
			<meta name="author" content="WebMekanic" />
			<meta name="robots" content="index, follow" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="language" content="English" />
			<meta name="revisit-after" content="7 days" />
			<meta name="rating" content="General" />
			<meta name="googlebot" content="index, follow" />
			<meta name="google" content="notranslate" />
			
			
			
		</Helmet>
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className='w-full px-5 md:px-20 text-center my-5 flex flex-col items-center gap-5 py-20'>
				<h3 className='font-bold text-xl md:text-3xl capitalize'>
					Empowering Your Digital Transformation
				</h3>
				<p className='max-w-[600px] text-lightblack text-center'>
					Unlock the full potential of your business with our
					comprehensive suite of services designed to propel you
					towards digital excellence. From concept to execution, we're
					here to guide you every step of the way.
				</p>
				<img
					src={group}
					className='py-10 w-full'
					alt='Digital Transformation'
				/>
			</div>
			<div className=''>
				<div className='px-5 md:px-0 grid grid-cols-4 gap-10 sm:gap-4 w-full text-lightblack'>
					{service.map((service) => (
						<motion.button
							key={service.id}
							className={`${
								activeId === service.id
									? 'md:bg-primary/80 text-white'
									: 'bg-lightsecondary'
							} group transition-all ease-in capitalize shadow-md sm:flex hover:translate-x-1 flex-col gap-5 items-center text-sm font-medium md:text-lg md:p-4 md:py-5 rounded-xl`}
							onClick={() =>
								handleServiceBtn(service.title, service.id)
							}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<div
								className={`p-5 ${
									activeId === service.id ? 'bg-white' : ''
								} has-tooltip transition-all ease-in rounded-2xl`}
							>
								<span className='tooltip md:hidden text-xs text-primary text-nowrap rounded-md block bg-primary/20 px-4 py-1'>
									{service.title}
								</span>
								<motion.img
									src={service.logo}
									alt='service_icon'
									width={40}
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.5 }}
								/>
							</div>
							<p className='hidden transition-all ease-in md:inline-block'>
								{service.title}
							</p>
							<p
								className={`${
									activeId === service.id
										? 'hidden'
										: 'hidden md:flex'
								} capitalize items-center gap-2 text-primary text-sm`}
							>
								learn more{' '}
								<span>
									<FaArrowRight size={10} />
								</span>
							</p>
						</motion.button>
					))}
				</div>
				<div className='px-5 md:px-20 pb-8 md:py-16 text-lightblack max-w-[1200px]'>
					<AnimatePresence mode='wait'>
						{serviceContent && (
							<motion.div
								key={activeService}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
							>
								<h1 className='font-semibold md:text-2xl text-black pt-10'>
									{serviceContent.title}
								</h1>
								<div className='grid gap-10 pt-5 pb-32'>
									<div>
										<img
											src={serviceContent.banner}
											alt={`${activeService} banner`}
											className='w-full'
										/>
									</div>
									<div>
										<h2 className='font-medium md:text-2xl pb-5'>
											{activeService === 'UI/UX Design'
												? 'User First Design'
												: activeService ===
												  'Web Development'
												? 'Blending Aesthetics with Performance'
												: activeService ===
												  'Mobile Development'
												? 'End-to-End Mobile App Development'
												: 'Reliable Website and App Maintenance for Optimal Performance'}
										</h2>
										<p className=''>
											{serviceContent.description}
										</p>
									</div>
									<div>
										<h2 className='capitalize font-medium md:text-2xl py-5'>
											service Includes
										</h2>
										{serviceContent.features.map(
											(item, index) => (
												<div
													key={index}
													className='flex items-center gap-4'
												>
													<input
														type='checkbox'
														checked
														className='accent-green-600 size-4'
														readOnly
													/>
													<span>{item.title}</span>
												</div>
											)
										)}
									</div>
									<div className='flex flex-col gap-10'>
										<div className='flex items-center justify-start gap-2 md:gap-10'>
											{serviceContent.images.map(
												(img, index) => (
													<img
														key={index}
														src={img}
														alt={`${activeService} illustration ${
															index + 1
														}`}
														className='w-[50%]'
													/>
												)
											)}
										</div>
										<div>
											<h2 className='font-medium md:text-2xl py-4'>
												Benefits
											</h2>
											{serviceContent.benefits.map(
												(item, index) => (
													<div
														key={index}
														className='flex items-center gap-4'
													>
														<GrCheckmark className='font-bold size-5' />
														<p className='list-inside'>
															{item}
														</p>
													</div>
												)
											)}
										</div>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
		</>
	);
};

export default ServicePage;
