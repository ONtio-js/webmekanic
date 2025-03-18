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
  const [customWebsite, setCustomWebsite] = useState(true);
  const [userInterface, setUserInterface] = useState(false);
  const [mobileApplication, setMobileApplication] = useState(false);
  const [smaintenance,setSmaintenance] = useState(false);
  const [rotate,setRotate] = useState(false);
  const [active,setActive] = useState(2);
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
	return (
		<>
			<div className='w-full px-5 md:px-20 text-center  my-5 flex flex-col items-center gap-5 py-20'>
				<h3 className='font-bold text-xl md:text-3xl capitalize '>
					our services
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
									active == service.id ? 'hidden' : 'hidden md:flex'
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
				<div className='px-5 md:px-20 pb-8 md:py-16 text-xl text-lightblack max-w-[1200px]'>
					{/* ui/ux design start */}
					<motion.div
						className={`${userInterface ? 'block font-thin text-base md:text-xl' : 'hidden'}`}
						id='ui/ux'
						animate={{ translateY: userInterface ? 0 : 100 }}
					>
						<div className='grid gap-10 pt-12 '>
							<div>
								<img
									src={design}
									alt='ui/ux_service_banner'
									srcset=''
									className='w-full'
								/>
							</div>
							<div>
								<h2 className='font-medium text-2xl text-black pb-8 '>
									About UI/UX Design Service
								</h2>
								<p className='sm:text-xl leading-[1.8] '>
									Great design goes beyond aesthetics. it’s
									about usability, accessibility, and creating
									experiences that users love. Our UI/UX
									design services ensure that your digital
									product is not only visually stunning but
									also intuitive and user-friendly.
								</p>
							</div>
							<div>
								<h2 className='capitalize font-medium text-2xl py-5 text-black'>
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
						className={`${customWebsite ? 'block font-thin text-base sm:text-xl' : 'hidden'}`}
						animate={{ translateX: customWebsite ? 0 : -100 }}
						id='website'
					>
						<div className='grid gap-10 pt-12 pb-32 '>
							<div>
								<img
									src={website}
									alt='ui/ux_service_banner'
									srcset=''
									className='w-full'
								/>
							</div>
							<div>
								<h2 className='font-medium text-2xl pb-5 '>
									About Web Development Service
								</h2>
								<p className='text-xl leading-[1.8]'>
									Your website is your digital storefront. it
									should be fast, secure, and visually
									appealing. We develop high-performance
									websites that elevate your brand, attract
									customers, and drive business growth.
								</p>
							</div>
							<div>
								<h2 className='capitalize font-medium text-2xl py-5'>
									service Includes
								</h2>
								{webDevelopment[0].map((item, index) => (
									<div className='sm:text-xl leading-[1.4] flex items-center gap-4'>
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
								<p className='sm:text-xl leading-[1.8] '>
									We build websites that don’t just look good
									but also perform exceptionally. Whether you
									need a simple landing page or a complex web
									application, our development approach
									ensures speed, scalability, and a smooth
									user experience.
								</p>
								<div>
									<h2 className='font-medium text-2xl py-4'>
										Benefits
									</h2>
									{webDevelopment[1].map((item) => (
										<div className='flex items-center gap-4 sm:text-xl leading-[1.8]'>
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
						className={`${mobileApplication ? 'block font-thin text-base sm:text-xl' : 'hidden'}`}
						id='mobileApp'
						animate={{ translateX: mobileApplication ? 0 : 100 }}
					>
						<div className='grid gap-10 pt-12 '>
							<div>
								<img
									src={app}
									alt='ui/ux_service_banner'
									srcset=''
									className='w-full'
								/>
							</div>
							<div>
								<h2 className='font-medium text-2xl pb-5 '>
									About App Development Service
								</h2>
								<p className='sm:text-xl leading-[1.8]'>
									Mobile apps have become essential for
									businesses to connect with customers on the
									go. We create powerful, intuitive, and
									high-performing mobile applications that
									offer seamless experiences.
								</p>
							</div>
							<div>
								<h2 className='capitalize font-medium text-2xl py-5'>
									service Includes
								</h2>
								{mobileApp[0].map((item, index) => (
									<div className='sm:text-xl leading-[1.8] flex items-center gap-4'>
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
								<p className='sm:text-xl leading-[1.8] '>
									From concept to launch, we craft mobile apps
									that are fast, scalable, and designed for
									success. Whether you need a native app or a
									cross-platform solution, we ensure your app
									delivers a seamless user experience.
								</p>
								<div>
									<h2 className='font-medium text-2xl py-4'>
										Benefits
									</h2>
									{mobileApp[1].map((item) => (
										<div className='flex items-center gap-4 sm:text-xl'>
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
							smaintenance ? 'block font-thin text-base sm:text-xl leading-[1.8]' : 'hidden opacity-10'
						} transition-opacity opacity-100 delay-100 ease-in`}
						id='maintenance'
						animate={{ translateY: smaintenance ? 0 : 100 }}
					>
						<div className='grid gap-10 pt-12 pb-32 '>
							<div>
								<img
									src={maintenance1}
									alt='maintenance_suppoprt_service_banner'
									srcset=''
									className='w-full'
								/>
							</div>
							<div>
								<h2 className='font-medium text-2xl pb-5 '>
									About Maintenance & Support Service
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
								<h2 className='capitalize font-medium text-2xl py-5'>
									service Includes
								</h2>
								{maintenance[0].map((item, index) => (
									<div className='sm:text-xl flex items-center gap-4'>
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
								<p className='sm:text-xl '>
									We provide ongoing maintenance and support
									to keep your website and mobile app secure,
									updated, and performing at their best. Our
									proactive approach prevents issues before
									they impact your business.
								</p>
								<div>
									<h2 className='font-medium text-2xl py-4'>
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
