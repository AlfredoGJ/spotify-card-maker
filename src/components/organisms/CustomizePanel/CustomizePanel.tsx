import React, { isValidElement } from "react";
import { Settings } from "lucide-react";
import { AppDispatch } from "../../../state/store";
import { useDispatch } from "react-redux";
import { Surface } from "../../atoms/Surface/Surface";

export const CustomizePanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Surface
      backgroundColor="tertiary"
      opacity={70}
      blur="sm"
      borderRadius="xl"
      padding="md"
      shadow="lg"
    >
      <div className="flex items-center gap-2 mb-4 z-20">
        <Settings size={24} />
        <h2 className="text-xl font-semibold">Customize</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">{children}</div>
      {/* </div> */}
    </Surface>
  );
};
