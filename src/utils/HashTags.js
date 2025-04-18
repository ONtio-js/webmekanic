export const generateHashtags = (content) => {
	// Remove special characters and convert to lowercase
	const cleanContent = content.toLowerCase().replace(/[^a-z0-9\s]/g, '');

	// Split into words and filter out common words
	const commonWords = [
		'the',
		'a',
		'an',
		'and',
		'or',
		'but',
		'in',
		'on',
		'at',
		'to',
		'for',
		'of',
		'with',
		'by',
	];
	const words = cleanContent
		.split(' ')
		.filter((word) => word.length > 3 && !commonWords.includes(word));

	// Get unique words and limit to 5 hashtags
	const uniqueWords = [...new Set(words)].slice(0, 5);

	// Convert words to hashtags
	const hashtags = uniqueWords.map(
		(word) => `#${word.charAt(0).toUpperCase() + word.slice(1)}`
	);

	// Add WebMekanic hashtag
	hashtags.unshift('#WebMekanic');

	return hashtags.join(' ');
};
