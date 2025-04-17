import { Info as InfoIcon } from "lucide-react";

type Variant = "Info" | "Danger";
type VariantProps = Record<Variant, React.ReactElement>;

interface IInfoProps {
  text?: string;
  variant: Variant;
}

const variantIcons: VariantProps = {
  Info: <InfoIcon size={14} className="mr-1" />,
  Danger: <InfoIcon size={14} className="mr-1" />,
};

const Info = ({ text, variant }: IInfoProps) => {
  return (
    <div className="flex items-center text-sm text-slate-500 mb-4">
      {variantIcons[variant]}
      {text}
    </div>
  );
};

export default Info;
