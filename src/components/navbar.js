import React from 'react';
import styled from 'styled-components';

// local components
import Hamburger from './hamburger';

// styled components
const Nav = styled.nav`
	width: 100%;
	height: 55px;
	border-bottom: 2px solid #f1f1f1;
	display: flex;
	justify-content: space-between;
	
	.logo {
		padding: 15px 0;
	}
`;

// markup
const Navbar = () => {
	return (
		<header>
			<Nav>
				<div className='logo'>
					<p>Logo</p>
				</div>
				<Hamburger />
			</Nav>
		</header>
	);
};

export default Navbar;
