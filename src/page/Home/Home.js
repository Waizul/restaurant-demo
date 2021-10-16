import React from 'react';
import './Home.css';
import useItem from '../../hook/useItem';
import Lunch from './Lunch/Lunch';
import Feature from './Feature/Feature';

const Home = () => {
	const [items] = useItem();
	return (
		<div>
			<div className=' w3-center'>
				<div className='lunch-container w3-center'>
					{items.slice(0, 6).map((item) => (
						<Lunch item={item} key={item.id}></Lunch>
					))}
				</div>

				<button className='w3-button w3-gray w3-round'>
					Checkout food
				</button>
			</div>

			<div>
				<Feature></Feature>
			</div>
		</div>
	);
};

export default Home;
