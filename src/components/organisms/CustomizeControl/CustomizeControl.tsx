import React from "react";
import { AppDispatch, RootState } from "../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type CustomizeControlProps<T extends React.ComponentType<any>> = {
  label: string;
  Component: T;
  action: (value: any) => any;
  selector: (state:RootState)=> void
  controlProps: {
    valueProp: string;
    onChangeProp: string;
  };
};

type CustomizeComponentWithourControlProps = Omit<
  React.ComponentProps<any>,
  keyof CustomizeControlProps<any>["controlProps"]
>;

type Final<T extends React.ComponentType<any>> = CustomizeControlProps<T> &
  CustomizeComponentWithourControlProps;
export const CustomizeControl = <T extends React.ComponentType<any>>({
  label,
  Component,
  selector,
  action,
  controlProps,
  ...restProps
}: Final<T>) => {
  const selectedValue = useSelector(selector);
  const dispatch = useDispatch<AppDispatch>();

  const dynamicProps = {
    ...restProps,
    [controlProps.valueProp]: selectedValue,
    [controlProps.onChangeProp]: (value:any)=> dispatch(action(value)),
  };

  return (
    <div className="">
      <h3 className="font-medium mb-2">{label}</h3>
      <Component
        {...(dynamicProps as any)}
      />
    </div>
  );
};

export default CustomizeControl;
