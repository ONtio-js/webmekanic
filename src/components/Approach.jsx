import React from 'react'
import { approach } from '../Constant';
import { motion } from 'framer-motion';
const Approach = () => {
  return (
		<div className='px-5 md:px-20 pt-10 pb-32 flex flex-col items-center '>
			<motion.div
				whileInView={{ translateX: 0 }}
				initial={{ translateX: -100 }}
				transition={{ duration: 1 }}
				className=' pb-20 flex flex-col items-center gap-y-8'
			>
				<h3 className='capitalize font-bold text-3xl md:max-w-[600px] text-center'>
					Our Approach – Driving Digital Excellence from Concept to
					Execution
				</h3>
				<p className='text-center md:max-w-[700px] text-lightblack'>
					We empower businesses with a strategic, user-centric
					approach to UI/UX design, web, and mobile development. From
					ideation to deployment, our expert team ensures seamless
					execution, innovation, and scalability, helping you achieve
					long-term digital success.
				</p>
			</motion.div>
			<div className='grid sm:grid-cols-2 tab:grid-cols-4  items-center gap-10 justify-center max-w-[1000px]'>
				{approach.map((approach, index) => (
					<motion.div
						key={index}
						whileInView={{ y: [100, 50, 0] }}
						initial={{ y: 0 }}
						transition={{ duration: 1, ease: 'linear' }}
						className={`${
							approach.id % 2 == 0 ? 'bg-black' : 'bg-primary'
						} text-white px-10 py-5 rounded-lg `}
					>
						<h3 className='font-semibold capitalize py-1 text-center'>
							{approach.title}
						</h3>
						<p className='text-center'>{approach.description}</p>
					</motion.div>
				))}
			</div>
		</div>
  );
}

export default Approach