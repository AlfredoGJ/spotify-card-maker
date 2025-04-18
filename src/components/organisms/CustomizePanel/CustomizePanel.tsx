import React, { isValidElement } from "react";
import { Settings } from "lucide-react";
import { AppDispatch } from "../../../state/store";
import { useDispatch } from "react-redux";

export const CustomizePanel = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  


  return (
    <div className="bg-slate-200 bg-opacity-70 backdrop-blur-md  rounded-xl mt-4 p-4">
      <div className="flex items-center gap-2 mb-4 z-20">
        <Settings size={24} />
        <h2 className="text-xl font-semibold">Customize</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">{children}</div>
    </div>
  );
};