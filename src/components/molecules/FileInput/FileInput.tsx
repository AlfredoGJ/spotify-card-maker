import { Image } from "lucide-react";

const FileInput = () => {
  return (
    <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center mb-4">
      <Image size={24} className="mx-auto mb-2 text-slate-400" />
      <p className="text-slate-600">
        Drag and drop your own album art or{" "}
        <span className="text-emerald-500 font-medium cursor-pointer">
          browse files
        </span>
      </p>
    </div>
  );
};

export default FileInput;
