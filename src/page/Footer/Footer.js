import React from 'react';
import logo2 from './../../image/logo2.png';
const Footer = () => {
	return (
		<div className='w3-container w3-padding-16 w3-black'>
			<div className='w3-left'>
				<img src={logo2} alt='' />
				<p style={{ marginTop: '100px' }} className='w3-text-gray'>
					copyright
				</p>
			</div>
			<div className='w3-right'>
				<div style={{ marginRight: '80px' }} className='w3-right'>
					<p>get help</p>
					<p>read FAQs </p>
					<p>view all branches</p>
				</div>
				<div style={{ marginRight: '100px' }} className='w3-right'>
					<p>about online food</p>
					<p>read our blog</p>
					<p>sign up to get delivered</p>
				</div>

				<div className=''>
					<p style={{ marginRight: '100px' }} className='w3-right'>
						privacy policy
					</p>
					<p style={{ marginRight: '100px' }} className='w3-right'>
						term of use
					</p>
					<p style={{ marginRight: '100px' }} className='w3-right'>
						pricing
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
