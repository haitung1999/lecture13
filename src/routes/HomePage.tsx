import NavigateButton from "./NavigateButton";

import { useNavigate } from "react-router";

function NavigateButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/about")}
      className="relative px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-md 
      transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95"
    >
      <span className="absolute inset-0 bg-white opacity-10 rounded-xl"></span>
      🚀 Đi đến trang Giới thiệu
    </button>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🏠 Trang chủ</h1>
      <NavigateButton />
    </div>
  );
}
