import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import IconProfile from "../../../assets/icons/IconProfile";

export default function Header() {
	const { auth, setAuth } = useContext(AuthContext);
	const path = useLocation().pathname;
	// console.log("Check auth: ", auth);
	return (
		<div className="navbar py-4 px-12 border-b-2 ">
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
							stroke="#7e22ce"
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
						className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-purple-700 border-2 border-gray-300 font-semibold"
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
					className="btn btn-active text-2xl tracking-[.1em] sm:text-5xl sm:tracking-[.25em] text-purple-700 bg-transparent border-0 hover:bg-transparent shadow-none"
				>
					inglish
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 gap-6">
					<li>
						<Link
							className="btn btn-ghost text-purple-700 hover:bg-purple-700 hover:text-white text-lg"
							to={`/home`}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="btn btn-ghost text-purple-700 hover:bg-purple-700 hover:text-white text-lg"
							to={`/exams`}
						>
							Exams
						</Link>
					</li>
					<li>
						<Link
							className="btn btn-ghost text-purple-700 hover:bg-purple-700 hover:text-white text-lg"
							to={`/flashcards`}
						>
							Flashcards
						</Link>
					</li>
					<li>
						<Link
							className="btn btn-ghost text-purple-700 hover:bg-purple-700 hover:text-white text-lg"
							to={`/phrases`}
						>
							Phrases
						</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar placeholder border-gray-300 border-2 transition-all"
					>
						<div className="w-10 rounded-full bg-white">
							{auth.isAuthenticated ? (
								<span className="text-purple-700">{`${Array.from(
									auth
										?.user
										?.username
								)[0].toUpperCase()}`}</span>
							) : (
								<span className="loading loading-spinner loading-md"></span>
							)}
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-purple-700 border-2 border-gray-300 font-semibold"
					>
						<li>
							<Link
								to={`/profile`}
								className="btn btn-ghost p-0 text-purple-700 hover:bg-purple-700 hover:text-white text-lg"
							>
								Profile
							</Link>
						</li>
						<li>
							<Link className="btn btn-ghost p-0 text-purple-700 hover:bg-purple-700 hover:text-white text-lg">
								Settings
							</Link>
						</li>
						<li>
							<Link className="btn btn-ghost p-0 text-purple-700 hover:bg-purple-700 hover:text-white text-lg">
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
