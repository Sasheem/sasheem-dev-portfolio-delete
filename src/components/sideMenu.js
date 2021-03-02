import React from 'react';
import styled from 'styled-components';

/**
 * todo finish styling w/ an argument to NavStyled for additional styling when component is open
 * ?
 */

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
	transform: ${(props) =>
		props.open === true ? translateX(0) : translateX(120)};
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

const SideMenu = ({ open }) => {
	return (
		<NavStyled open={open}>
			<ul>
				<li>
					<p>About</p>
				</li>
				<li>
					<p>Contact</p>
				</li>
			</ul>
		</NavStyled>
	);
};

export default SideMenu;
