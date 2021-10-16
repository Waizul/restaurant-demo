import React from 'react';
import './Header.css';
import NavbarTop from './NavbarTop/NavbarTop';
import banner from './../../image/bannerbackground.png';
import NavbarBottom from './NavbarBottom/NavbarBottom';
const Header = () => {
	return (
		<div>
			<NavbarTop></NavbarTop>
			<div style={{ maxWidth: '2000px' }} className='w3-content'>
				<div
					style={{ maxWidth: '2020px' }}
					className='w3-display-container w3-content'
				>
					<img
						className='w3-image'
						src={banner}
						alt=''
						width='100%'
					/>
					<div className='w3-display-middle w3-margin-top w3-center'>
						<div
							style={{ display: 'flex', width: '500px' }}
							className='w3-border-red w3-round-xxlarge'
						>
							<input
								width='300px'
								class='w3-input w-border-red w3-round-xxlarge'
								type='text'
								placeholder='Search food'
							/>
							<button
								id='search-button'
								className='w3-button w3-round-xxlarge w3-red w3-hover-purple'
							>
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
			<NavbarBottom></NavbarBottom>
		</div>
	);
};

export default Header;
