import { Download, Facebook, Twitter, Instagram, Share2 } from "lucide-react";
import { Button } from "../../atoms";
import { Surface } from "../../atoms/Surface/Surface";

interface IOutputWidgetProps {
  onDownloadClick: () => void;
}

const OutputWidget = ({ onDownloadClick }: IOutputWidgetProps) => {
  return (
    <Surface backgroundColor="tertiary" shadow="md">
      <div className="flex flex-col  gap-5 justify-between  lg:flex-row w-full ">
        <div className="flex items-center justify-center">
          <span className="text-md font-medium text-slate-500 mr-2">
            Share:
          </span>
          <div className="flex gap-4">
            <button className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
              <Facebook size={20} />
            </button>
            <button className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
              <Twitter size={20} />
            </button>
            <button className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
              <Instagram size={20} />
            </button>
            <button className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <Button
          onClick={onDownloadClick}
          className="flex  items-center justify-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
        >
          <Download size={20} />
          Download
        </Button>
      </div>
    </Surface>
  );
};
export default OutputWidget;
