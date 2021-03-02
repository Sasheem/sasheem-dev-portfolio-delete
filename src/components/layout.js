import React, { useState } from 'react';
import styled from 'styled-components';

// local components
import Header from './header';
import SideMenu from './sideMenu';
import BackDrop from './backDrop';

// styled components
const DivStyled = styled.div``;
const ContainerStyled = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f7fafc;
`;
const FooterStyled = styled.footer`
	margin-top: 40vh;
	padding-bottom: 10vh;
	display: flex;
	justify-content: center;
`;
/**
 * todo finish moving components from old project
 */

const Layout = ({ children }) => {
	const [sideMenuOpen, setSideMenuOpen] = useState(false);

	// toggle menu open or close
	const sideMenuToggleHandler = () => {
		setSideMenuOpen(!sideMenuOpen);
	};

	// method to close side menu
	const hideBackdrop = () => {
		setSideMenuOpen(false);
	};
	return (
		<DivStyled>
			<Header
				sideMenuToggleHandler={sideMenuToggleHandler}
				hideBackdrop={hideBackdrop}
			/>
			<SideMenu open={sideMenuOpen} />
			{sideMenuOpen === true && <BackDrop click={hideBackdrop} />}
			<ContainerStyled>
				<main>{children}</main>
				<FooterStyled>
					© {new Date().getFullYear()}, Developed by SasheemDev
				</FooterStyled>
			</ContainerStyled>
		</DivStyled>
	);
};

export default Layout;
