import { Download, Facebook, Twitter, Instagram, Share2 } from "lucide-react";
import { Button } from "../../atoms";
import { Surface } from "../../atoms/Surface/Surface";

interface IOutputWidgetProps {
  onDownloadClick: () => void;
}

const OutputWidget = ({ onDownloadClick }: IOutputWidgetProps) => {
  return (
    <Surface
      backgroundColor="tertiary"
      shadow="lg"
      opacity={60}
      blur="sm"
      borderRadius="xl"
    >
      <div className="flex flex-col  gap-5 justify-between   w-full ">
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

        <div className="flex gap-2 h-11 justify-start">
          <Button
            onClick={onDownloadClick}
            className="flex  items-center justify-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
          >
            <Download size={20} />
            Download
          </Button>

          <div className="flex">
            <a href="https://www.buymeacoffee.com/AlfredoGJ" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                className="h-11 hover:brightness-105"
              />
            </a>
          </div>
        </div>
      </div>
    </Surface>
  );
};
export default OutputWidget;
