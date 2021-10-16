import './App.css';
import 'w3-css/w3.css';
import Header from './page/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home/Home';
import Footer from './page/Footer/Footer';
function App() {
	return (
		<div className='app'>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route path='/home'>
						<Home></Home>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
