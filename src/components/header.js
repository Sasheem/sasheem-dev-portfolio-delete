import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

/**
 * todo finish moving styling from old project
 */

// styled components
const HeaderStyled = styled.header``;
const NavStyled = styled.nav``;
const Spacer = styled.div`
	flex: 1;
`;
const NavItems = styled.div`
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	li {
		padding: 0 0.5rem;
		margin-bottom: 0;
	}

	a,
	p {
		color: #a0aec0;
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
`;
const NavText = styled.p`
	font-size: 1.5rem;
	font-weight: 700;
`;

// markup
const Header = () => {
	return (
		<HeaderStyled>
			<NavStyled>
				<span>
					<p>Logo</p>
				</span>
				<Spacer />
				<NavItems>
					<ul>
						<li>
							<NavText onClick={() => scrollTo('#work-dev')}>Portfolio</NavText>
						</li>
						<li>
							<NavText onClick={() => scrollTo('#contact')}>Contact</NavText>
						</li>
					</ul>
				</NavItems>
			</NavStyled>
		</HeaderStyled>
	);
};

export default Header;
