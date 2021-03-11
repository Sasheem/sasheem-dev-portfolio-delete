import React from 'react';
import styled from 'styled-components';

// local components
import { GlobalStyle } from '../theme/globalStyles';
import Navbar from './navbar';

// styled components
const Main = styled.main`
	padding-left: 96px;
	padding-right: 96px;
`;
const Footer = styled.footer`
	margin-top: 40vh;
	padding-bottom: 10vh;
	display: flex;
	justify-content: center;
`;

// markup
const Layout = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<Main>{children}</Main>
			<Footer>
				© {new Date().getFullYear()}, Developed by SasheemDev
			</Footer>
		</>
	);
};

export default Layout;
