import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

// styled components
const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;

	li {
		padding: 18px 10px;
	}
	a,
	p {
		text-decoration: none;
		background-color: none;
	}
	a:hover,
	a:active,
	p:hover,
	p:active {
		cursor: pointer;
		color: #8a8a8a;
	}

	@media only screen and (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #0D2538;
		position: fixed;
		transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;

		p {
			color: #a0aec0;
		}
	}
`;
const NavText = styled.p`
	margin: 0;
	font-size: 1rem;
	font-weight: 700;
`;

const NavStyled = styled.nav`
	height: 100%;
	background-color: white;
	box-shadow: 1px 0 7px rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	right: 0;
	width: 70%;
	max-width: 400px;
	z-index: 200;
	transform: translate(${(props) => {
		console.log(`props.open: ${props.open}`)
		return props.open === false ? 0 : 150}
	}});
	transition: transform 0.3s ease-out;
 
	ul {
		height: 100%;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	li {
		margin: 0.5rem 0;
	}

	a {
		color: #3e4cae;
		text-decoration: none;
		font-size: 1.2rem;
	}
	a:hover,
	a:active {
		color: #1ca086;
	}
`;

// markup
const SideNav = ({ open }) => {
	return (
		<Ul open={open}>
			<li>
				
				<NavText onClick={() => scrollTo('#work-dev')}>Portfolio</NavText>
			</li>
			<li>
				<NavText onClick={() => scrollTo('#contact')}>Contact</NavText>
			</li>
		</Ul>
	);
};

export default SideNav;
