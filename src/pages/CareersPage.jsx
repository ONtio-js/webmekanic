import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
	value1,
	value2,
	value3,
	value4,
	successImage,
	career,
} from '../assets/careers';
import { FaFile, FaTimes } from 'react-icons/fa';
import { IoCloudUploadSharp } from 'react-icons/io5';
import { useJobs } from '../context/jobs/JobsContext';
import Loader from '../components/Loader';
import { formatDate } from '../utils/Date';

const Careers = () => {
	const { jobs, loading, error, fetchJobs } = useJobs();
	const values = [
		{
			id: 1,
			image: value4,
			title: 'Empathy',
			description: 'We design and build for people, always.',
		},
		{
			id: 2,
			image: value3,
			title: 'Excellence',
			description: "We don't settle. Quality is our standard",
		},
		{
			id: 3,
			image: value2,
			title: 'Collaboration',
			description: 'We work together to achieve our goals.',
		},
		{
			id: 4,
			image: value1,
			title: 'Ownership	',
			description:
				'We take pride in our work and the impact it has on our clients.',
		},
	];
	const [isOpen, setIsOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const jobsPerPage = 1;
	const totalPages = Math.ceil(jobs.length / jobsPerPage);

	useEffect(() => {
		fetchJobs();
	}, []);

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const currentJob = jobs[currentPage - 1];

	return (
		<>
			<Helmet>
				<title>Careers | WebMekanic</title>
				<meta
					name='description'
					content='Join our dynamic team and contribute to our mission of creating exceptional digital experiences. Explore open positions and apply today!'
				/>
				<meta
					name='keywords'
					content='Careers, WebMekanic, Open Positions, Job Opportunities, Teamwork, Digital Solutions, Web Development, Mobile App Development'
				/>
				<meta
					name='author'
					content='WebMekanic'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta
					name='language'
					content='English'
				/>
			</Helmet>
			<JobApplicationPortal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				currentJob={currentJob}
			/>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='mt-20 md:mt-10 px-4 md:px-10 lg:px-20 w-full'
			>
				<div
					className='rounded-2xl w-full h-[300px] md:h-[500px] border p-5 md:p-10 text-white flex flex-col justify-end relative'
					style={{
						background:
							`url(${career})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='relative '>
						<div className='flex flex-col gap-2'>
							<h3 className='text-xl font-medium '>
								webMekanic Careers
							</h3>
							<h1 className='text-3xl md:text-5xl font-semibold max-w-[700px] pb-5 '>
								What matters to you?
							</h1>

							<div className='flex flex-col gap-5 md:gap-8'>
								<p className='text-sm md:text-xl lg:pr-40 '>
									At WebMekanic, we craft high-performing
									websites, apps, and digital experiences that
									elevate businesses and delight users. Join a
									team where creativity meets impact, and your
									ideas come to life.
								</p>
								<a
									href='#open-roles'
									className='bg-primary text-center max-w-[200px]  px-2 py-3 rounded-md w-full md:max-w-[200px]  '
								>
									Explore Open Positions
								</a>
							</div>
						</div>
					</div>
					{/* <div className='absolute inset-0 bg-black/10 rounded-2xl -z-5'></div> */}
				</div>

				<section className='my-10 md:my-20 mt-32 flex flex-col gap-10 md:gap-20'>
					<h2 className='text-2xl md:text-3xl font-bold text-center capitalize'>
						why work with webMekanic
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
						<div className='bg-primary/70 py-8 text-white p-5 rounded-2xl flex flex-col gap-2 items-center justify-center'>
							<h3 className='text-xl font-semibold capitalize'>
								Impact-Driven work
							</h3>
							<p className='text-gray-500 text-center'>
								Collaborate on real projects that make a
								difference.
							</p>
						</div>
						<div className='bg-black text-white p-5 rounded-2xl flex flex-col gap-2 items-center justify-center'>
							<h3 className='text-xl font-semibold capitalize'>
								Global Mindset
							</h3>
							<p className='text-gray-500 text-center'>
								Work with clients and teams from around the
								world.
							</p>
						</div>
						<div className='bg-primary/70 py-8 text-white p-5 rounded-2xl flex flex-col gap-2 items-center justify-center'>
							<h3 className='text-xl font-semibold capitalize'>
								Creative Freedom
							</h3>
							<p className='text-gray-500 text-center'>
								Your ideas matter. We embrace innovation at
								every level.
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
					<div>
						<h1 className='text-2xl md:text-3xl font-semibold capitalize mb-7'>
							our values
						</h1>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
							{values.map((value) => (
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1 }}
									key={value.id}
									className='space-y-3'
								>
									<img
										src={value.image}
										alt={value.title}
										className='w-full'
									/>
									<h3 className='text-xl font-semibold capitalize pt-5'>
										{value.title}
									</h3>
									<p className='text-gray-500'>
										{value.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
					<div
						className='my-10'
						id='open-roles'
					>
						<h1 className='text-2xl md:text-3xl font-bold mb-10'>
							Discover Open Roles
						</h1>
						{loading && jobs.length === 0 && (
							<div className='flex flex-col gap-5'>
								<p className='text-lightblack max-w-[600px] text-lg mx-auto text-center'>
									<Loader />
								</p>
							</div>
						)}
						{!loading && error && jobs.length === 0 &&	 (
							<div className='flex flex-col gap-5'>
								<p className='text-red-500 max-w-[600px] text-lg mx-auto text-center'>
									{error}
								</p>
							</div>
						)}
						{!loading && !error && jobs.length === 0 && (
							<div className='flex flex-col gap-5'>
								<p className='text-lightblack max-w-[600px] text-lg mx-auto text-center'>
									At the moment, there are no job openings
									available. When new roles are posted, you
									will find them displayed here.
								</p>
							</div>
						)}
						{jobs.length > 0 && (
							<>
								<motion.div
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 1 }}
								>
									<h3 className='text-lightblack font-medium'>
										We're hiring
									</h3>
									<div className='max-h-[500px] overflow-y-auto no-scrollbar p-4 md:p-5 border border-lightblack/20 rounded-2xl mt-5 text-lightblack space-y-5'>
										<div className='flex flex-col md:flex-row md:justify-between gap-3 md:gap-0'>
											<div>
												<h3>Job Title</h3>
												<p className='text-black'>
													{currentJob.job_title}
												</p>
											</div>
											<div>
												<h4 className='text-primary bg-primary/10 px-2 py-1 rounded-md text-sm inline-block'>
													{formatDate(
														currentJob.created_at
													)}
												</h4>
											</div>
										</div>
										<div>
											<h3>Job Location</h3>
											<p className='text-primary'>
												{currentJob.location}
											</p>
										</div>
										<div>
											<h3>Job Description</h3>
											<div
												dangerouslySetInnerHTML={{
													__html: currentJob.description,
												}}
												className='text-black [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:mb-4 [&>li]:mb-2 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mb-4 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:mb-4 [&>a]:text-primary [&>a]:underline [&>strong]:font-bold [&>em]:italic'
											/>
										</div>
										<button
											onClick={() => setIsOpen(true)}
											className='bg-primary text-white px-10 py-2 rounded-md w-full md:w-auto'
										>
											Apply Now
										</button>

										<div>
											<h3>Application Process</h3>
											<ul className='list-disc list-inside text-black mt-3'>
												<li>Submit your application</li>
												<li>Submit your application</li>
											</ul>
										</div>
									</div>
								</motion.div>
								<div className='flex flex-row items-center gap-4 md:gap-8 w-full mt-10 md:mt-20 justify-center border-t py-2 border-b border-lightblack/20'>
									<button
										className={`bg-gray-100 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-200 transition-colors bg-gray/20 w-full md:w-auto ${
											currentPage === 1
												? 'opacity-50 cursor-not-allowed'
												: ''
										}`}
										onClick={handlePreviousPage}
										disabled={currentPage === 1}
									>
										Previous
									</button>
									<div className='hidden md:flex items-center gap-3 flex-wrap justify-center'>
										{Array.from(
											{ length: totalPages },
											(_, i) => i + 1
										).map((page) => (
											<span
												key={page}
												className={`flex items-center justify-center w-8 h-8 text-sm rounded-full cursor-pointer ${
													currentPage === page
														? 'bg-primary text-white'
														: 'bg-gray-100'
												}`}
												onClick={() =>
													setCurrentPage(page)
												}
											>
												{page}
											</span>
										))}
										<span className='text-gray-500'>
											of
										</span>
										<span className='bg-gray-100 flex items-center justify-center w-8 h-8 text-sm rounded-full'>
											{totalPages}
										</span>
									</div>
									<button
										className={`bg-gray-100 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-200 transition-colors bg-gray/20 w-full md:w-auto ${
											currentPage === totalPages
												? 'opacity-50 cursor-not-allowed'
												: ''
										}`}
										onClick={handleNextPage}
										disabled={currentPage === totalPages}
									>
										Next
									</button>
								</div>
							</>
						)}
					</div>
				</section>
			</motion.div>
		</>
	);
};

const JobApplicationPortal = ({ isOpen, setIsOpen, currentJob }) => {
	const [formData, setFormData] = useState({
		portfolio: '',
		linkedin: '',
		resume: null,
	});
	const [file, setFile] = useState({
		name: '',
		size: 0,
		uploaded: false,
	});
	const [uploadProgress, setUploadProgress] = useState(0);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const [fieldErrors, setFieldErrors] = useState({
		portfolio: '',
		linkedin: '',
	});
	const { applyForJob } = useJobs();

	const validateUrl = (url, type) => {
		if (!url) return 'Please enter a valid URL';

		try {
			const urlObj = new URL(url);
			if (
				type === 'linkedin' &&
				!urlObj.hostname.includes('linkedin.com')
			) {
				return 'Please enter a valid LinkedIn profile URL';
			}
			if (type === 'portfolio' && !urlObj.protocol.startsWith('http')) {
				return 'Please enter a valid URL starting with http:// or https://';
			}
			return '';
		} catch (e) {
			return 'Please enter a valid URL';
		}
	};

	const handleInputChange = (e, type) => {
		const value = e.target.value;
		setFormData((prev) => ({ ...prev, [type]: value }));

		// Validate URL immediately
		const error = validateUrl(value, type);
		setFieldErrors((prev) => ({ ...prev, [type]: error }));
	};

	const handleFileChange = (selectedFile) => {
		if (!selectedFile) return;

		if (selectedFile.size > 5 * 1024 * 1024) {
			setError('File size exceeds 5MB limit');
			return;
		}

		if (
			![
				'application/pdf',
				'application/msword',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
			].includes(selectedFile.type)
		) {
			setError('Please upload a PDF or Word document');
			return;
		}

		setFile({
			name: selectedFile.name,
			size: (selectedFile.size / 1024 / 1024).toFixed(2),
			uploaded: false,
		});
		setFormData((prev) => ({ ...prev, resume: selectedFile }));
		setError(null);

		// Simulate upload progress
		setUploadProgress(0);
		const interval = setInterval(() => {
			setUploadProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setFile((prevFile) => ({ ...prevFile, uploaded: true }));
					return 100;
				}
				return prev + 5;
			});
		}, 200);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		// Validate all fields before submission
		const portfolioError = validateUrl(formData.portfolio, 'portfolio');
		const linkedinError = validateUrl(formData.linkedin, 'linkedin');

		setFieldErrors({
			portfolio: portfolioError,
			linkedin: linkedinError,
		});

		if (portfolioError || linkedinError) {
			setIsSubmitting(false);
			return;
		}

		try {
			const formDataToSend = new FormData();

			// Debug: Log current job details
			console.log('Current Job:', currentJob);

			// Add form fields with consistent naming
			formDataToSend.append('portfolio_link', formData.portfolio);
			formDataToSend.append('linkedin_profile', formData.linkedin);
			formDataToSend.append('cv', formData.resume);
			formDataToSend.append('job_id', currentJob.id);
			formDataToSend.append('career', currentJob.job_title);

			// Debug: Log the FormData contents before sending
			console.log('FormData contents in JobApplicationPortal:');
			for (let [key, value] of formDataToSend.entries()) {
				console.log(`${key}:`, value);
			}

			await applyForJob(currentJob.id, formDataToSend);
			setSuccess(true);
		} catch (error) {
			console.error('Application error:', error);
			setError(error.message || 'Failed to submit application');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div
			className={`w-screen h-screen bg-black/20 fixed top-0 left-0 z-50 flex justify-center ${
				isOpen ? 'block' : 'hidden'
			}`}
			onClick={() => setIsOpen(false)}
		>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className='relative max-w-[1240px] md:w-[80%] w-[90%] h-[80%] bg-white my-auto md:mt-32 rounded-2xl p-10 overflow-y-auto no-scrollbar'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='flex justify-between items-center'>
					<h1 className='text-2xl font-semibold'>Application Form</h1>
					<button
						onClick={() => setIsOpen(false)}
						className='text-gray-500 hover:text-gray-700'
					>
						<FaTimes size={24} />
					</button>
				</div>

				{error && (
					<div className='mt-4 p-4 bg-red-50 text-red-600 rounded-md'>
						{error}
					</div>
				)}

				<form
					className={`mt-20 md:w-[70%] w-full mx-auto space-y-10 ${
						success ? 'hidden' : ''
					}`}
					onSubmit={handleSubmit}
				>
					<div className='flex flex-col gap-1'>
						<label htmlFor='portfolio'>Portfolio Link</label>
						<input
							type='text'
							name='portfolio'
							id='portfolio'
							placeholder='Enter your portfolio link (e.g., https://yourportfolio.com)'
							className={`border rounded-md p-2 ${
								fieldErrors.portfolio
									? 'border-red-500'
									: 'border-lightblack/20'
							}`}
							value={formData.portfolio}
							onChange={(e) => handleInputChange(e, 'portfolio')}
						/>
						{fieldErrors.portfolio && (
							<p className='text-red-500 text-sm mt-1'>
								{fieldErrors.portfolio}
							</p>
						)}
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='linkedin'>LinkedIn profile link</label>
						<input
							type='text'
							name='linkedin'
							id='linkedin'
							placeholder='Enter your LinkedIn profile link (e.g., https://linkedin.com/in/yourprofile)'
							className={`border rounded-md p-2 ${
								fieldErrors.linkedin
									? 'border-red-500'
									: 'border-lightblack/20'
							}`}
							value={formData.linkedin}
							onChange={(e) => handleInputChange(e, 'linkedin')}
						/>
						{fieldErrors.linkedin && (
							<p className='text-red-500 text-sm mt-1'>
								{fieldErrors.linkedin}
							</p>
						)}
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='resume'>
							Cv / Resume <span className='text-red-500'>*</span>
						</label>
						<div
							className='border border-dashed border-lightblack/20 rounded-md h-[150px] flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors'
							onDragOver={(e) => {
								e.preventDefault();
								e.stopPropagation();
							}}
							onDrop={(e) => {
								e.preventDefault();
								e.stopPropagation();
								const files = e.dataTransfer.files;
								if (files.length) {
									handleFileChange(files[0]);
								}
							}}
							onClick={() =>
								document.getElementById('resume').click()
							}
						>
							<div className='flex flex-col gap-2 items-center justify-center'>
								<div className='relative mb-5'>
									<FaFile
										size={40}
										className='text-gray'
									/>
									<div className='w-8 h-8 rounded-full bg-black/80 flex items-center justify-center absolute -bottom-2 -right-3'>
										<IoCloudUploadSharp
											size={15}
											color='white'
										/>
									</div>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<h3 className='font-semibold text-lightblack'>
										Click to upload or Drag file here
									</h3>
									<p className='text-sm text-lightblack'>
										Maximum file size: 5MB
									</p>
								</div>
							</div>
							<input
								type='file'
								id='resume'
								name='resume'
								className='hidden'
								accept='.pdf,.doc,.docx'
								onChange={(e) => {
									const file = e.target.files[0];
									handleFileChange(file);
								}}
							/>
						</div>
					</div>

					{file.name && (
						<div className='w-full h-[150px] border border-gray/50 space-y-5 rounded-md p-5'>
							<div className='flex items-center gap-2'>
								<div className='bg-gray/20 p-2 rounded-lg'>
									<FaFile className='size-10 text-gray' />
								</div>
								<div>
									<h3 className='text-sm font-semibold text-lightblack'>
										{file.name}
									</h3>
									<p className='text-sm text-gray-500 pt-1'>
										{file.size} MB
									</p>
								</div>
							</div>
							<div className='w-full h-[20px] bg-gray-200 rounded-md'>
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: `${uploadProgress}%` }}
									transition={{ duration: 0.3 }}
									className='h-[20px] bg-primary/30 rounded-md transition-all duration-300 text-center text-white text-sm'
								>
									{uploadProgress}%
								</motion.div>
							</div>
						</div>
					)}

					<button
						type='submit'
						className='bg-primary text-white px-10 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
						disabled={
							isSubmitting ||
							!formData.resume ||
							!file.uploaded ||
							fieldErrors.portfolio ||
							fieldErrors.linkedin
						}
					>
						{isSubmitting ? 'Submitting...' : 'Submit'}
					</button>
				</form>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className={`mt-20 md:w-[70%] w-full mx-auto space-y-10 ${
						success ? 'block' : 'hidden'
					}`}
				>
					<div className='flex flex-col gap-5'>
						<img
							src={successImage}
							alt='success'
							className='w-full mx-auto'
						/>
						<h1 className='text-2xl font-semibold text-center'>
							Thank you for your application
						</h1>
						<p className='text-center text-gray-500'>
							Your Application has been submitted successfully.
							Expect Feedback soon!
						</p>
						<button
							onClick={() => setIsOpen(false)}
							className='bg-primary text-white px-10 py-2 max-w-[300px] mx-auto rounded-md'
						>
							Close
						</button>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};
export default Careers;
