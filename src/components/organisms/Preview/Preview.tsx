import {
  Eye
} from "lucide-react";
import { Track } from "../../../types/types";
import { HtmlHTMLAttributes, useRef } from "react";

import OutputWidget from "../OutputWidget/OutputWidget";
import downloadImage from "../../../utils/DownloadImage";
import { useSelector } from "react-redux";
import { SelectTrack } from "../../../state/track/selectors";

interface IPreviewProps extends HtmlHTMLAttributes<HTMLDivElement> {
  CustomizeComponent: React.ReactNode;
}

const Preview = ({ children, CustomizeComponent }: IPreviewProps) => {

  const nodeRef = useRef(null)

   const track =  useSelector(SelectTrack)
  function handleDownloadClick (){
    const parentNode = nodeRef.current! as HTMLDivElement
    const nodeList = parentNode.getElementsByClassName('downloadable')
    let actualElement = null
    
    // Convert HTMLCollection to Array to make it iterable
    Array.from(nodeList).forEach(node => {
      actualElement = node
    })
    
    // Or simply get the first element if that's what we need
    if (nodeList.length > 0) {
      actualElement = nodeList[0]
    }

    downloadImage(actualElement as HTMLElement, `${track?.name}-${track?.artists[0].name}`)
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Eye size={24} />
        <h2 className="text-xl font-semibold">Preview</h2>
      </div>

      <div ref={nodeRef} className="relative rounded-lg overflow-hidden mb-4">
        {children}
      </div>

      {CustomizeComponent}
      <div className="my-4">
        <OutputWidget onDownloadClick={handleDownloadClick}/>
      </div>
    </div>
  );
};

export default Preview;
