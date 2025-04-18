import React, { useEffect, useState, useRef, useCallback } from 'react';

const LanguageSelector = ({
	languages = [
		{ code: 'en', label: 'English', flag: '🇺🇸' },
		{ code: 'es', label: 'Spanish', flag: '🇪🇸' },
		{ code: 'fr', label: 'French', flag: '🇫🇷' },
		{ code: 'de', label: 'German', flag: '🇩🇪' },
		{ code: 'it', label: 'Italian', flag: '🇮🇹' },
		{ code: 'pt', label: 'Portuguese', flag: '🇵🇹' },
		{ code: 'ru', label: 'Russian', flag: '🇷🇺' },
		{ code: 'zh', label: 'Chinese', flag: '🇨🇳' },
		{ code: 'ja', label: 'Japanese', flag: '🇯🇵' },
		{ code: 'ar', label: 'Arabic', flag: '🇸🇦' },
	],
	defaultLanguage = 'en',
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(
		languages.find((lang) => lang.code === defaultLanguage) || languages[0]
	);
	const [isTranslating, setIsTranslating] = useState(false);
	const menuRef = useRef(null);

	// Function to translate the page
	const translatePage = async (targetLang) => {
		setIsTranslating(true);

		// Create a script element for Google Translate
		const script = document.createElement('script');
		script.src =
			'//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
		script.async = true;
		document.body.appendChild(script);

		// Initialize Google Translate
		window.googleTranslateElementInit = () => {
			new window.google.translate.TranslateElement(
				{
					pageLanguage: 'auto',
					includedLanguages: targetLang,
					autoDisplay: false,
				},
				'google_translate_element'
			);

			// Trigger translation
			const select = document.querySelector('.goog-te-combo');
			if (select) {
				select.value = targetLang;
				select.dispatchEvent(new Event('change'));
			}

			// Clean up after translation
			setTimeout(() => {
				document.body.removeChild(script);
				setIsTranslating(false);
				console.log('Translation completed!');
			}, 3000);
		};
	};

	// Language Selection Method
	const handleLanguageSelect = useCallback(async (language) => {
		setSelectedLanguage(language);
		setIsOpen(false);
		await translatePage(language.code);
	}, []);

	// Outside click handling
	const handleClickOutside = useCallback((event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, [handleClickOutside]);

	return (
		<div
			className='relative inline-block'
			ref={menuRef}
		>
			{/* Hidden Google Translate Element */}
			<div
				id='google_translate_element'
				style={{ display: 'none' }}
			></div>

			{/* Language Selector Button */}
			<button
				className='flex items-center px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none rounded-md'
				onClick={() => setIsOpen(!isOpen)}
				aria-haspopup='true'
				aria-expanded={isOpen}
				disabled={isTranslating}
			>
				<span className='mr-2 text-sm'>
					{selectedLanguage.flag} {selectedLanguage.label}
				</span>
				{isTranslating ? (
					<svg
						className='animate-spin h-4 w-4 text-gray-500'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
					>
						<circle
							className='opacity-25'
							cx='12'
							cy='12'
							r='10'
							stroke='currentColor'
							strokeWidth='4'
						></circle>
						<path
							className='opacity-75'
							fill='currentColor'
							d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
						></path>
					</svg>
				) : (
					<svg
						className={`w-4 h-4 text-gray-500 transition-transform ${
							isOpen ? 'rotate-180' : ''
						}`}
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M19 9l-7 7-7-7'
						></path>
					</svg>
				)}
			</button>

			{/* Language Dropdown */}
			{isOpen && (
				<div className='absolute right-0 z-50 mt-2 w-36 overflow-scroll no-scrollbar bg-white rounded-lg shadow-lg'>
					<ul>
						{languages.map((language) => (
							<li key={language.code}>
								<button
									className='w-full text-left flex items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-100'
									onClick={() =>
										handleLanguageSelect(language)
									}
									disabled={isTranslating}
								>
									<span className='mr-2 text-xl'>
										{language.flag}
									</span>
									{language.label}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default LanguageSelector;
