import React from 'react';
import Company from '../components/Company';
import Approach from '../components/Approach';
import Teams from '../components/Teams';
import CtaButton from '../components/CtaButton';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { motion } from 'framer-motion';
import { about, about1 } from '../assets/images';
import { Link } from 'react-router-dom';
import { values } from '../Constant';
const AboutPage = () => {
	document.title =
		'About Us | Empowering Digital Success with Innovative Web Solutions';
	return (
		<>
			<div className=' text-lightblack px-5 md:px-20 sm:px-0 w-full lg:flex items-end justify-between'>
				<div className='pt-20'>
					<h3 className='text-xl text-left  capitalize font-bold py-3 text-primary'>
						who we are
					</h3>
					<h2 className='text-2xl pb-5 sm:pb-0 md:text-5xl font-medium max-w-[490px]'>
						A dedicated team for your dedicated vision.
					</h2>
				</div>
				<p className=' max-w-[600px] '>
					We pride ourselves on being more than just a tech company.
					We are your dedicated partner in digital transformation,
					specializing in the creation of custom web and mobile
					applications designed to meet the unique needs of your
					business.
				</p>
			</div>
			<div className='flex flex-col items-center py-10 md:pb-20 md:my-10 mx-5 sm:mx-20 '>
				<img
					src={about}
					alt=''
					className='mb-20 '
				/>
				<h3 className='font-bold text-2xl md:text-4xl text-lightblack capitalize py-4'>
					helping business grow
				</h3>
				<div className='px-5 md:px-20'>
					<Company />
				</div>
			</div>
			{/* our mission start */}
			<div className='mx-5 md:mx-20 p-5 md:p-10 rounded-2xl grid  sm:grid-cols-2 bg-lightsecondary items-start justify-between md:gap-x-10 lg:gap-x-20'>
				<motion.div
					whileInView={{ y: [100, 50, 0] }}
					initial={{ y: 0 }}
					transition={{ duration: 1, easings: 'linear' }}
					className='flex flex-col gap-y-3 flex-1 '
				>
					<h5 className='font-medium capitalize text-primary'>
						our mission
					</h5>
					<h3 className='font-bold text-3xl capitalize'>
						webMekanic's mission
					</h3>
					<p className='text-lightblack'>
						To elevate your digital presence with solutions that are
						not only innovative but also tailored specifically to
						your goals. In a world where digital interfaces are
						pivotal to business success, we ensure that your online
						presence is not just functional but exceptional.
					</p>
					<Link to={'https://calendly.com/webmekanic-info/30min'}>
						<CtaButton
							title={'Book a Free Consultation'}
							style={
								'w-[250px] py-2 hidden sm:block rounded-md my-2  hover:bg-white'
							}
						/>
					</Link>
				</motion.div>
				<div className='flex-1 pt-10 md:pt-0'>
					<img
						src={about1}
						alt=''
					/>
				</div>
			</div>
			{/* our mission end */}
			{/* core values start */}
			<div className='flex flex-col gap-10 px-5 md:px-20 py-20'>
				<div>
					<h2 className='font-semibold text-3xl py-10'>
						Our core values
					</h2>
					<p className='max-w-[400px]'>
						Have a question or want to start a project? Fill out the
						form below and we'll get back to you shortly
					</p>
				</div>
				<div className='grid sm:grid-cols-2 md:grid-cols-4 gap-10'>
					{values.map((value) => (
						<div
							className='max-w-[400px] bg-gray/20 transition-all duration-500 ease-in-out hover:translate-x-1 hover:bg-lightsecondary p-10 rounded-2xl'
							key={value.id}
						>
							<h4 className='font-medium text-xl py-2 pb-5'>
								{value.title}
							</h4>
							<p>{value.description}</p>
						</div>
					))}
				</div>
			</div>
			{/* our core value end */}
			<Approach />
			<div className='mb-32'>
				<Teams />
			</div>
		</>
	);
};

export default AboutPage;
