import React from 'react'
import { dhome, dhome2, dhome4, ikoro, recent1, work1, work2 } from '../assets/RecentsWorks'
import { IoArrowForwardOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { recentWorks } from '../Constant';
import { Link } from 'react-router-dom';
import CtaButton from '../components/CtaButton';
const PortfolioPage = () => {
	document.title =
		'Our Portfolio | Showcasing Creative and Impactful Digital Solutions';
  return (
		<>
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
								src={work2}
								alt=''
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
								src={work1}
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
		</>
  );
}

export default PortfolioPage