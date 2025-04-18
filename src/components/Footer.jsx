import React from 'react';
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CtaButton from './CtaButton';
import { whatsapp, x } from '../assets/icon';
import { webMekanic } from '../assets/logo';

const Footer = () => {
	return (
		<footer className=' md:px-20'>
			<div className='mx-5 md:mx-auto  rounded-2xl max-w-[1100px] px-8  py-10 mb-32 grid sm:grid-cols-2 gap-5 items-start md:items-center bg-lightsecondary'>
				<div className='flex-1 flex flex-col gap-2'>
					<h4 className='font-bold text-4xl'>
						Ready to Start Your Project?
					</h4>
					<p className='text-lightblack  max-w-[520px] py-3'>
						Get in touch with us today to discuss your project
						requirement and discover how we can help your business.
					</p>
					<Link
						to={'https://calendly.com/webmekanic-info/30min'}
						target='_blank'
					>
						<CtaButton
							title={'Book a Free Consultatioon'}
							style={'px-8 py-4 mt-3 rounded-md '}
						/>
					</Link>
				</div>
				<div className='mt-10 sm:mt-0'>
					<img
						src={
							'https://res.cloudinary.com/dm2pa4nll/webmekanic/teams_csulur.svg'
						}
						alt='cta_image'
						srcset=''
						className='md:w-[500px] lg:w-full '
					/>
				</div>
			</div>
			<div className='text-lightblack mt-20 grid tab:grid-cols-3 items-start tab:gap-x-10 px-5  pb-20 justify-between'>
				<div className=' '>
					<Link to='/'>
						<img
							src={
								'https://res.cloudinary.com/dm2pa4nll/webmekanic/webmekanic_spoflu.svg'
							}
							alt='logo'
							width={160}
						/>
					</Link>
					<p className='py-5  text-balance'>
						At webMekanic, we specialize in crafting custom web and
						mobile applications that drive business success. Our
						team is dedicated to delivering innovative solutions
						tailored to your unique needs, ensuring your digital
						presence is always ahead of the curve.
					</p>
					<div className='flex items-center gap-5 sm:mt-5 mb-5 sm:mb-0'>
						<a
							target='_blank'
							href='https://web.facebook.com/profile.php?id=100088850304959'
						>
							<FaFacebook
								size={24}
								color=''
							/>
						</a>

						<a
							target='_blank'
							href='https://www.instagram.com/webmekanic?igsh=MWVjNWp1dGpnbmU2ag%3D%3D&utm_source=qr'
						>
							<PiInstagramLogoFill size={24} />
						</a>
						<a
							target='_blank'
							href='https://www.instagram.com/webmekanic?igsh=MWVjNWp1dGpnbmU2ag%3D%3D&utm_source=qr'
						>
							<img
								src={whatsapp}
								alt=''
							/>
						</a>
						<a
							className='text-sm'
							href='https://x.com/webmekanik'
							target='_blank'
						>
							<img
								src={x}
								alt=''
							/>
						</a>
					</div>
				</div>
				<div className='grid tab:col-span-2  sm:grid-cols-3 gap-10    items-start tab:justify-around tab:gap-x-16 '>
					<ul className='flex flex-col gap-y-3'>
						<h3 className='text-gray-700 font-bold text-lg  capitalize'>
							contact
						</h3>
						<div>
							<p>1 Muba Abiru Ebute, Lagos Nigeria</p>
						</div>
						<li className='flex items-center gap-x-2 '>
							<MdEmail size={20} />
							<a
								href='mailto:info@webmekanic.com'
								target='_blank'
							>
								info@webmekanic.com
							</a>
						</li>
						<li className='flex items-center gap-x-2'>
							<FaPhoneAlt />
							<a
								href='tel:+2348107548674'
								target='_blank'
							>
								+2348107548674
							</a>
						</li>
					</ul>

					<ul className='flex flex-col gap-y-3 capitalize'>
						<h3 className='text-gray-700 font-bold text-lg capitalize'>
							quick links
						</h3>
						<Link to={'/about'}>about us</Link>
						<Link
							to={'https://calendly.com/webmekanic-info/30min'}
							target='_blank'
						>
							contact us
						</Link>
						<Link to={'/portfolio'}>Recent works</Link>
						<Link to={'/services'}>Our services</Link>
						<Link to={'/blogs'}>Blogs</Link>
						<Link to={'/careers'}>Careers</Link>
					</ul>
					<ul className='flex flex-col gap-y-3'>
						<h3 className='text-gray-700 font-bold capitalize text-lg'>
							Legal
						</h3>
						<Link to={'/privacy'}>Privacy Policy</Link>
						<Link to={'/terms'}>Terms & Conditions</Link>
					</ul>
				</div>
			</div>
			<div className='px-5  w-full landscapeMobile:mt-2  border-gray  text-lightblack'>
				<hr className='bg-lightgray block border-black/20 border-[1px] ' />
				<div className='flex flex-col md:flex-row items-center justify-between '>
					<p className='text-sm sm:text-base py-10'>
						All rights reserved. &copy;{new Date().getFullYear()}{' '}
						webMekanic
					</p>
				</div>
			</div>
			<div className='flex items-center justify-center pt-10 md:pt-20 opacity-5 pb-48'>
				<Link to={'/'}>
					<img
						src={webMekanic}
						alt='webmekanic'
						className='w-full'
					/>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
