interface ICustomizeControlProps {
  label: string;
}

type CustomizeControl<T> = (props: ICustomizeControlProps) => React.ReactNode;

const CustomizeControl = () => {};

export default CustomizeControl;
