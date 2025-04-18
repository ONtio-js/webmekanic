import React from 'react'
import { Link } from 'react-router-dom'

const Careers = () => {
  return (
		<div className=' mt-10 flex flex-col items-center px-5 md:px-10 lg:px-20 w-full '>
			<div
				className='rounded-2xl w-full h-[calc(100vh-300px)] border p-10 text-white flex flex-col justify-end'
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
						<h3 className='text-xl font-medium'>webMekanic Careers</h3>
						<h1 className='text-5xl font-semibold max-w-[700px] pb-5'>
							What matters to you?
						</h1>

						<div className='flex flex-col  gap-8'>
							<p className='text-xl lg:pr-40'>
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
		</div>
  );
}

export default Careers