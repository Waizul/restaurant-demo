import React from 'react';
import fastdelivery from './../../../image/other/fastdelivery.png';
import autoresponder from './../../../image/other/autoresponder.png';
import homedelivery from './../../../image/other/homedelivery.png';

const Feature = () => {
	return (
		<div className='w3-padding-24'>
			<div className='w3-section w3-center'>
				<h2>Why you choose us</h2>
				<p>We have expertise over </p>
			</div>

			<div className='lunch-container  w3-padding-16'>
				<div
					style={{
						width: '100%',
					}}
					className='w3-card-3'
				>
					<img
						src={fastdelivery}
						width='100%'
						height='350px'
						alt=''
					/>
					<h3>Fast Delivery</h3>
					<p>hsdhfjasljfljasl;f;jkyhigtiu;gho</p>
					<button className='w3-btn w3-text-blue'>See more</button>
				</div>
				<div style={{ width: '100%' }} className='w3-card-3'>
					<img
						src={autoresponder}
						width='100%'
						height='350px'
						alt=''
					/>
					<h3>A Good Auto Responder</h3>
					<p>hsdhfjasljfljasl;f;jkyhigtiu;gho</p>
					<button className='w3-btn w3-text-blue'>See more</button>
				</div>
				<div style={{ width: '100%' }} className='w3-card-3'>
					<img
						src={homedelivery}
						width='100%'
						height='350px'
						alt=''
					/>
					<h3>Home Delivery</h3>
					<p>hsdhfjasljfljasl;f;jkyhigtiu;gho</p>
					<button className='w3-btn w3-text-blue'>See more</button>
				</div>
			</div>
		</div>
	);
};

export default Feature;
