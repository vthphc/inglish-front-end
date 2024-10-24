import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="block mx-80 mt-64">
            <div className="grid grid-cols-2 gap-20">
                <div className="bg-gray-200"></div>
                <div className="flex flex-col items-center gap-8">
                    <p className="text-3xl font-semibold text-center">
                        Học ngôn ngữ miễn phí, chủ động và hiệu quả
                    </p>{" "}
                    <div className="flex flex-col gap-4">
                        <Link to="/signup">
                            <Button className="min-w-80 text-xl rounded-2xl bg-purple-700 shadow-md shadow-gray-400 border-solid ">
                                BẮT ĐẦU
                            </Button>
                        </Link>
                        <Link to="/signin">
                            <Button className="min-w-80 text-xl rounded-2xl bg-white text-blue-700 shadow-md shadow-gray-400 border-solid border-2 border-gray-100">
                                TÔI ĐÃ CÓ TÀI KHOẢN
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-20 my-36">
                <div className="bg-gray-200"></div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl font-bold text-purple-700">
                        miễn phí. chủ động. hiệu quả
                    </h2>
                    <p className="tracking-wide">
                        Học cùng <span className="text-blue-700">Inglish</span>{" "}
                        rất vui nhộn! Qua từng bài học ngắn, nhỏ gọn bạn vừa ghi
                        điểm, mở khóa cấp độ mới vừa được luyện tập các kỹ năng
                        giao tiếp hữu dụng.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-20 my-36">
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl font-bold text-purple-700">
                        tích hợp cùng với AI
                    </h2>
                    <p className="tracking-wide">
                        <span className="text-blue-700">Inglish</span> tích hợp
                        <span className="text-blue-700 "> AI</span> để giúp bạn
                        học một cách thông minh hơn. Công nghệ AI có thể tùy
                        chỉnh bài học theo nhu cầu cá nhân, đưa ra gợi ý và phản
                        hồi tức thì, giúp bạn cải thiện kỹ năng nhanh chóng và
                        hiệu quả.
                    </p>
                </div>
                <div className="bg-gray-200"></div>
            </div>
            <div className="flex flex-col items-center gap-8 my-36">
                <h1 className="text-6xl text-purple-700 font-bold w-[500px] text-center">
                    học ngoại ngữ cùng inglish!
                </h1>
                <Link to="/signup">
                    <Button className="min-w-80 text-xl rounded-2xl bg-purple-700 shadow-md shadow-gray-400 border-solid ">
                        BẮT ĐẦU
                    </Button>
                </Link>
            </div>
        </div>
    );
}