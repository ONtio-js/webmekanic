import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet';
const Careers = () => {
	return (
		<>
		<Helmet>
			<title>Careers | WebMekanic</title>
			<meta name="description" content="Join our dynamic team and contribute to our mission of creating exceptional digital experiences. Explore open positions and apply today!" />
			<meta name="keywords" content="Careers, WebMekanic, Open Positions, Job Opportunities, Teamwork, Digital Solutions, Web Development, Mobile App Development" />
			<meta name="author" content="WebMekanic" />
			<meta name="robots" content="index, follow" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="language" content="English" />
		</Helmet>
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className='mt-20 md:mt-10  px-5 md:px-10 lg:px-20 w-full '
		>
			<div
				className='rounded-2xl w-full h-[300px] md:h-[500px] border p-5 md:p-10 text-white flex flex-col justify-end'
				style={{
					background:
						'url("https://res.cloudinary.com/dm2pa4nll/webmekanic/career.png")',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className=''>
					<div className='flex flex-col gap-2'>
						<h3 className='text-xl font-medium'>
							webMekanic Careers
						</h3>
						<h1 className='md:text-5xl text-3xl font-semibold max-w-[700px] pb-5'>
							What matters to you?
						</h1>

						<div className='flex flex-col  gap-5 md:gap-8'>
							<p className='text-sm md:text-xl lg:pr-40'>
								At WebMekanic, we craft high-performing
								websites, apps, and digital experiences that
								elevate businesses and delight users. Join a
								team where creativity meets impact, and your
								ideas come to life.
							</p>
							<Link
								to='/'
								className='bg-primary text-center px-2 py-3 rounded-md max-w-[200px]'
							>
								Explore Open Positions
							</Link>
						</div>
					</div>
				</div>
			</div>

			<section className='my-10 md:my-20 mt-32 flex flex-col gap-20'>
				<h2 className='md:text-3xl text-2xl font-bold text-center capitalize'>
					why work with webMekanic
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
					<div className='bg-primary/70 py-8 text-white p-5 rounded-2xl flex flex-col gap-2 items-center justify-center'>
						<h3 className='text-xl font-semibold capitalize'>
							Impact-Driven work
						</h3>
						<p className='text-gray-500 text-center'>
							Collaborate on real projects that make a difference.
						</p>
					</div>
					<div className='bg-black text-white p-5 rounded-2xl flex flex-col gap-2 items-center justify-center'>
						<h3 className='text-xl font-semibold capitalize'>
							Gobal Mindset
						</h3>
						<p className='text-gray-500 text-center'>
							Work with clients and teams from around the world.
						</p>
					</div>
					<div className='bg-primary/70 py-8 text-white p-5 rounded-2xl flex flex-col gap-2 items-center justify-center'>
						<h3 className='text-xl font-semibold capitalize'>
							{' '}
							Creative Freedom
						</h3>
						<p className='text-gray-500 text-center'>
							Your ideas matter. We embrace innovation at every
							level.
						</p>
					</div>
					<div className='bg-black text-white p-5 rounded-2xl flex flex-col gap-2 items-center justify-center'>
						<h3 className='text-xl font-semibold capitalize'>
							Supportive Culture
						</h3>
						<p className='text-gray-500 text-center'>
							We believe in transparency, respect, and team
							spirit.
						</p>
					</div>
				</div>
			</section>
		</motion.div>
		</>
  );
}

export default Careers