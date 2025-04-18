import React from 'react'
import {  work1, work2, work3 } from '../assets/RecentsWorks'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CtaButton from '../components/CtaButton';
import { Helmet } from 'react-helmet';
const PortfolioPage = () => {
	document.title =
		'Our Portfolio | Showcasing Creative and Impactful Digital Solutions';
  return (
	<>
	<Helmet>
		<title>Our Portfolio | Showcasing Creative and Impactful Digital Solutions</title>
		<meta name="description" content="Explore our portfolio of creative and impactful digital solutions that drive engagement and business growth." />
		<meta name="keywords" content="Portfolio, Creative Solutions, Impactful Digital Solutions, Web Development, Mobile App Development, WebMekanic" />
		<meta name="author" content="WebMekanic" />
		<meta name="robots" content="index, follow" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="language" content="English" />
		<meta name="revisit-after" content="7 days" />
		<meta name="rating" content="General" />
	</Helmet>
	<motion.div
		initial={{ opacity: 0, y: 100 }}
		animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className='mt-16 md:mt-0  py-10 md:py-32 flex flex-col items-center px-5 sm:px-0 w-full'>
				<h3 className='text-3xl text-center  capitalize font-bold py-3 text-black max-w-[600px]'>
					Transforming Ideas into World-Class Digital Experiences
				</h3>
				<p className='text-lightblack max-w-[670px] text-sm sm:text-base text-center'>
					At WebMekanic, we help businesses worldwide bring their
					visions to life with cutting-edge web and mobile solutions.
					Our expertise enables clients to launch, scale, and succeed
					with high-impact, user-centric designs that drive engagement
					and business growth.
				</p>
			</div>
			<div className='py-10 px-5 md:p-10 bg-primary/10 sm:mx-10 rounded-2xl mb-24'>
				<div className='py-10'>
					<h2 className='text-center font-bold text-3xl capitalize'>
						our portfolio
					</h2>
					<p className='text-center text-lightblack py-3'>
						Take a look at some of the innovative projects we’ve
						delivered for our clients
					</p>
				</div>
				<div className='flex flex-col gap-16'>
					<motion.div
						whileInView={{ y: [100, 50, 0] }}
						initial={{ y: 0 }}
						transition={{ duration: 1, easings: 'linear' }}
						className=' text-lightblack grid grid-col-1 lg:grid-cols-2 items-center gap-10 lg:gap-20  bg-primary/5 rounded-2xl p-5 md:p-16 '
					>
						<div className=' bg-lightsecondary p-5 rounded-xl hover:scale-105 transition-all ease-linear'>
							<img
								src={
									'https://res.cloudinary.com/dm2pa4nll/webmekanic/work3_sy50oy.png'
								}
								alt=''
							/>
						</div>
						<div className='flex flex-col gap-3'>
							<div className='flex items-center gap-2 sm:gap-5'>
								<div className='bg-primary/30 px-3 py-1 rounded-full text-xs md:text-sm text-black'>
									UI/UX Design
								</div>
								<div className='bg-primary/30 px-3 py-1 text-xs md:text-sm rounded-full text-black'>
									Custom Web Development
								</div>
							</div>
							<h2 className='font-bold text-black text-2xl'>
								Grevego
							</h2>
							<p>
								Grevego is a sustainable marketplace that
								connects consumers with fresh, local produce
								while minimizing environmental impact. They
								offer personalized nutrition guidance powered by
								artificial intelligence and ensure eco-friendly,
								temperature-controlled delivery to promote
								healthy living and reduce food waste.
							</p>
							<Link to={'https://test-beige-zeta-65.vercel.app/'}>
								<CtaButton
									title={'View Project'}
									style={'px-8 py-2 rounded-md '}
								/>
							</Link>
						</div>
					</motion.div>
					<motion.div
						whileInView={{ y: [100, 50, 0] }}
						initial={{ y: 0 }}
						transition={{ duration: 1, easings: 'linear' }}
						className=' text-lightblack grid grid-col-1 lg:grid-cols-2 items-center gap-10 lg:gap-20  bg-primary/5 rounded-2xl p-5 md:p-16 '
					>
						<div className='flex flex-col gap-3'>
							<div className='flex items-center gap-2 sm:gap-5'>
								<div className='bg-primary/30 px-3 py-1 rounded-full text-xs md:text-sm text-black'>
									UI/UX Design
								</div>
								<div className='bg-primary/30 px-3 py-1 text-xs md:text-sm rounded-full text-black'>
									Custom Web Development
								</div>
							</div>
							<h2 className='font-bold text-black text-2xl'>
								MyScooty
							</h2>
							<p>
								MyScooty is a Nigerian delivery platform
								offering door-to-door services for food,
								groceries, medical supplies, and parcels, with a
								user-friendly app and real-time tracking. It
								supports local businesses and provides dedicated
								delivery solutions for companies.
							</p>
							<Link to={'https://myscooty.ng/'}>
								<CtaButton
									title={'View Project'}
									style={'px-8 py-2 rounded-md '}
								/>
							</Link>
						</div>
						<div className=' bg-lightsecondary p-5 rounded-xl hover:scale-105 transition-all ease-linear'>
							<img
								src={
									'https://res.cloudinary.com/dm2pa4nll/webmekanic/shxwbilsd9yqsw54p7ev.png'
								}
								alt=''
								className='w-full'
							/>
						</div>
					</motion.div>
					<motion.div
						whileInView={{ y: [100, 50, 0] }}
						initial={{ y: 0 }}
						transition={{ duration: 1, easings: 'ease' }}
						className=' text-lightblack grid grid-col-1 lg:grid-cols-2 items-center gap-10 lg:gap-20  bg-primary/5 rounded-2xl p-5 md:p-16 '
					>
						<div className=' bg-lightsecondary p-5 rounded-xl hover:scale-105 transition-all ease-linear'>
							<img
								src={
									'https://res.cloudinary.com/dm2pa4nll/webmekanic/work1_yk5z14.svg'
								}
								alt=''
							/>
						</div>
						<div className='flex flex-col gap-3'>
							<div className='flex items-center gap-2 sm:gap-5'>
								<div className='bg-primary/30 px-3 py-1 rounded-full text-xs md:text-sm text-black'>
									UI/UX Design
								</div>
								<div className='bg-primary/30 px-3 py-1 text-xs md:text-sm rounded-full text-black'>
									Custom Web Development
								</div>
							</div>
							<h2 className='font-bold text-black text-2xl'>
								WeHoldaHand
							</h2>
							<p>
								We Hold A Hand is a mental health and wellness
								advocacy platform dedicated to inspiring purpose
								and turning dreams into reality, particularly
								for underserved communities.
							</p>
							<Link to={'https://weholdahand.com/'}>
								<CtaButton
									title={'View Project'}
									style={'px-8 py-2 rounded-md '}
								/>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
		</>
  );
}

export default PortfolioPage