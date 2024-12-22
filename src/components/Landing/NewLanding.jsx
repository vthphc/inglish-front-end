import React from "react";
import { motion } from "motion/react";
import { fadeInPropsFn, zoomInPropsFn } from "../../utils/animation";
import CircleIcon from "../../assets/icons/CircleIcon";
import { Link } from "react-router-dom";

export default function NewLanding() {
	const introArray = [
		{
			className: "text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-center ",
			text: "Học tiếng Anh, mở ra cơ hội.",
		},
		{
			className: "text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-center ",
			text: "Con đường đến kết nối trôi chảy.",
		},
	];

	const featureClassName =
		"text-sm sm:text-base text-purple-700 font-mono font-semibold text-center flex items-center gap-2 mx-2 sm:mx-4 md:mx-6 lg:mx-8";

	const featureArray = [
		{
			className: featureClassName,
			text: "Miễn phí",
		},
		{
			className: featureClassName,
			text: "Chủ động",
		},
		{
			className: featureClassName,
			text: "Hiệu quả",
		},
		{
			className: featureClassName,
			text: "Artificial Intelligence",
		},
	];

	return (
		<div className="m-auto flex flex-col items-center">
			<motion.p
				{...fadeInPropsFn()}
				className="font-mono font-bold text-center text-xl">
				Welcome to{" "}
				<span className="text-purple-700">
					Inglish.
				</span>
			</motion.p>
			<p className="m-auto flex flex-col gap-4 mt-4">
				{introArray.map((intro, index) => (
					<motion.span
						key={index}
						className={`${intro.className}`}
						{...fadeInPropsFn(index)}>
						{intro.text}
					</motion.span>
				))}
			</p>
			<p className="flex flex-row items-center mt-8">
				{featureArray.map((feature, index) => (
					<motion.div
						key={index}
						className={`${feature.className}`}
						{...zoomInPropsFn(index)}>
						<CircleIcon
							height="1.5em"
							width="1.5em"
						/>
						{feature.text}
					</motion.div>
				))}
			</p>
			<div className="flex flex-col">
				<motion.button
					className="btn btn-ghost bg-purple-700 text-white hover:bg-white hover:text-purple-700 border-2 hover:border-purple-700 rounded-2xl mt-8"
					{...fadeInPropsFn(4)}>
					<Link to={"/signup"}>Bắt đầu</Link>
				</motion.button>
				<motion.div {...fadeInPropsFn(5)}>
					<motion.div
						className="relative inline-block"
						whileHover="hovered"
						initial="rest"
						animate="rest">
						<p className="text-md font-medium mt-4 font-roboto text-gray-500 tracking-tighter cursor-pointer">
							<Link to={"/signin"}>
								Đã có tài khoản?
							</Link>
						</p>
						<motion.div //Underline animation
							className="absolute bottom-0 left-0 h-[2px] bg-gray-500"
							variants={{
								rest: {
									width: 0,
								},
								hovered: {
									width: "100%",
								},
							}}
							transition={{
								duration: 0.3,
							}}
						/>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
