import { Eye } from "lucide-react";
import { HtmlHTMLAttributes } from "react";
import { Surface } from "../../atoms/Surface/Surface";

interface IPreviewProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
}

const Preview = ({ children, title }: IPreviewProps) => {
  return (
    <Surface
      shadow="md"
      padding="md"
      borderRadius="xl"
      backgroundColor="primary"
      opacity={40}
      blur="md"
    >
      {/* The preview base container */}
      <div className="flex flex-col justify-between h-full">
        {/* The part of the preview that is equel for all the previews with the title and icon */}
        <div className="flex items-center gap-2 mb-4">
          <Eye size={24} />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        {/* The preview that holds the content, this may vary  */}
        <div className="flex h-full">{children}</div>
      </div>
    </Surface>
  );
};

export default Preview;
