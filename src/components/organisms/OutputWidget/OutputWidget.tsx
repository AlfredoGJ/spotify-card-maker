import { Download, Facebook, Twitter, Instagram, Share2 } from "lucide-react";
import { Button } from "../../atoms";

interface IOutputWidgetProps {
  onDownloadClick: () => void;
}

const OutputWidget = ({onDownloadClick}:IOutputWidgetProps) => {
  return (
    <div className="flex gap-4 justify-between md:flex-col lg:flex-row">
      <div className="flex items-center">
        <span className="text-sm text-slate-500 mr-2">Share:</span>
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
            <Facebook size={16} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
            <Twitter size={16} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
            <Instagram size={16} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-800 hover:text-white transition-colors">
            <Share2 size={16} />
          </button>
        </div>
      </div>

      <Button onClick={onDownloadClick} className="flex items-center justify-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
        <Download size={20} />
        Download
      </Button>
    </div>
  );
};
export default OutputWidget;
