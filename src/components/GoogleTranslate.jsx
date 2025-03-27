import React, { useEffect, useState, useRef, useCallback } from 'react';

const LanguageSelector = ({
	languages = [
		{ code: 'en', label: 'English' },
		{ code: 'es', label: 'Spanish' },
		{ code: 'fr', label: 'French' },
		{ code: 'de', label: 'German' },
		{ code: 'it', label: 'Italian' },
	],
	defaultLanguage = 'en',
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(
		languages.find((lang) => lang.code === defaultLanguage) || languages[0]
	);
	const menuRef = useRef(null);

	// Improved Google Translate Integration
	useEffect(() => {
		// Ensure clean slate for multiple loads
		const existingScript = document.getElementById(
			'google-translate-script'
		);
		if (existingScript) {
			existingScript.remove();
		}

		// Remove any existing translate elements
		const existingTranslateElement = document.getElementById(
			'google_translate_element'
		);
		if (existingTranslateElement) {
			existingTranslateElement.innerHTML = '';
		}

		// Create script element
		const script = document.createElement('script');
		script.id = 'google-translate-script';
		script.src =
			'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
		script.async = true;

		// Global initialization function
		window.googleTranslateElementInit = () => {
			try {
				new window.google.translate.TranslateElement(
					{
						pageLanguage: defaultLanguage,
						includedLanguages: languages
							.map((lang) => lang.code)
							.join(','),
						layout: window.google.translate.TranslateElement
							.InlineLayout.SIMPLE,
						autoDisplay: false,
					},
					'google_translate_element'
				);
			} catch (error) {
				console.error('Google Translate initialization error:', error);
			}
		};

		// Append script
		document.body.appendChild(script);

		// Cleanup function
		return () => {
			if (script && document.body.contains(script)) {
				document.body.removeChild(script);
			}
			delete window.googleTranslateElementInit;
		};
	}, [languages, defaultLanguage]);

	// Language Selection Method
	const handleLanguageSelect = useCallback((language) => {
		setSelectedLanguage(language);
		setIsOpen(false);

		// Use setTimeout to ensure DOM is ready
		setTimeout(() => {
			try {
				// Find and click the language in Google Translate dropdown
				const iframe = document.querySelector(
					'iframe.goog-te-menu-frame'
				);
				if (iframe) {
					const iframeDocument = iframe.contentWindow.document;
					const languageOptions = iframeDocument.querySelectorAll(
						'.goog-te-menu2-item'
					);

					for (let option of languageOptions) {
						const langText = option.textContent.trim();
						if (
							langText
								.toLowerCase()
								.includes(language.label.toLowerCase())
						) {
							option.querySelector('span.text')?.click();
							break;
						}
					}
				}
			} catch (error) {
				console.error('Language selection error:', error);
			}
		}, 100);
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
				style={{
					display: 'none',
					position: 'absolute',
					top: '-9999px',
					left: '-9999px',
				}}
			></div>

			{/* Language Selector Button */}
			<button
				className='flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
				onClick={() => setIsOpen(!isOpen)}
				aria-haspopup='true'
				aria-expanded={isOpen}
			>
				<span className='mr-2'>🌐 {selectedLanguage.label}</span>
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
			</button>

			{/* Language Dropdown */}
			{isOpen && (
				<div className='absolute right-0 z-50 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200'>
					<ul>
						{languages.map((language) => (
							<li key={language.code}>
								<button
									className='w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
									onClick={() =>
										handleLanguageSelect(language)
									}
								>
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
