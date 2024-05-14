import { Typographie } from "@/ui/design-system/typographie/Typogarphie";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-primary-400 p-5 ">
      <Typographie variant="display" theme="ongoing" className="text-center">Chart Page</Typographie>
    </div>
  );
};

export default page;
