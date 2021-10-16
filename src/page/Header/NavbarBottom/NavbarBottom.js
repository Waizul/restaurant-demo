import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarBottom = () => {
	return (
		<div className='w3-center w3-padding-64 w3-hide-small'>
			<NavLink
				to='/cart'
				className='w3-bar-item w3-button w3-round-xxlarge w3-hover-purple'
			>
				<b>Breakfast</b>
			</NavLink>
			<NavLink
				to='/Login'
				className='w3-bar-item w3-button w3-round-xxlarge w3-hover-purple'
			>
				<b>Lunch</b>
			</NavLink>
			<NavLink
				to='signup'
				className='w3-bar-item w3-button w3-round-xxlarge  w3-hover-purple'
			>
				<b>Dinner</b>
			</NavLink>
		</div>
	);
};

export default NavbarBottom;
