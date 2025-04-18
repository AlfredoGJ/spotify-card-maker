import { Info as InfoIcon } from "lucide-react";

type Variant = "Info" | "Danger";
type VariantProps = Record<Variant, React.ReactElement>;

interface IInfoProps {
  text?: string;
  variant: Variant;
}

const variantIcons: VariantProps = {
  Info: <InfoIcon  size={38} className="mr-1 " />,
  Danger: <InfoIcon width={38} className="mr-1 " />,
};

const Info = ({ text, variant }: IInfoProps) => {
  return (
    <div className="flex items-center text-xs  text-slate-500 mb-4">
      {variantIcons[variant]}
      <div>{text}</div>
    </div>
  );
};

export default Info;
