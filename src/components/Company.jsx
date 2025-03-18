import React from 'react'
import { motion } from 'framer-motion';
import {
	calendly,
	google,
	netflix,
	discord,
	microsoft,
	slack,
} from '../assets/logo';
const Company = () => {
  return (
		<motion.ul className='flex items-center gap-x-5 sm:gap-8 lg:gap-x-20 '>
			<li>
				<img
					src={google}
					alt='google_logo'
					width={1000}
				/>
			</li>
			<li>
				<img
					src={calendly}
					alt=''
					width={1000}
				/>
			</li>
			<li>
				<img
					src={netflix}
					alt=''
					width={1000}
				/>
			</li>
			<li>
				<img
					src={microsoft}
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
					src={slack}
					alt=''
					width={1000}
				/>
			</li>
		</motion.ul>
  );
}

export default Company