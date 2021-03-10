import React from 'react';
import styled from 'styled-components';

// local components
import { GlobalStyle } from '../theme/globalStyles';
import Navbar from './navbar';

// styled components
const Container = styled.div`
	color: #232129,
`;
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

const Layout = ({ children }) => {
	return (
		<Container>
			<GlobalStyle />
			<Navbar />
			<main>{children}</main>
			<FooterStyled>
				© {new Date().getFullYear()}, Developed by SasheemDev
			</FooterStyled>
		</Container>
	);
};

export default Layout;
