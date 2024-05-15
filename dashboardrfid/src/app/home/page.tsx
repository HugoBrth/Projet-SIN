import TopNavbar from "@/ui/components/TopNavbar";
import Sidebar from "@/ui/components/navigations/Sidebar";
import { Typographie } from "@/ui/design-system/typographie/Typogarphie";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-primary-400 ">
      <Sidebar />
      <TopNavbar />
    </div>
  );
};

export default page;
