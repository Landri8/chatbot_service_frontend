import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaRegMessage } from "react-icons/fa6";
import { logoutApi } from "../services/authService";
import ResponseModel from "../models/response.model";
import toast from "react-hot-toast";
import { httpResponseHandler } from "../utils/responseHandlerUtil";
import { MdDashboard } from "react-icons/md";

const AuthMiddleware = () => {
  const {authInfo, updateAuthInfo} = useAuthStore((state) => state);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
        const { data } : { data: ResponseModel } = await logoutApi({id: authInfo?.user.id || '', email: authInfo?.user.email || ''});

        const logoutResponseData = httpResponseHandler(data);
        updateAuthInfo(null);
        navigate("/admin/login");
    } catch (e) {
        toast.error("Error logging out");
    }
  }

  useEffect(() => {
    if (!authInfo || Object.keys(authInfo).length === 0) {
      navigate("/admin/login");
    }
  }, [authInfo, navigate]);

  if (!authInfo || Object.keys(authInfo).length === 0) {
    return null; // Prevents rendering before redirection
  }
  console.log(authInfo);

  return <div className="min-h-screen bg-gray-50">
    <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-[16%] bg-white flex flex-col">
            <div className="p-6">
                <h1 className="text-xs font-semibold text-zinc-400">{import.meta.env.VITE_APP_NAME}</h1>
            </div>

            <nav className="flex-1 px-4">
                <div className="space-y-1">
                <NavLink
                    to="dashboard"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                >
                    <MdDashboard className="w-5 h-5" />
                    Dashboard
                </NavLink>
                <NavLink
                    to="users"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                >
                    <LuUsers className="w-5 h-5" />
                    Manage users
                </NavLink>
                <NavLink
                    to="blogs"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                >
                    <IoBookOutline className="w-5 h-5" />
                    Blog
                </NavLink>
                <NavLink
                    to="messages"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                >
                    <FaRegMessage className="w-[18px] h-[18px]" />
                    Messages
                </NavLink>
                <NavLink
                    to="faqs"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                >
                    <RxQuestionMarkCircled className="w-5 h-5" />
                    FAQs
                </NavLink>
                </div>
            </nav>

            <div className="mt-auto">

                <div className="p-4 mt-2">
                    <div className="p-4 bg-zinc-100 rounded-md">
                        <div className="text-sm font-medium truncate">{authInfo.user.name}</div>
                        <div className="text-xs text-gray-500 truncate">{authInfo.user.email}</div>
                    </div>
                    <button onClick={handleLogout} className="py-2 cursor-pointer text-[12px] px-4 bg-red-200 text-red-400 font-medium rounded-md w-full mt-2">Logout</button>
                </div>
            </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto"><Outlet /></main>
    </div>
    </div>;
};

export default AuthMiddleware;
