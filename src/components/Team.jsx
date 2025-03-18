import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { teams } from '../Constant';
const Team = () => {
	return (
		<Swiper
			className='w-full'
			spaceBetween={50}
			slidesPerView={1.5}
			pagination={{ clickable: true }}
		>
			{teams.map((team, index) => (
				<SwiperSlide
					className=' flex sm:hidden flex-col items-center gap-y-5'
					key={team.id}
				>
					<img
						src={team.imagesrc}
						alt='employee'
						srcset=''
						width={200}
						className='rounded-full'
					/>
					<div>
						<h4 className='font-semibold'>{team.name}</h4>
						<p className='text-center text-lightblack mt-2'>
							{team.position}
						</p>
						<div className='flex items-center mt-2 justify-center gap-4'>
							{team.fb &&
							(
								<a
									href={team.fb || '/'}
									target='_blank'
								>
									<FaFacebook color='gray' />
								</a>
							)}
							<a
								href={team.ln || '/'}
								target='_blank'
							>
								<FaLinkedinIn color='gray' />
							</a>
							<a
								href={team.tw || '/'}
								target='_blank'
							>
								<RiTwitterXFill color='gray' />
							</a>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Team;
