import React from 'react';
import Team from './Team';
import { teams } from '../Constant';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Teams = () => {
	return (
		<div className='px-5 md:px-20 py-10 grid gap-y-20'>
			<div className='flex flex-col items-center gap-5'>
				<h3 className='font-bold text-3xl capitalize py-'>our Leadership</h3>
				<p className='text-center text-balance text-lightblack'>
					Our team is a dynamic group of skilled professionals
					dedicated to delivering exceptional web and mobile
					solutions. With a diverse range of expertise and a passion
					for innovation, we work collaboratively to ensure your
					project's success
				</p>
			</div>
			<div className=' grid  sm:grid-cols-3 items-center justify-center gap-y-5  sm:gap-x-20'>
				{teams.map((team, index) => (
					<div
						className='hidden  sm:flex flex-col items-center gap-y-5'
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
								{team.fb && (
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
					</div>
				))}
			</div>
			<Team />
		</div>
	);
};

export default Teams;
