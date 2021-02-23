module.exports = {
	siteMetadata: {
		title: 'Sasheem Dev Portfolio',
		siteUrl: 'http://sasheem-dev-portfolio.s3-website-us-east-1.amazonaws.com/',
	},
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: 'sasheem-dev-portfolio',
			},
		},
	],
};
