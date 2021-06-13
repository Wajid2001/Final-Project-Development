import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";

const Header = lazy(() => import("./Components/Header"));

require("./static/layout.scss");

const App = () => {
	const [username, setName] = useState("You Need to Sign in");

	useEffect(() => {
		fetch("./api/account/check_status")
			.then((d) => d.json())
			.then((data) => {
				console.log(data);
				if (data.authenticated) {
					setName(data.username);
				}
			});
	}, []);
	return (
		<div>
			<h1 className='font-bold text-7xl text-center '>Hi, {username}</h1>
			<br />
			<br />
			<br />
			<BrowserRouter>
				<NavLink to='/header'>Header</NavLink>
				<Suspense fallback={<div className='loading'></div>}>
					<Header />
					<Switch>
						<Route exact path='/header' component={Header} />
					</Switch>
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
