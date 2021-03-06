import React, { useEffect, useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";

require("../static/layout.scss");

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function SignInButton() {
	// This will check for user authentication data
	const [data, setData] = useState(undefined);

	// This will check for user authentication
	const [number, setNumber] = useState(1);
	useEffect(() => {
		fetch("./api/account/check_status")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.authenticated) {
					setNumber(0);
					setData(data);
				} else {
					setNumber(1);
					setData(undefined);
				}
			});
	}, []);
	const profile = [
		{ title: "Your Profile", link: "" },
		{ title: "Settings", link: "" },
		{ title: "Sign out", link: "./signout" },
	];
	const buttonTypes = [
		<>
			<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
				{/* Profile dropdown */}
				<Menu as='div' className='ml-3 relative'>
					{({ open }) => (
						<>
							<div>
								<Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white'>
									<span className='sr-only'>
										Open user menu
									</span>
									<img
										className='h-8 w-8 rounded-full'
										src={
											data != undefined
												? data.userImage
												: ""
										}
										alt=''
									/>
								</Menu.Button>
							</div>
							<Transition
								show={open}
								as={Fragment}
								enter='transition ease-out duration-100'
								enterFrom='transform opacity-0 scale-95'
								enterTo='transform opacity-100 scale-100'
								leave='transition ease-in duration-75'
								leaveFrom='transform opacity-100 scale-100'
								leaveTo='transform opacity-0 scale-95'
							>
								<Menu.Items
									static
									className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
								>
									{profile.map((item) => (
										<Menu.Item key={item.title}>
											{({ active }) => (
												<a
													href={item.link}
													className={classNames(
														active
															? "bg-gray-100"
															: "",
														"block px-4 py-2 text-sm text-gray-700",
													)}
												>
													{item.title}
												</a>
											)}
										</Menu.Item>
									))}
								</Menu.Items>
							</Transition>
						</>
					)}
				</Menu>
			</div>

			{/* This will show up when device is sm size */}
			<div className='block md:hidden mx-5 pt-4 pb-3 border-t border-gray-700'>
				<div className='flex items-center '>
					<div className='flex-shrink-0'>
						<img
							className='h-10 w-10 rounded-full'
							src={data != undefined ? data.userImage : ""}
							alt=''
						/>
					</div>
					<div className='ml-3'>
						<div className='text-base font-medium leading-none'>
							{data != undefined ? data.username : ""}
						</div>
						<div className='text-sm font-medium leading-none text-gray-400'>
							{data != undefined ? data.email : ""}
						</div>
					</div>
					<button className='ml-auto focus:outline-none flex-shrink-0 p-1 rounded-full text-blue-600 bg-white hover:bg-gray-200 '>
						<span className='sr-only'>View notifications</span>
						<BellIcon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<div className='mt-3  space-y-1 '>
					{profile.map(({ title, link }) => (
						<a
							key={title}
							href={link}
							className='-mx-3 px-3 py-2 block rounded-md text-base font-medium hover:bg-gray-200'
						>
							{title}
						</a>
					))}
				</div>
			</div>
		</>,
		<>
			<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
				<a
					href='./signin'
					className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700'
				>
					Sign in
				</a>
			</div>
			<div className='flex md:hidden mx-5 pb-6'>
				<a
					href='./signin'
					className=' w-full text-center justify-center px-5 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700'
				>
					Sign in
				</a>
			</div>
		</>,
	];

	return buttonTypes[number];
}
