import React from 'react';

const Lunch = (props) => {
	const name = props?.item?.name;
	const description = props?.item?.description;
	const price = props?.item?.price;
	const img = props?.item?.img;
	return (
		<div>
			<div style={{ width: '85%' }} className='w3-card-3 w3-padding-24'>
				<img width='100%' src={img} alt='' />
				<h2>{name}</h2>
				<p className='w3-text-gray'>{description}</p>
				<h4>
					<span className=' w3-text-red'>
						<b>${price}</b>
					</span>
				</h4>
			</div>
		</div>
	);
};

export default Lunch;
