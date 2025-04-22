import { Info as InfoIcon } from "lucide-react";

type Variant = "Info" | "Danger";
type VariantProps = Record<Variant, React.ReactElement>;

interface IInfoProps {
  text?: string;
  variant: Variant;
}

const variantIcons: VariantProps = {
  Info: <InfoIcon size={40}  className="mr-1 w-10 md:w-6" />,
  Danger: <InfoIcon width={40} className="mr-1 w-10 md:w-6" />,
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
