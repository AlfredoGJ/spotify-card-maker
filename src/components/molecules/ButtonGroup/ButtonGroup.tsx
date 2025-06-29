import React, { HtmlHTMLAttributes, useState } from "react";
import { IButtonProps } from "../../atoms/Button/Button";
interface ButtonGroupProps extends HtmlHTMLAttributes<HTMLDivElement> {
  defaultSelectedName: string;
  onSelectionChange?: (button: string) => void;
  selectedName:string
}

export const ButtonGroup = ({
  children,
  defaultSelectedName,
  onSelectionChange,
}: ButtonGroupProps) => {
  const [selectedName, setSelectedName] = useState(defaultSelectedName);

  function handleButtonClick(name: string) {
    setSelectedName(name);
    onSelectionChange && onSelectionChange(name);
    console.log('click')
  }

 
  let numChildren = React.Children.count(children)
  let buttons = React.Children.map(children, (child, index) => {
    if (React.isValidElement<IButtonProps>(child)) {
      let childName = child.props.name!;
      console.log(child);
      return React.cloneElement(child, {
        size: "medium",
        shape: index ===0? 'roundedLeft': index === React.Children.count(children)-1? 'roundedRight': 'default',
        variant: childName === selectedName ? "primary" : "text",
        "aria-pressed": childName === selectedName ? true : false,
        name: childName,
        className: `${(index>0 && index<numChildren) && 'border-l-0'}`,
        onClick: () => handleButtonClick(childName),
      });
    }
  });


  return <ul>{buttons?.map((b) => b)}</ul>;
};
