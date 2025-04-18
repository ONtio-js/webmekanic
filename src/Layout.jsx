import React, { useEffect } from 'react';
import Header from './components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const Layout = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className='mx-auto overflow-hidden max-w-[1440px] flex flex-col items-center'>
			<Header />
			<div
			
			>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
