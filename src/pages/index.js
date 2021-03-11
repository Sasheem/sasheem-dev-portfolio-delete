import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

// styles
const Heading = styled.h1`
	margin-top: 256px;
	margin-bottom: 352px;
	max-width: 540px;
`;

const HeadingAccent = styled.span`
	color: #663999;
`;

const Ul = styled.ul`
	margin-bottom: 96px;
	padding-left: 0;
`;

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
		<Layout>
			<title>Home Page</title>
			<Heading>
				Hi my name is Sasheem.
				<br />
				<HeadingAccent>
					Welcome to my portfolio of websites and mobile apps!{' '}
				</HeadingAccent>
				<span role='img' aria-label='Party popper emojis'>
					👨🏾‍💻
				</span>
			</Heading>
			<Ul>
				<li style={docLinkStyle}>
					<a style={linkStyle} href={docLink.url} target='_blank' rel="noreferrer">
						{docLink.text}
					</a>
				</li>
				{links.map((link) => (
					<li key={link.url} style={{ ...listItemStyles, color: link.color }}>
						<span>
							<a style={linkStyle} href={link.url} target='_blank' rel="noreferrer">
								{link.text}
							</a>
							<p style={descriptionStyle}>{link.description}</p>
						</span>
					</li>
				))}
			</Ul>
		</Layout>
	);
};

export default IndexPage;
