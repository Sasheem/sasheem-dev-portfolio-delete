import React from 'react';
import styled from 'styled-components';

const Bun = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 24px;
	width: 30px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	box-sizing: border-box;

	&:focus {
		outline: none;
	}
`;
const Patty = styled.div`
	width: 30px;
	height: 2px;
	background: rgba(20, 20, 20, 1);
`;

const Hamburger = () => {
	return (
		<Bun>
			<Patty />
			<Patty />
			<Patty />
		</Bun>
	);
};

export default Hamburger;
