import React, { useEffect } from "react";
import BreadcrumbModel from "../../../models/breadcrumb.model";
import { useParams } from "react-router-dom";
import AdminAppBar from "../../../components/AdminAppBar";
import MessageDetailsFormComponent from "./components/MessageDetailsFormComponent";

const MessageDetailsScreen = () => {
  const uri = useParams();
  const messageDetailsBreadcrumbs: BreadcrumbModel[] = [
    {
      title: "Dashboard",
      link: "/admin",
      disabled: false,
    },
    {
      title: "Messages",
      link: "/admin/messages",
      disabled: false,
    },
    {
      title: `${uri?.id}`,
      link: `/admin/messages/${uri?.id}`,
      disabled: true,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="mx-6 mt-4">
      <AdminAppBar breadcrumbs={messageDetailsBreadcrumbs} />
      <div className="p-8 bg-white rounded-[14px] mt-4">
        <MessageDetailsFormComponent id={uri.id ? uri.id : ""} />
      </div>
    </main>
  );
};

export default MessageDetailsScreen;
