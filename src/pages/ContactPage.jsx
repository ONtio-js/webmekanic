import React, { useState } from 'react';
import axios from 'axios';
const ContactPage = () => {
	const [fullName, SetFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [company, setCompany] = useState('');
	const [phone, setPhone] = useState('');
	const [country, setCountry] = useState('');
	const [fullnameError, setFullNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [MessageError, setMessageError] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const [open, setOpen] = useState(false);
	const emailValidation = (email) => {
		return String(email)
			.toLowerCase()
			.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
	};
	const handlefullName = (event) => {
		SetFullName(event.target.value);
		setFullNameError(false);
	};
	const handleEmail = (event) => {
		setEmail(event.target.value);
		setEmailError(false);
	};
	const handleMessage = (event) => {
		setMessage(event.target.value);
		setMessageError(false);
	};
	const handleCompany = (event) => {
		setCompany(event.target.value);
	};
	const handlePhone = (event) => {
		setPhone(event.target.value);
	};
	const handleCountry = (event) => {
		setCountry(event.target.value);
	};
	const handleSumbit = async (e) => {
		e.preventDefault();
		if (!fullName) {
			setFullNameError(true);
		}
		if (!email) {
			setEmailError(true);
		} else if (!emailValidation(email)) {
			setEmailError(true);
		}
		if (!message) {
			setMessageError(true);
		}
		if (fullName && email && emailValidation(email) && message) {
			await axios.post(
				'https://getform.io/f/b955d741-a915-4583-87c3-e2630297e26e',
				{
					name: fullName,
					email: email,
					message: message,
				}
			);
			setSuccessMessage(
				` Hello ${fullName}🖐 Your message have successfully sent,  and we will get back to you soon.`
			);
			setEmail('');
			setMessage('');
			SetFullName('');
			setOpen(true);
		}
	};

	return (
		<>
			<div className='mt-16 md:mt-0'>
				<div className='bg-lightsecondary py-10 md:py-32 px-5 md:px-20 flex flex-col items-center gap-y-4'>
					<h3 className='text-2xl font-semibold capitalize'>
						let's talk about your project
					</h3>
					<p className='text-lightblack max-w-[500px] text-center'>
						Have a question or want to start a project? fill out the
						form below and we will get back to you shortly.
					</p>
				</div>
				<div className='bg-blend-darken mb-32 rounded-b-3xl bg-black px-5 py-10 md:p-20 grid sm:grid-cols-2 items-start text-gray'>
					<div className='flex-1'>
						<h5 className='text-lg text-gray font-medium py-6 capitalize'>
							contact us
						</h5>
						<h3 className='text-white font-bold text-2xl'>
							Book Us Now
						</h3>
						<p className='py-4 pr-10'>
							Got a Project or idea in mind? We Have got you!
							Let's talk about your needs - fill in the form below
							and we will be in touch with you shortly. We can't
							wait to start working with you!
						</p>
					</div>
					<div className='flex flex-col flex-1'>
						<form
							action=''
							method='post'
							className='bg-white text-black p-8 lg:p-10 rounded-md'
						>
							<div>
								<label
									htmlFor='fullname'
									className='font-medium'
								>
									Full Name{' '}
									<span className='text-red-600'>*</span>
								</label>
								<div
									className={`${
										fullnameError
											? 'border-2 border-red-500  animate-pulse'
											: 'border border-black'
									} mt-1  px-4 py-2 rounded-md`}
								>
									<input
										className='focus:border-none border-none active:border-none outline-none w-full active:bg-white text-lightblack focus:bg-white '
										type='text'
										id='fullname'
										placeholder='Enter Your Name'
										name='fullname'
										onChange={handlefullName}
									/>
								</div>
								<div className='py-2'>
									<label
										htmlFor='email'
										className='font-medium'
									>
										Work Email{' '}
										<span className='text-red-600'>*</span>
									</label>
									<div
										className={`${
											emailError
												? 'border-2 border-red-500  animate-pulse'
												: 'border border-black'
										} mt-1  px-4 py-2 rounded-md`}
									>
										<input
											className='focus:border-none border-none active:border-none outline-none w-full active:bg-white  text-lightblack focus:bg-white '
											type='email'
											id='email'
											placeholder='Enter Your E-mail '
											name='email'
											onChange={handleEmail}
										/>
									</div>
								</div>
								<div className='py-2'>
									<label
										htmlFor='company'
										className='font-medium'
									>
										Company
									</label>
									<div
										className={`border border-black mt-1  px-4 py-2 rounded-md`}
									>
										<input
											className='focus:border-none border-none active:border-none outline-none w-full active:bg-white  text-lightblack focus:bg-white '
											type='text'
											id='company'
											placeholder='Enter Your E-mail '
											name='company'
											onChange={handleCompany}
										/>
									</div>
								</div>
								<div className='py-2 grid sm:grid-cols-2 gap-3'>
									<div className=''>
										<label
											htmlFor='email'
											className='font-medium'
										>
											Country
										</label>
										<div
											className={`border border-black mt-1  px-4 py-2 rounded-md`}
										>
											<input
												className='focus:border-none border-none active:border-none outline-none w-full active:bg-white  text-lightblack focus:bg-white '
												type='text'
												id='country'
												placeholder='Enter Your Country '
												name='country'
												onChange={handleCountry}
											/>
										</div>
									</div>
									<div className=''>
										<label
											htmlFor='email'
											className='font-medium'
										>
											Phone
										</label>
										<div
											className={`border border-black mt-1  px-4 py-2 rounded-md`}
										>
											<input
												className='focus:border-none border-none active:border-none outline-none w-full active:bg-white  text-lightblack focus:bg-white '
												type='text'
												id='phone'
												placeholder='+1768908645'
												name='phone'
												onChange={handlePhone}
											/>
										</div>
									</div>
								</div>
								<label
									htmlFor='message'
									className='font-medium'
								>
									Your Message{' '}
									<span className='text-red-600'>*</span>
								</label>
								<div
									className={`${
										MessageError
											? 'border-2 border-red-500  animate-pulse'
											: 'border border-black'
									} mt-1  px-4 py-2 rounded-md`}
								>
									<textarea
										name='message'
										id='message'
										rows={5}
										className='w-full outline-none'
										placeholder='Message us about your Project...'
										onChange={handleMessage}
									></textarea>
								</div>
								<button
									onClick={handleSumbit}
									className='border px-12 my-5 text-xl font-medium bg-primary text-white rounded-md py-1 capitalize hover:bg-white hover:text-primary border-primary'
								>
									submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<MsgSuccess
				open={open}
				setOpen={(prev) => setOpen(!prev)}
				message={successMessage}
			/>
		</>
	);
};

const MsgSuccess = ({ open, setOpen, message }) => {
	return (
		<div
			onClick={setOpen}
			className={`${
				open
					? ' absolute top-0 left-0 bg-transparent z-40 h-screen w-screen flex justify-center items-center'
					: 'hidden'
			}`}
		>
			<div className=' relative overflow-hidden bg-lightsecondary p-10 rounded-xl shadow-lg w-[80%] md:w-[50%] '>
				{message}
				<div className='w-16 h-16 bg-lightprimary rounded-full absolute -bottom-5 -left-2'></div>
				<div className='w-16 h-16 bg-primary/50 rounded-full absolute -top-5 -right-2'></div>
			</div>
		</div>
	);
};

export default ContactPage;
