import React from "react";

require("../static/layout.scss");

export const BrandLogoImg = (props) => {
	return (
		<>
			<img
				className={`mx-auto w-auto ${
					props.className ? props.className : "h-32"
				}`}
				src='./static/frontend/svg/logo.svg'
				alt='JUHS Logo'
			/>
		</>
	);
};

const BrandLogo = (props) => {
	return (
		<a
			href='./'
			className={`flex px-2 pt-1 pb-2 w-max defaultHover ${
				props.className ? props.className : ""
			}`}
			title='Goto JUHS Home Page'
		>
			<img
				className='h-16'
				src='./static/frontend/svg/logo.svg'
				alt='JUHS Logo'
			/>
			<div className='my-auto pr-1 hidden lg:block hover:block'>
				<div className='mx-1 my-auto font-serif'>
					<p className='my-1'>Jawahar Urdu High School &</p>
					<p className='my-1'>Junior College, Motala</p>
				</div>
			</div>
		</a>
	);
};

export default BrandLogo;
