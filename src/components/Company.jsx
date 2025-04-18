import React from 'react'
import { motion } from 'framer-motion';

const Company = () => {
  return (
		<motion.ul className='flex items-center gap-x-5 sm:gap-8 lg:gap-x-20 '>
			<li>
				<img
					src={
						'https://res.cloudinary.com/dm2pa4nll/webmekanic/google_bpxwfr.png'
					}
					alt='google_logo'
					width={1000}
				/>
			</li>
			<li>
				<img
					src={
						'https://res.cloudinary.com/dm2pa4nll/webmekanic/calendly_fx8hmd.png'
					}
					alt=''
					width={1000}
				/>
			</li>
			<li>
				<img
					src={
						'https://res.cloudinary.com/dm2pa4nll/webmekanic/netflix_j9oigy.png'
					}
					alt=''
					width={1000}
				/>
			</li>
			<li>
				<img
					src={
						'https://res.cloudinary.com/dm2pa4nll/webmekanic/grevego_l4gem2.svg'
					}
					alt=''
					width={1000}
				/>
			</li>
			<li>
				<img
					src={
						'https://res.cloudinary.com/dm2pa4nll/webmekanic/microsoft_mcqk2y.png'
					}
					alt=''
					width={1000}
				/>
			</li>
			{/* <li>
				<img
					src={discord}
					alt=''
					width={1000}
				/>
			</li> */}
			<li>
				<img
					src={
						'https://res.cloudinary.com/dm2pa4nll/webmekanic/slack_erb7ov.svg'
					}
					alt=''
					width={1000}
				/>
			</li>
		</motion.ul>
  );
}

export default Company