import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { testimonies } from '../Constant';
import { EffectFade, EffectCube } from 'swiper/modules';
// import 'swiper/css/e';

const Testmonials = () => {
	return (
		<Swiper
			className='w-full'
			spaceBetween={50}
			slidesPerView={1}
			// navigation
			pagination={{ clickable: true }}
		>
			{testimonies.map((testimony, index) => (
				<SwiperSlide
					className='w-full flex flex-col items-center gap-y-5'
					key={testimony.id}
					modules={[EffectCube]}
					effect='cube'
				>
					<div className='grid sm:grid-cols-2 max-w-[800px] pt-10 items-center content-center  '>
						<div className='w-[20em] ml-3 sm:ml-0 bg-gradient-to-t from-lightprimary to-white rounded-full overflow-hidden '>
							<img
								className='mx-auto sm:mx-0'
								src={
									'https://res.cloudinary.com/dm2pa4nll/webmekanic/testmony1_lj0ywp.svg'
								}
								alt='testmony_image'
								srcset=''
							/>
						</div>
						<div className='text-lightblack flex flex-col gap-y-2'>
							<h4 className='font-medium'>
								{testimony.organisation}
							</h4>
							<p>{testimony.decription}</p>
							<p className=' font-serif text'>
								<span className='font-bold text-2xl'>-</span>{' '}
								{testimony.name},{' '}
								<span className='text-xs'>
									{testimony.position}
								</span>
							</p>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Testmonials;
