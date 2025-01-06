import React from "react";
import { useResize } from "../../utils/hooks/useResize";

interface ISongPlaybackProps {
  duration_ms: number;
}

export const SongPlayback = ({ duration_ms }: ISongPlaybackProps) => {
 
    const {height, width} = useResize()
 
    return (
    <div className="flex flex-col">
      <div className="w-full relative rounded-md" style={{
        height:`${height*0.013}px`
      }}>
        <div className="absolute w-full h-full rounded-md" style={{background:'rgba(170,170,170,0.6)'}}></div>
        <div className="absolute w-8 h-full bg-white rounded-md"></div>
      </div>
      <div className="flex justify-between" style={{fontSize:`${width*0.04}px`}}>
        <div className="">1:55</div>
        <div className="">{`${Math.floor(
          (duration_ms! / 60) * 0.001
        )}:${Math.ceil((duration_ms! / 1000) % 60)} `}</div>
      </div>
    </div>
  );
};
