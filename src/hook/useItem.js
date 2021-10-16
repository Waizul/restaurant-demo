import { useEffect, useState } from 'react';

const useItem = () => {
	const [items, setItems] = useState([]);
	console.log(items);
	useEffect(() => {
		fetch('./fooditems.json')
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);
	return [items];
};
export default useItem;
