import React, { useState } from 'react';
import { bgImage } from '../assets/logo';
import { VscThreeBars } from 'react-icons/vsc';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { RiTwitterXFill } from 'react-icons/ri';
import { motion, useScroll } from 'framer-motion';
import LanguageSelector from './GoogleTranslate';

const Header = () => {
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();
	const [rotate, setRotate] = useState(false);
	const { scrollYProgress } = useScroll();


	return (
		<>
			<div className='fixed top-0 z-10 left-0 md:relative bg-white w-full flex px-5 md:px-20 items-center justify-between py-5'>
				{/* logo */}
				<Link to={'/'}>
					<motion.img
						src={
							'https://res.cloudinary.com/dm2pa4nll/webmekanic/webmekanic_spoflu.svg'
						}
						alt='webmekanic'
						className='w-32 md:w-48'
					/>
				</Link>
				<div
					className='lg:hidden'
					onClick={() => {
						setOpen((prev) => !prev);
					}}
				>
					{/* <HiOutlineBars3CenterLeft
					size={30}
					color='1300FF'
				/> */}
					<VscThreeBars
						size={30}
						color='1300FF'
					/>
				</div>

				<nav className='hidden lg:block'>
					<ul className='flex items-center justify-around gap-x-3  font-[400]'>
						<li className='group px-3 py-1 rounded-md overflow-hidden capitalize'>
							<Link to={'/'}>Home</Link>
							<p
								className={`w-[70%] rounded-full h-1 bg-primary -translate-x-[200%] group-hover:translate-x-0 transition ${
									pathname == '/'
										? 'translate-x-0'
										: '-translate-x-[200%]'
								} delay-200 ease-in `}
							></p>
						</li>
						<li className='group px-3 py-1 rounded-md overflow-hidden capitalize'>
							<Link to={'/about'}>About Us</Link>
							<p
								className={`w-[70%] rounded-full h-1 bg-primary -translate-x-[200%] group-hover:translate-x-0 transition ${
									pathname == '/about'
										? 'translate-x-0'
										: '-translate-x-[200%]'
								} delay-200 ease-in `}
							></p>
						</li>
						<li className='group px-3 py-1 rounded-md overflow-hidden capitalize'>
							<Link to={'/portfolio'}>portfolio</Link>
							<p
								className={`w-[70%] rounded-full h-1 bg-primary -translate-x-[200%] group-hover:translate-x-0 transition ${
									pathname == '/portfolio'
										? 'translate-x-0'
										: '-translate-x-[200%]'
								} delay-200 ease-in `}
							></p>
						</li>
						<li className='group px-3 py-1 rounded-md overflow-hidden capitalize'>
							<Link to={'/services'}>Services</Link>
							<p
								className={`w-[70%] rounded-full h-1 bg-primary -translate-x-[200%] group-hover:translate-x-0 transition ${
									pathname == '/services'
										? 'translate-x-0'
										: '-translate-x-[200%]'
								} delay-200 ease-in `}
							></p>
						</li>
						<li className='group px-3 py-1 rounded-md overflow-hidden capitalize'>
							<Link to={'/blogs'}>Blogs</Link>
							<p
								className={`w-[70%] rounded-full h-1 bg-primary -translate-x-[200%] group-hover:translate-x-0 transition ${
									pathname == '/blogs'
										? 'translate-x-0'
										: '-translate-x-[200%]'
								} delay-200 ease-in `}
							></p>
						</li>
						<li className='bg-primary text-white px-4 py-3 rounded-md '>
							<Link
								to='https://calendly.com/webmekanic-info/30min'
								target='_blank'
							>
								Book a Free Consultation
							</Link>
						</li>
						<LanguageSelector />
					</ul>
				</nav>
				<Navbar
					open={open}
					setOpen={() => setOpen((prev) => !prev)}
				/>
			</div>
			<motion.div
				style={{ scaleX: scrollYProgress }}
				className='bg-primary h-1 w-full fixed left-0 right-0 origin-0 top-16 sm:top-0 z-10'
			/>
		</>
	);
};
const Navbar = ({ open, setOpen }) => {
	return (
		<motion.div
			className={`h-screen w-screen bg-white/20 absolute top-0 left-0 z-5 sm:overflow-y-auto overflow-x-hidden`}
			animate={{ translateX: open ? 0 : '200%' }}
			transition={{ duration: 0.5, easings: 'linear' }}
			onClick={setOpen}
		>
			<motion.nav
				className={`flex flex-col gap-y-8 absolute right-0 bg-white px-5 py-10  min-h-[600px] h-svh w-[70%]`}
				onClick={(e) => e.stopPropagation()}
				animate={{ translateX: open ? 0 : 100 }}
				transition={{ duration: 0.5 }}
			>
				<Link
					to={'/'}
					onClick={setOpen}
				>
					<img
						src={
							'https://res.cloudinary.com/dm2pa4nll/webmekanic/webmekanic_spoflu.svg'
						}
						alt='webmekanic'
						className='w-32 -mt-4'
					/>
				</Link>
				<ul className=' text-black items-center justify-around gap-x-3 capitalize font-[400]'>
					<li
						className='group  py-1 rounded-md overflow-hidden'
						onClick={setOpen}
					>
						<Link to={'/'}>Home</Link>
						<p className='w-[70%] rounded-full h-1 bg-primary -translate-x-[200%] group-hover:translate-x-0 transition delay-200 ease-in '></p>
					</li>
					<li
						className='group  py-1 rounded-md overflow-hidden'
						onClick={setOpen}
					>
						<Link to={'/about'}>About Us</Link>
						<p className='w-[70%] rounded-full h-1 bg-primary -translate-x-[200%] group-hover:translate-x-0 transition delay-200 ease-in '></p>
					</li>
					<li
						className='group  py-1 rounded-md overflow-hidden'
						onClick={setOpen}
					>
						<Link to={'/portfolio'}>portfolio</Link>
						<p className='w-[70%] rounded-full h-1 bg-primary -translate-x-[200%] group-hover:translate-x-0 transition delay-200 ease-in '></p>
					</li>
					<li
						className='group  py-1 rounded-md overflow-hidden'
						onClick={setOpen}
					>
						<Link to={'/services'}>Services</Link>
						<p className='w-[70%] rounded-full h-1 bg-primary -translate-x-[200%] group-hover:translate-x-0 transition delay-200 ease-in '></p>
					</li>
					<li
						className='group  py-1 rounded-md overflow-hidden'
						onClick={setOpen}
					>
						<Link to={'/blogs'}>Blogs</Link>
						<p className='w-[70%] rounded-full h-1 bg-primary -translate-x-[200%] group-hover:translate-x-0 transition delay-200 ease-in '></p>
					</li>
					<li
						className='border w-full my-4 text-white bg-primary hover:text-primary hover:bg-white  px-3 py-3 text-center rounded-md'
						onClick={setOpen}
					>
						<Link
							to='https://calendly.com/webmekanic-info/30min'
							target='_blank'
						>
							Book a free Consultation
						</Link>
					</li>
					<LanguageSelector />
				</ul>
				<img
					src={bgImage}
					alt=''
					srcset=''
					className=' opacity-10 rotate-[230deg] absolute -bottom-20 -right-20 h-[350px] '
				/>
				<ul className=' absolute bottom-5 '>
					<li className='flex items-center gap-x-2'>
						<FaFacebook
							size={20}
							color='gray'
						/>
						<a
							target='_blank'
							href='https://web.facebook.com/profile.php?id=100088850304959'
						>
							Facebook
						</a>
					</li>
					<li className='flex items-center gap-x-2'>
						<PiInstagramLogoFill
							size={20}
							color='gray'
						/>
						<a
							target='_blank'
							href='https://www.instagram.com/webmekanic?igsh=MWVjNWp1dGpnbmU2ag%3D%3D&utm_source=qr'
						>
							instagram
						</a>
					</li>
					<li className='flex items-center gap-x-2'>
						<FaLinkedinIn
							size={20}
							color='gray'
						/>
						<a href='/'>Linkeldn</a>
					</li>
					<li className='flex items-start gap-x-2'>
						<RiTwitterXFill
							size={20}
							color='gray'
						/>
						<a
							className='text-sm'
							href='https://x.com/webmekanik'
							target='_blank'
						>
							X (formerly twitter)
						</a>
					</li>
				</ul>
			</motion.nav>
		</motion.div>
	);
};
export default Header;
