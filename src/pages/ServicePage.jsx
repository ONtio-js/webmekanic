import React, { useState } from 'react';
import { uidesign, mobile } from '../assets/images';
import { motion } from 'framer-motion';
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
const ServicePage = () => {
  const [customWebsite, setCustomWebsite] = useState(false);
  const [userInterface, setUserInterface] = useState(true);
  const [mobileApplication, setMobileApplication] = useState(false);
  const [smaintenance,setSmaintenance] = useState(false);
  const [rotate,setRotate] = useState(false);
  const [active,setActive] = useState(1);
  const handleServiceBtn = (title) => {
    
    if(title=='Maintenance & Support'){
      setCustomWebsite(false);
      setMobileApplication(false);
      setUserInterface(false);
      setSmaintenance(true);
      console.log('hello')
    }else if(title == 'Mobile Development'){
      setCustomWebsite(false);
      setSmaintenance(false);
      setUserInterface(false)
      setMobileApplication(true);
    }else if (title == 'Web Development'){
      setUserInterface(false);
      setMobileApplication(false);
      setSmaintenance(false);
      setCustomWebsite(true);
    }else if (title == 'UI/UX Design'){
      setCustomWebsite(false);
      setMobileApplication(false);
      setSmaintenance(false);
      setUserInterface(true);
    }
  }
  document.title =
		'Our Services | Tailored Digital Solutions to Elevate Your Brand';
	return (
		<>
			<div className='w-full px-5 md:px-20 text-center  my-5 flex flex-col items-center gap-5 py-20'>
				<h3 className='font-bold text-xl md:text-3xl capitalize '>
					Empowering Your Digital Transformation
				</h3>
				<p className='max-w-[600px] text-lightblack text-center'>
					Unlock the full potential of your business with our
					comprehensive suite of services designed to propel you
					towards digital excellence. From concept to execution, we're
					here to guide you every step of the way.
				</p>
				<img
					src={
						'https://res.cloudinary.com/dm2pa4nll/webmekanic/group_ehfkhx.svg'
					}
					className='py-10 w-full'
				/>
			</div>
			<div className=''>
				<div className='px-5 md:px-0 grid grid-cols-4 gap-10 sm:gap-4 w-full  text-lightblack'>
					{service.map((service) => (
						<motion.button
							className={` ${
								active == service.id
									? 'md:bg-primary/80 text-white'
									: 'bg-lightsecondary'
							} group transition-all ease-in capitalize shadow-md md:flex hover:translate-x-1 flex-col gap-5 items-center text-sm font-medium md:text-lg md:p-4 md:py-5 rounded-xl  `}
							onClick={() => {
								handleServiceBtn(service.title);
								setActive(service.id);
							}}
						>
							<div
								className={`p-5   ${
									active == service.id ? 'bg-white' : ''
								}  has-tooltip transition-all ease-in rounded-2xl`}
							>
								<span className='tooltip md:hidden text-xs text-primary text-nowrap rounded-md block bg-primary/20 px-4 py-1'>
									{service.title}
								</span>
								<motion.img
									animate={{ scaleX: rotate ? [1, 2, 1] : 1 }}
									src={service.logo}
									alt='service_icon'
									width={40}
								/>
							</div>
							<p className='hidden transition-all ease-in md:inline-block'>
								{service.title}
							</p>
							<p
								className={`${
									active == service.id
										? 'hidden'
										: 'hidden md:flex'
								}  capitalize items-center gap-2 text-primary text-sm`}
							>
								learn more{' '}
								<span>
									<FaArrowRight size={10} />
								</span>
							</p>
						</motion.button>
					))}
				</div>
				<div className='px-5 md:px-20 pb-8 md:py-16  text-lightblack max-w-[1200px]'>
					{/* ui/ux design start */}
					<motion.div
						className={`${userInterface ? 'block  ' : 'hidden'}`}
						id='ui/ux'
						animate={{ translateY: userInterface ? 0 : 100 }}
					>
						<h1 className='font-semibold md:text-2xl pt-12 text-black'>
							UI/UX Design – Crafting Engaging & User-Centric
							Experiences
						</h1>
						<div className='grid gap-10 pt-5 '>
							<div>
								<img
									src={
										'https://res.cloudinary.com/dm2pa4nll/webmekanic/design_jvu6zs.svg'
									}
									alt='ui/ux_service_banner'
									srcset=''
									className='w-full'
								/>
							</div>
							<div>
								<h2 className='font-medium md:text-2xl text-black pb-4 '>
									User First Design
								</h2>
								<p className='font-normal '>
									Great design goes beyond aesthetics. it’s
									about usability, accessibility, and creating
									experiences that users love. Our UI/UX
									design services ensure that your digital
									product is not only visually stunning but
									also intuitive and user-friendly.
								</p>
							</div>
							<div>
								<h2 className='capitalize font-medium md:text-2xl py-5 text-black'>
									service Includes
								</h2>
								{uiUxDesign[0].map((item, index) => (
									<div className='flex items-center gap-5 text-lightblack'>
										<input
											type='checkbox'
											checked
											className='accent-green-600 size-4'
										/>{' '}
										<span>{item.title}</span>
									</div>
								))}
							</div>
							<div className='flex flex-col gap-10 pb-32'>
								<div className='flex items-center justify-start gap-2 md:gap-10'>
									<img
										src={design2}
										alt=''
										className='w-[50%]'
									/>
									<img
										src={design3}
										alt=''
										className='w-[50%]'
									/>
								</div>
								<p className='text-sm sm:text-xl text-lightblack leading-[1.4] '>
									We design engaging, seamless, and
									conversion-focused interfaces tailored to
									your users’ needs. Whether you’re launching
									a new product or improving an existing one,
									our UI/UX expertise ensures a frictionless
									and delightful experience across web and
									mobile platforms
								</p>
								<div>
									<h2 className='font-medium text-2xl py-4'>
										Benefits
									</h2>
									{uiUxDesign[1].map((item) => (
										<div className='flex items-center gap-4 sm:text-xl'>
											<GrCheckmark className='font-bold size-5' />
											<p className=' list-inside'>
												{item}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
					{/* ui/ux design end  */}
					{/* web development start  */}
					<motion.div
						className={`${customWebsite ? 'block' : 'hidden'}`}
						animate={{ translateX: customWebsite ? 0 : -100 }}
						id='website'
					>
						<h1 className='font-semibold md:text-2xl text-black pt-10'>
							Web Development – Building High-Performance,
							Scalable Websites
						</h1>
						<div className='grid gap-10 pt-5 pb-32 '>
							<div>
								<img
									src={website}
									alt='ui/ux_service_banner'
									srcset=''
									className='w-full'
								/>
							</div>
							<div>
								<h2 className='font-medium md:text-2xl pb-5 '>
									Blending Aesthetics with Performance
								</h2>
								<p className=''>
									Your website is your digital storefront. it
									should be fast, secure, and visually
									appealing. We develop high-performance
									websites that elevate your brand, attract
									customers, and drive business growth.
								</p>
							</div>
							<div>
								<h2 className='capitalize font-medium md:text-2xl py-5'>
									service Includes
								</h2>
								{webDevelopment[0].map((item, index) => (
									<div className=' flex items-center gap-4'>
										<input
											type='checkbox'
											checked
											className='accent-green-600 size-4'
										/>{' '}
										<span>{item.title}</span>
									</div>
								))}
							</div>
							<div className='flex flex-col gap-10'>
								<div className='flex items-center justify-start gap-2 md:gap-10'>
									<img
										src={website2}
										alt=''
										className='w-[50%]'
									/>
									<img
										src={website3}
										alt=''
										className='w-[50%]'
									/>
								</div>
								<p className=' '>
									We build websites that don’t just look good
									but also perform exceptionally. Whether you
									need a simple landing page or a complex web
									application, our development approach
									ensures speed, scalability, and a smooth
									user experience.
								</p>
								<div>
									<h2 className='font-medium md:text-2xl py-4'>
										Benefits
									</h2>
									{webDevelopment[1].map((item) => (
										<div className='flex items-center gap-4 '>
											<GrCheckmark />
											<p className=' list-inside'>
												{item}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
					{/* web development start  */}
					{/* mobile app start  */}
					<motion.div
						className={`${mobileApplication ? 'block ' : 'hidden'}`}
						id='mobileApp'
						animate={{ translateX: mobileApplication ? 0 : 100 }}
					>
						<h2 className='font-semibold md:text-2xl  pt-10'>
							App Development – Building Powerful & Intuitive
							Mobile Experiences
						</h2>
						<div className='grid gap-10 pt-5 '>
							<div>
								<img
									src={app}
									alt='ui/ux_service_banner'
									srcset=''
									className='w-full'
								/>
							</div>
							<div>
								<h2 className='font-medium md:text-2xl pb-5 '>
									End-to-End Mobile App Development
								</h2>
								<p className=''>
									In today’s digital world, mobile apps are
									essential for businesses to connect with
									customers on the go. We develop
									high-performance, user-friendly mobile
									applications that deliver seamless
									experiences, ensuring engagement and growth
									across iOS and Android platforms.
								</p>
							</div>
							<div>
								<h2 className='capitalize font-medium md:text-2xl py-5'>
									service Includes
								</h2>
								{mobileApp[0].map((item, index) => (
									<div className='flex items-center gap-4'>
										<input
											type='checkbox'
											checked
											className='accent-green-600 size-4'
										/>{' '}
										<span>{item.title}</span>
									</div>
								))}
							</div>
							<div className='flex flex-col gap-10 pb-32'>
								<div className='flex items-center justify-start gap-2 md:gap-10'>
									<img
										src={app2}
										alt=''
										className='w-[50%]'
									/>
									<img
										src={app3}
										alt=''
										className='w-[50%]'
									/>
								</div>
								<p className=''>
									From concept to launch, we craft mobile apps
									that are fast, scalable, and designed for
									success. Whether you need a native app or a
									cross-platform solution, we ensure your app
									delivers a seamless user experience.
								</p>
								<div>
									<h2 className='font-medium md:text-2xl py-4'>
										Benefits
									</h2>
									{mobileApp[1].map((item) => (
										<div className='flex items-center gap-4'>
											<GrCheckmark />
											<p className=' list-inside'>
												{item}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
					{/* mobile app development end  */}
					{/* maintenance service start  */}
					<motion.div
						className={`${
							smaintenance ? 'block ' : 'hidden opacity-10'
						} transition-opacity opacity-100 delay-100 ease-in`}
						id='maintenance'
						animate={{ translateY: smaintenance ? 0 : 100 }}
					>
						<h1 className='font-semibold md:text-2xl  pt-10 '>
							Maintenance & Support – Ensuring Peak Performance &
							Security
						</h1>
						<div className='grid gap-10 pt-5 pb-32 '>
							<div>
								<img
									src={maintenance1}
									alt='maintenance_suppoprt_service_banner'
									srcset=''
									className='w-full'
								/>
							</div>
							<div>
								<h2 className='font-medium text-xl md:text-2xl pb-5 '>
									Reliable Website and App Maintenance for
									Optimal Performance
								</h2>
								<p>
									A great website or app needs continuous
									support to stay secure, up-to-date, and
									optimized for performance. Our maintenance
									services ensure your digital product runs
									smoothly at all times.
								</p>
							</div>
							<div>
								<h2 className='capitalize font-medium text-xl md:text-2xl py-5'>
									service Includes
								</h2>
								{maintenance[0].map((item, index) => (
									<div className=' flex items-center gap-4'>
										<input
											type='checkbox'
											checked
											className='accent-green-600 size-4'
										/>{' '}
										<span>{item.title}</span>
									</div>
								))}
							</div>
							<div className='flex flex-col gap-10'>
								<div className='flex items-center justify-start gap-2 md:gap-10'>
									<img
										src={maintenance2}
										alt=''
										className='w-[50%]'
									/>
									<img
										src={maintenance3}
										alt=''
										className='w-[50%]'
									/>
								</div>
								<p className=''>
									We provide ongoing maintenance and support
									to keep your website and mobile app secure,
									updated, and performing at their best. Our
									proactive approach prevents issues before
									they impact your business.
								</p>
								<div>
									<h2 className='font-medium text-xl  md:text-2xl py-4'>
										Benefits
									</h2>
									{maintenance[1].map((item) => (
										<div className='flex items-center gap-4 sm:text-lg'>
											<GrCheckmark />
											<p className=' list-inside'>
												{item}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default ServicePage;
