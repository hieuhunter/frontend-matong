import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Component/Home';
import Detail from './Component/Detail';
import Cart from './Component/Cart';
import Login from './Component/Register&&Login/Login';
import Product from './Component/Product/product';
import Register from './Component/Register&&Login/Register';
import Baiviet from './Component/Baiviet';
import SPnoibat from './Component/Baiviet/indexx';
import Product_th from './Component/Product/product_th';
import Tintuc from './Component/Tintuc';
import HTPhanphoi from './Component/HTPhanphoi';
import Contact from './Contact';
import Profile from './Component/Profile';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/Detail/:id' component={Detail} />
				<Route exact path='/Cart' component={Cart} />
				<Route exact path='/Login' component={Login} />
				<Route exact path='/Register' component={Register} />
				<Route exact path='/Product/:id' component={Product} />
				<Route exact path='/Product_th/:id' component={Product_th} />
				<Route exact path='/Baiviet' component={Baiviet} />
				<Route exact path='/SPnoibat' component={SPnoibat} />
				<Route exact path='/Tintuc' component={Tintuc} />
				<Route exact path='/HTPhanphoi' component={HTPhanphoi} />
				<Route exact path='/Contact' component={Contact} />
				<Route exact path='/Profile' component={Profile} />
			</Switch>
		</Router>
	);
};
export default Routes;
