import React from 'react'

export default function TutorialModal(props) {
  return (
		<dialog id={props.id} className="modal">
			<div className="modal-box">
				<h3 className="font-bold text-lg">
					Hướng dẫn sử dụng
				</h3>
				<p className="py-4">
					Trong đây, các bạn có thể tạo một
					flashcard mới, các từ sẽ được{" "}
					<span className="font-bold">AI </span>
					tạo ra từ topic mà bạn nhập vào.
					<br />
					<br />
					Chỉ cần bấm nút "+" và điền topic mà các
					bạn muốn{" "}
					<span className="font-bold">
						AI{" "}
					</span>{" "}
					tạo từ cho bạn.
				</p>
			</div>
			<form method="dialog" className="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
  );
}
