import React, { Suspense, lazy, Fragment, useEffect, useState } from "react";

const BrandLogo = lazy(() => import("./BrandLogo"));

import { Menu, Popover, Transition } from "@headlessui/react";
import {
	AcademicCapIcon,
	BellIcon,
	ChartBarIcon,
	HomeIcon,
	MenuIcon,
	PhoneIcon,
	XIcon,
} from "@heroicons/react/outline";
import { BrandLogoImg } from "./BrandLogo";

const pages = [
	{
		name: "Home",
		description: "JUHS Shaping the future of India",
		href: "./home",
		icon: HomeIcon,
	},
	{
		name: "Dashboard",
		description: "Manage your School stuff here",
		href: "./dashboard",
		icon: ChartBarIcon,
	},
	{
		name: "Admissions",
		description: "Make your child a part of this amazing initiative.",
		href: "./admissions",
		icon: AcademicCapIcon,
	},
	{
		name: "Contact us",
		description: "Know more about JUHS here",
		href: "./contactus",
		icon: PhoneIcon,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
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

	const SignInButton = ({ open }) => {
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
	};

	return (
		<Popover className='relative bg-white shadow-lg'>
			{({ open }) => (
				<>
					<div className='max-w-screen-2xl mx-auto px-2 sm:px-4'>
						<div className='flex justify-between items-center md:justify-start md:space-x-10'>
							<Suspense
								fallback={<div className='Loading'></div>}
							>
								<BrandLogo />
							</Suspense>

							<div className='hidden h-20 -my-2 md:flex md:space-x-10'>
								{pages.map((page, index) => {
									let classes =
										"mb-0.5 px-2 flex text-base font-medium text-gray-500 hover:text-blue-500 border-b-2 border-transparent focus:border-blue-500";
									if (
										window.location.href.includes(
											page.href.replace("./", ""),
										)
									) {
										classes += " border-blue-500 ";
									}
									return (
										<>
											<a
												key={index}
												className={classes}
												href={page.href}
											>
												<p className='my-auto'>
													{page.name}
												</p>
											</a>
										</>
									);
								})}
							</div>

							<div className='hidden md:contents'>
								<SignInButton open={open} />
							</div>

							{/* This will appear when the device is small */}
							<div className='mr-2 -my-2 md:hidden'>
								<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
									<span className='sr-only'>Open menu</span>
									<MenuIcon
										className='h-6 w-6'
										aria-hidden='true'
									/>
								</Popover.Button>
							</div>
							<Transition
								show={open}
								as={Fragment}
								enter='duration-200 ease-out'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='duration-100 ease-in'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Popover.Panel
									focus
									static
									className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
								>
									<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
										<div className='pt-5 pb-6 px-5'>
											<div className='-mt-2 flex items-center justify-between'>
												<div>
													<BrandLogoImg className='h-16' />
												</div>
												<div className='-mr-2'>
													<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
														<span className='sr-only'>
															Close menu
														</span>
														<XIcon
															className='h-6 w-6'
															aria-hidden='true'
														/>
													</Popover.Button>
												</div>
											</div>
											<div className='mt-6'>
												<nav className='grid gap-y-8'>
													{pages.map((item) => (
														<a
															key={item.name}
															href={item.href}
															className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-200'
														>
															<item.icon
																className='flex-shrink-0 h-6 w-6 text-blue-600'
																aria-hidden='true'
															/>
															<span className='ml-3 text-base font-medium text-gray-900'>
																{item.name}
															</span>
														</a>
													))}
												</nav>
											</div>
										</div>
										<SignInButton />
									</div>
								</Popover.Panel>
							</Transition>
						</div>
					</div>
				</>
			)}
		</Popover>
	);
}
