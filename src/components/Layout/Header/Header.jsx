import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
	const path = useLocation().pathname;
	return (
		<div className="navbar bg-purple-700 p-5">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="#FFFFFF"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<li>
							<Link to={`/home`}>
								Home
							</Link>
						</li>
						<li>
							<Link to={`/exams`}>
								Exams
							</Link>
						</li>
						<li>
							<Link
								to={`/flashcards`}
							>
								Flashcards
							</Link>
						</li>
					</ul>
				</div>
				<Link
					to={`/home`}
					className="btn btn-ghost text-4xl tracking-widest text-white hover:bg-white hover:text-purple-700"
				>
					Inglish
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 gap-6">
					<li>
						<Link
							className="btn btn-ghost text-white hover:bg-white hover:text-purple-700 text-lg"
							to={`/home`}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="btn btn-ghost text-white hover:bg-white hover:text-purple-700 text-lg"
							to={`/exams`}
						>
							Exams
						</Link>
					</li>
					<li>
						<Link
							className="btn btn-ghost text-white hover:bg-white hover:text-purple-700 text-lg"
							to={`/flashcards`}
						>
							Flashcards
						</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn text-purple-700">Button</a>
			</div>
		</div>
	);
}
