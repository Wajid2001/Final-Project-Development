import React, { Suspense, lazy, Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import {
	AcademicCapIcon,
	ChartBarIcon,
	HomeIcon,
	MenuIcon,
	PhoneIcon,
	XIcon,
} from "@heroicons/react/outline";
import { BrandLogoImg } from "./BrandLogo";

const BrandLogo = lazy(() => import("./BrandLogo"));
const SignInButton = lazy(() => import("./SignInButton"));

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

export default function Header() {
	return (
		<Popover className='relative bg-white shadow-lg'>
			{({ open }) => (
				<>
					<div className='max-w-screen-2xl mx-auto px-2 sm:px-4 ring-1 ring-black ring-opacity-5'>
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
								<Suspense
									fallback={<div className='Loading'></div>}
								>
									<SignInButton />
								</Suspense>
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
