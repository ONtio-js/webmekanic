import React, { useState } from 'react';
import CtaButton from '../components/CtaButton';
import {
	cta,
	heroImage,
	project1,
	project2,
	testmony1,
} from '../assets/images';
import { LiaLightbulb } from 'react-icons/lia';
import '../App.css';
import { service, testimonies } from '../Constant';
import Company from '../components/Company';
import Approach from '../components/Approach';
import Teams from '../components/Teams';
import { useNavigate, Link } from 'react-router-dom';
import { dhome, dhome2, dhome3, dhome4, ikoro, spacee, work1, work2 } from '../assets/RecentsWorks';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testmonials from '../components/Testmonials';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
const HomePage = () => {
	const navigate = useNavigate();
	const [rotate,setRotate] =useState(false);
	const [rotate1, setRotate1] = useState(false);
	return (
		<>
			<div className='mt-16 px-5 md:px-20   flex flex-col sm:flex-row sm:items-center justify-between md:gap-x-20'>
				<div className='   md:flex-1 md:max-w-[800px]'>
					<h3 className='font-[700] py-3 text-3xl md:font-bold md:text-5xl text-center sm:text-left lg:text-[4.8em] capitalize max-w-[800px]'>
						crafting digital excellence. your vision,{' '}
						<span className='text-primary '>our expertise.</span>
					</h3>
					<h6 className=' hidden font-medium py-2 text-[17px] lg:text-[2.5em] sm:block text-lightblack'>
						Empowering business with cutting-edge technology
					</h6>
					<p className='text-lightblack text-sm hidden md:text-base md:block '>
						At webmekanic, we specialize in creating custom web and
						mobile applications tailored to business needs. Discover
						how our solutions can elevate your digital presence.
					</p>

					{/* <Link to={'/contact'}>
						<CtaButton
							onclick={() => navigate('/contact')}
							title={'Contact Us'}
							style={'px-9 py-2 rounded-md hidden md:block my-8'}
						/>
					</Link> */}
				</div>
				<div className='rounded-md '>
					<img
						className='rounded-md '
						src={heroImage}
						alt=''
						srcset=''
					/>
				</div>
			</div>
			<p className='p-5 text-lightblack md:text-sm md:hidden '>
				At webmekanic, we specialize in creating custom web and mobile
				applications tailored to business needs. Discover how our
				solutions can elevate your digital presence.
			</p>
			<div className='w-full flex items-center md:px-20 justify-between px-5 py-10 lg:max-w-[650px]'>
				<Link to={'https://calendly.com/webmekanic-info/30min'}>
					<CtaButton
						title={'Book a Free Consultation'}
						style={
							' px-7 sm:px-10 font-semibold py-4 rounded-md  shadow-md'
						}
					/>
				</Link>
			
			</div>
			<motion.div
				initial={{ translateX: -200 }}
				transition={{
					duration: 0.7,
				}}
				whileInView={{ translateX: 0 }}
				className='px-5 md:px-20 py-10 flex items-center'
			>
				<Company />
			</motion.div>
			<div className='flex flex-col items-center px-5 md:px-20  gap-10 py-20'>
				<div className=' '>
					<h3 className='font-bold text-3xl text-center '>
						We build for the Future
					</h3>
					<p className='text-lightblack text-base md:text-sm py-4 max-w-[400px] text-center'>
						At webmekanic, we are dedicated to creating
						forward-thinking solutions that stand the test of time.
					</p>
				</div>
				<div className='grid md:grid-cols-2  justify-items-center text-lightblack  justify-center gap-10'>
					<motion.div
						initial={{ translateX: -200 }}
						whileInView={{ translateX: 0 }}
						transition={{ duration: 1 }}
						className='flex flex-col items-center max-w-[450px] p-10 rounded-2xl bg-lightsecondary gap-8 '
						onClick={() => setRotate1(!rotate1)}
					>
						<motion.button
							className='bg-primary/40 p-2 rounded-md'
							animate={{ rotate: rotate1 ? 360 : 0 }}
						>
							<LiaLightbulb
								size={24}
								color='lightgray'
							/>
						</motion.button>
						<div>
							<h4 className='capitalize text-black font-medium text-center text-xl pb-2'>
								innovative solutions
							</h4>
							<p className='text-lightblack text-center'>
								Our team leverages the latest technologies and
								industry best practices to deliver cutting-edge
								applications. From Ai-driven features to
								advanced data analytics, we ensure our solutions
								are at the forefront of technological
								advancements.
							</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ translateX: 200 }}
						whileInView={{ translateX: 0 }}
						transition={{ duration: 1 }}
						className='flex flex-col items-center max-w-[450px] p-10 rounded-2xl bg-lightsecondary gap-8 '
						onClick={() => setRotate(!rotate)}
					>
						<motion.button
							className='bg-primary/40 p-2 rounded-md'
							animate={{ rotate: rotate ? 360 : 0 }}
						>
							<LiaLightbulb
								size={24}
								color='lightgray'
							/>
						</motion.button>
						<div>
							<h4 className='capitalize text-center font-medium text-black text-xl pb-2'>
								sustainable development
							</h4>
							<p className='text-lightblack text-center'>
								We prioritize sustainability in our development
								processes, creating applications that are not
								only efficient and robust but also
								environmentally friendly. Our commitment to
								sustainable practices ensures that our solutions
								contribute positively to the digital ecosystem
							</p>
						</div>
					</motion.div>
				</div>
			</div>
			<div className='px-5 md:px-20 py-20 bg-serviceBg tab:bg-none bg-no-repeat flex flex-col items-center'>
				<div className='flex flex-col justify-center items-center'>
					<h3 className='text-center font-bold text-3xl  capitalize'>
						our services
					</h3>
					<p className='text-center text-lightblack py-10 md:max-w-[600px]'>
						Unlock the full potential of your business with our
						comprehensive suite of services designed to propel you
						towards digital excellence. From concept to execution,
						we're here to guide you every step of the way.
					</p>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 items-center  gap-x-10 '>
					{service.map((service) => (
						<motion.div
							whileInView={{ y: [100, 50, 0] }}
							initial={{ y: 0 }}
							transition={{ duration: 1, easings: 'linear' }}
							to={`/services#${service.title}`}
							className='relative md:h-[300px] group tab:h-[350px] p-6 shadow-xl my-10 rounded-xl hover:bg-lightsecondary transition-all ease-in '
						>
							<button className='p-4 my-4 rounded-xl  bg-lightsecondary group-hover:bg-white'>
								<img
									src={service.logo}
									alt=''
									srcset=''
								/>
							</button>
							<h4 className='font-medium'>{service.title}</h4>
							<p className='text-lightblack text-sm'>
								{service.description}
							</p>
							<Link to={'/services'} className='group-hover:flex items-center gap-3 transition-all duration-150 ease-in text-sm text-primary md:absolute pt-4 md:pt-0 bottom-10 capitalize hidden  '>learn more <span><FaArrowRight size={10}/></span></Link>
						</motion.div>
					))}
				</div>
			</div>
			<Approach />
			<div className='bg-lightsecondary mx-5 px-2 md:px-10 py-10 lg:mx-16 rounded-2xl  '>
				<div className='py-10 flex flex-col items-center gap-2'>
					<h2 className='font-bold capitalize text-3xl'>
						our portfolio
					</h2>
					<p className='text-lightblack'>
						Take a look at some of the innovative projects we’ve
						delivered for our clients
					</p>
				</div>
				<div className='flex flex-col gap-16'>
					<div className=' text-lightblack grid grid-col-1 lg:grid-cols-2 items-center gap-10 lg:gap-20  bg-primary/5 rounded-2xl p-5 md:p-16 '>
						<div className='flex flex-col gap-4'>
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
									style={'px-8 py-2 rounded-md mt-10 '}
								/>
							</Link>
						</div>
						<div className='  justify-center bg-lightsecondary p-5 rounded-xl hover:scale-105 transition-all ease-linear'>
							<img
								src={work2}
								alt=''
							/>
						</div>
					</div>
					<div className=' text-lightblack grid grid-col-1 lg:grid-cols-2 items-center gap-10 lg:gap-20  bg-primary/5 rounded-2xl p-5 md:p-16 '>
						<div className=' gap-2 justify-center bg-lightsecondary p-5 rounded-xl hover:scale-105 transition-all ease-linear'>
							<img
								src={work1}
								alt=''
							/>
						</div>
						<div className='flex flex-col gap-4'>
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
									style={'px-8 py-2 rounded-md mt-10 '}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='px-5 md:px-20 py-20 grid gap-y-5 w-full'>
				<div className='flex flex-col items-center gap-y-5'>
					<h3 className='font-bold text-3xl capitalize text-center py-2'>
						what our clients say
					</h3>
					<p className=' text-center text-lightblack'>
						Hear from our satisfied clients who have experienced the
						webmekanic difference
					</p>
				</div>

				{/* {testimonies.map((testimony) => (
						<div className='grid sm:grid-cols-2 max-w-[800px] pt-10 items-center content-center  '>
							<div className='w-[20em] ml-3 sm:ml-0 bg-gradient-to-t from-lightprimary to-white rounded-full overflow-hidden px-10 pt-10'>
								<img
									className='mx-auto sm:mx-0'
									src={testmony1}
									alt='testmony_image'
									srcset=''
								/>
							</div>
							<div className='text-lightblack flex flex-col gap-y-2'>
								<h4 className='font-medium'>
									{testimony.organisation}
								</h4>
								<p>{testimony.decription}</p>
								<p className=' font-serif text'>
									<span className='font-bold text-2xl'>
										-
									</span>{' '}
									{testimony.name},{' '}
									<span className='text-xs'>
										{testimony.position}
									</span>
								</p>
							</div>
						</div>
					))} */}
				<Testmonials />
			</div>
			<Teams />
		</>
	);
};

export default HomePage;
