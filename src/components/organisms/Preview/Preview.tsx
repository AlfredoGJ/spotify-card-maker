import { Eye } from "lucide-react";
import { HtmlHTMLAttributes } from "react";
import { Surface } from "../../atoms/Surface/Surface";

interface IPreviewProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
}

const Preview = ({ children, title }: IPreviewProps) => {
  return (
    <Surface>
      <div className="flex items-center gap-2 mb-4">
        <Eye size={24} />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </Surface>
  );
};

export default Preview;
