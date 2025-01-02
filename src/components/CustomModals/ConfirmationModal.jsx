import React from "react";

export default function ConfirmationModal(props) {
	return (
		<dialog id={props.id} className="modal">
			<div className="modal-box">
				<h3 className="font-bold text-lg">Xác nhận</h3>
				<p className="py-4">
					{props.message
						? props.message
						: "Bạn có chắc chắn muốn xóa?"}
				</p>
				<div className="flex justify-between">
					<button
						onClick={props.onConfirm}
						className="btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2">
						Có
					</button>
					<button
						onClick={
							props.onDeny
								? props.onDeny
								: () =>
										document
											.getElementById(
												props.id
											)
											.close()
						}
						className="btn btn-ghost bg-purple-700 text-white hover:text-purple-700 hover:bg-white hover:border-purple-700 border-2">
						Không
					</button>
				</div>
			</div>
			<form method="dialog" className="modal-backdrop">
				<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
					✕
				</button>
			</form>
		</dialog>
	);
}
