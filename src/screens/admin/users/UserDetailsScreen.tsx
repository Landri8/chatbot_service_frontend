import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserCreationFormComponent from "./components/UserCreationFormComponent";
import UserDetailsFormComponent from "./components/UserDetailsFormComponent";
import BreadcrumbModel from "../../../models/breadcrumb.model";
import AdminAppBar from "../../../components/AdminAppBar";

const UserDetailsScreen = () => {
  const uri = useParams();
  const isCreate = uri.id == "new";

  const userDetailsBreadcrumbs: BreadcrumbModel[] = [
    {
      title: "Dashboard",
      link: "/admin",
      disabled: false,
    },
    {
      title: "Users",
      link: "/admin/users",
      disabled: false,
    },
    {
      title: `${uri?.id}`,
      link: `/admin/users/${uri?.id}`,
      disabled: true,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="mx-6 mt-4">
      <AdminAppBar breadcrumbs={userDetailsBreadcrumbs} />
      <div className="p-8 bg-white rounded-[14px] mt-4">
        {isCreate ? (
          <UserCreationFormComponent />
        ) : (
          <UserDetailsFormComponent id={uri.id ? uri.id : ""} />
        )}
      </div>
    </main>
  );
};

export default UserDetailsScreen;
