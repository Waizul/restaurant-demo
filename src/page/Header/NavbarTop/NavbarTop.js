import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './../../../image/logo2.png';
const NavbarTop = () => {
	return (
		<div className='w3-top w3-bar w3-white w3-wide w3-padding w3-card'>
			<NavLink to='/home' className='w3-bar-item w3-button'>
				<img src={logo} style={{ width: '100px' }} alt='' />
			</NavLink>

			<div className='w3-right w3-hide-small'>
				<NavLink to='/cart' className='w3-bar-item w3-button'>
					cart
				</NavLink>
				<NavLink to='/Login' className='w3-bar-item w3-button'>
					Login
				</NavLink>
				<NavLink
					to='signup'
					className='w3-bar-item w3-button w3-red w3-round-xxlarge w3-hover-purple'
				>
					Sign Up
				</NavLink>
			</div>
		</div>
	);
};

export default NavbarTop;
