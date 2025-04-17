import {
  Eye,
  Download,
  Facebook,
  Twitter,
  Instagram,
  Share2,
} from "lucide-react";
import { Track } from "../../../types/types";
import { HtmlHTMLAttributes } from "react";
import { Button } from "../../atoms";

interface IPreviewProps extends HtmlHTMLAttributes<HTMLDivElement> {
  CustomizeComponent: React.ReactNode
}

const Preview = ({ children, CustomizeComponent }: IPreviewProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Eye size={24} />
        <h2 className="text-xl font-semibold">Preview</h2>
      </div>

      <div className="  bg-slate-800 rounded-lg overflow-hidden mb-4">
        {children}
      </div>

      <div className="flex gap-4 mb-4 justify-center">
        <Button className="flex items-center justify-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
          <Download size={20} />
          Download
        </Button>
       
      </div>

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
      {CustomizeComponent}
    </div>
  );
};

export default Preview;
