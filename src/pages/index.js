import * as React from 'react';

// styles
const pageStyles = {
	color: '#232129',
	padding: '96px',
	fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 540,
};
const headingAccentStyles = {
	color: '#663399',
};
const paragraphStyles = {
	marginBottom: 48,
};
const codeStyles = {
	color: '#8A6534',
	padding: 4,
	backgroundColor: '#FFF4DB',
	fontSize: '1.25rem',
	borderRadius: 4,
};
const listStyles = {
	marginBottom: 96,
	paddingLeft: 0,
};
const listItemStyles = {
	fontWeight: '300',
	fontSize: '24px',
	maxWidth: '560px',
};

const linkStyle = {
	color: '#8954A8',
	fontWeight: 'bold',
	fontSize: '16px',
	verticalAlign: '5%',
};

const docLinkStyle = {
	...linkStyle,
	listStyleType: 'none',
	marginBottom: 24,
};

const descriptionStyle = {
	color: '#232129',
	fontSize: '14px',
};

const docLink = {
	text: 'Github Profile',
	url: 'https://github.com/Sasheem',
	color: '#8954A8',
};
// data
const links = [
	{
		text: 'Sasheem Dev Portfolio',
		url: '/',
		description: 'Static website built using GatsbyJS and hosting on Amazon S3',
		color: '#E95800',
	},
	{
		text: 'Unhoused Humanity',
		url: 'https://github.com/Sasheem/gatsby-unhoused-website',
		description:
			'This website tells the stories of those experiencing homelesssness and crowdfunds for individuals and families in need of a helping hand.',
		color: '#1099A8',
	},
	{
		text: 'Cha Ching',
		url: 'https://github.com/Sasheem/tip-tracker-aws',
		description:
			'Tip tracking mobile app for users working in hospitality allowing them to track tips and wages earned.',
		color: '#BC027F',
	},
];

// markup
const IndexPage = () => {
	return (
		<main style={pageStyles}>
			<title>Home Page</title>
			<h1 style={headingStyles}>
				Hi my name is Sasheem.
				<br />
				<span style={headingAccentStyles}>
					Welcome to my portfolio of websites and mobile apps!{' '}
				</span>
				<span role='img' aria-label='Party popper emojis'>
					👨🏾‍💻
				</span>
			</h1>
			<ul style={listStyles}>
				<li style={docLinkStyle}>
					<a style={linkStyle} href={docLink.url} target='_blank'>
						{docLink.text}
					</a>
				</li>
				{links.map((link) => (
					<li key={link.url} style={{ ...listItemStyles, color: link.color }}>
						<span>
							<a style={linkStyle} href={link.url} target='_blank'>
								{link.text}
							</a>
							<p style={descriptionStyle}>{link.description}</p>
						</span>
					</li>
				))}
			</ul>
		</main>
	);
};

export default IndexPage;
