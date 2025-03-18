import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
const Layout = () => {
  return (
		<div className='mx-auto overflow-hidden max-w-[1440px] flex flex-col items-center'>
			<Header />
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
			>
				<Outlet />
			</motion.div>

				<Footer />
		</div>
  );
}

export default Layout