import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

require("./static/layout.scss");

const Header = lazy(() => import("./Components/Header"));

const Dashboard = () => {
	return (
		<div className='flex flex-col min-h-full'>
			<Suspense fallback={<div className='Loading'></div>}>
				<Header />
			</Suspense>
		</div>
	);
};

ReactDOM.render(<Dashboard />, document.getElementById("root"));
