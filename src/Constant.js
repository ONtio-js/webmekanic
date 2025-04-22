import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { design, mobile, monitor, support } from './assets/icon';


import { testmony1 } from './assets/images';
export const BASE_API_URL =
	'https://pure-abbye-michaeldecent-5e21af02.koyeb.app/api/blog/posts';
export const GOOGLE_SHEET_URL =
	'https://script.google.com/macros/s/AKfycbztmoaej_JNWyaIw91m9CfQOIxCe-Nanc53l396GDYFe1ODTijH4WsQJlV-IF9AIqKXUw/exec';
export const service = [
	{
		id: 1,
		title: 'UI/UX Design',
		description:
			'Deliver seamless, intuitive, and visually stunning digital experiences with our expertly crafted UI/UX design solutions. Backed by in-depth user research and optimized user journeys, we design interfaces that enhance engagement, boost conversions, and elevate brand identity.',
		logo: design,
	},
	{
		id: 2,
		title: 'Web Development',
		description:
			'We build high-performance websites customized to your unique business needs. Our bespoke web development solutions ensure a seamless blend of aesthetics, functionality, and scalability, delivering an exceptional user experience and business growth.',
		logo: monitor,
	},
	{
		id: 3,
		title: 'Mobile Development',
		description:
			'From iOS to Android, we transform your ideas into intuitive, user-friendly mobile apps with cutting-edge design and flawless performance across all devices. Our custom app development ensures scalability, efficiency, and an exceptional user experience.',
		logo: mobile,
	},
	{
		id: 4,
		title: 'Maintenance & Support',
		description:
			'Stay ahead with our proactive maintenance and dedicated support services. We ensure your web and mobile applications remain secure, optimized, and up-to-date, delivering peak performance and seamless user experiences at all times.',
		logo: support,
	},
];

export const approach = [
    {
        id:1,
        title:'Research',
        description:'Understanding your needs'
    },
    {
        id:2,
        title:'ideate',
        description:'Innovative concept creation'
    },
    {
        id:3,
        title:'Build',
        description:'Develop robust solution'
    },
    {
        id:4,
        title:'Test',
        description:'Ensuring optional performance'
    }
]

export const testimonies = [
	// {
	// 	id: 1,
	// 	name: 'Remy Ajakah',
	// 	position: 'CEO, IkoroFest',
	// 	decription:
	// 		'“Your attention to detail and commitment to our vision resulted in a fantastic, seamless website that we are incredibly proud of. Thank you for your hard work and collaboration. It has been a pleasure working with such a talented team, and we look forward to future collaborations.”',
	// 	organisation: 'IkoroFest',
	// 	imagesrc: testmony1,
	// },
	{
		id: 2,
		name: 'Remy Roseline',
		position: 'CEO, MyScooty',
		decription:
			'“Your attention to detail and commitment to our vision resulted in a fantastic, seamless website that we are incredibly proud of. Thank you for your hard work and collaboration. It has been a pleasure working with such a talented team, and we look forward to future collaborations.”',
		organisation: 'MyScooty',
		imagesrc: testmony1,
	},
];

export const teams = [
	{
		id: 1,
		imagesrc:
			'https://res.cloudinary.com/dm2pa4nll/webmekanic/theo_jxbryf.png',
		name: 'Theophilus Nkwuda',
		position: 'Co-Founder',
		fb: 'https://web.facebook.com/tiocode/',
		ln: 'https://www.linkedin.com/in/ontiojs1/',
		tw: 'https://x.com/Tiocode_',
	},
	{
		id: 2,
		imagesrc:
			'https://res.cloudinary.com/dm2pa4nll/webmekanic/team1_jjcwoz.png',
		name: 'Precious Nwachukwu',
		position: 'Co-Founder',
		fb: '',
		ln: 'https://www.linkedin.com/in/preciouschukwu',
		tw: 'twitter.com/Presh_chukwu',
	},
	{
		id: 3,
		imagesrc:
			'https://res.cloudinary.com/dm2pa4nll/webmekanic/mike_yozvol.png',
		name: 'Michael Nwogha',
		position: 'Co-Founder',
		fb: 'https://www.facebook.com/michael.nwogha/',
		ln: 'https://www.linkedin.com/in/michael-nwogha',
		tw: 'https://x.com/MichaelDecent0',
	},
];

// export const recentWorks = [
// 	{
// 		id: 1,
// 		name: 'Myscooty',
// 		type: 'Website Development',
// 		link: 'https://myscooty.ng/',
// 		mockup: ikoro,
// 	},
// 	{
// 		id: 2,
// 		name: 'Spacee',
// 		type: 'mobile App Development',
// 		link: 'https://spacee-nine.vercel.app/',
// 		mockup: spacee,
// 	},
// 	{
// 		id: 3,
// 		name: 'RestKonnect',
// 		type: 'website development',
// 		link: 'https://resto-konnet.vercel.app/',
// 		mockup: restokonet,
// 	},
// ];

export const uiUxDesign = [
	[
		{
			title: 'User Research & Persona Development',
		},
		{
			title: 'Wireframing & Prototyping',
		},
		{
			title: 'UX Audits & Usability Testing',
		},
		{
			title: 'UI Design& Interaction Design',
		},
		{
			title: 'Design System & Component Library',
		},
	],
	[
		'Increased user engagement & retention',
		'Intuitive and easy-to-use interfaces',
		'Improved accessibility & usability',
		,
		'Higher conversion rates',
		'Strong brand consistency',
	],
];

export const webDevelopment = [
	[
		{
			title: 'Custom Website Development',
		},
		{
			title: 'Landing Page Development',
		},
		{
			title: 'E-commerce Development',
		},
		{
			title: 'CMS & No-Code Solutions',
		},
		{
			title: 'SEO & Performance Optimization',
		},
	],
	[
		'Fast and fully responsive websites',
		'SEO-optimized for better search rankings',
		'Scalable solutions that grow with your business',
		'Secure and reliable performance',
		'Seamless integrations with third-party tools',
	],
];

export const mobileApp = [
	[
		{
			title: 'iOS & Andriod App Development',
		},
		{
			title: 'Cross Platform Development(Flutter, React Native)',
		},
		{
			title: 'UI/UX for mobile Apps',
		},
		{
			title: 'API integration and Backend Development',
		},
		{
			title: 'App Performance Optimization',
		},
	],
	[
		'High-performance mobile applications',
		'Intuitive and user-friendly experience',
		'Scalable and future-proof solutions',
		'Seamless third-party integrations',
		'Secure and efficient backend architecture',
	],
];

export const maintenance = [
	[
		{
			title: 'Proactive Monitoring & Bug Detection',
		},
		{
			title: 'Security Patch Management',
		},
		{
			title: 'Regular Updates & Security Patches',
		},
		{
			title: 'Bug Fixes & Technical Support',
		},
		{
			title: 'Feature Enhancements & Scalability',
		},
	],
	[
		'Improved security and stability',
		'Regular updates for a seamless experience',
		'Faster load times and optimized performance',
		'Reduced downtime and technical issues',
		'Long-term scalability and growth',
	],
];

export const values = [
	{
		id: 1,
		title: 'Innovation',
		description: 'Continuously pushing the boundaries of technology',
	},
	{
		id: 2,
		title: 'Quality',
		description: 'Delivering top-notch solutions that exceed expectations',
	},
	{
		id: 3,
		title: 'Integrity',
		description: 'Building trust through transparency and honesty',
	},
	{
		id: 4,
		title: 'Customer Focus',
		description: 'Putting our clients at the heart of everything we do',
	},
];