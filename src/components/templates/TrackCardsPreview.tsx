import { Preview } from "../organisms";
import { BackCover } from "../organisms/BackCover/BackCover";
import { FrontCover } from "../organisms/FrontCover/FrontCover";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import CustomizeCard from "../organisms/CustomizeCard/CustomizeCard";

interface ITrackCardsPreview {}

const TrackCardsPreview = ({}: ITrackCardsPreview) => {
 console.log("Component Rendered: TrackCardsPreview")
  const background = useSelector((state:RootState)=> state.editor.background)
  const text = useSelector((state:RootState)=> state.editor.text)
  const scannableBackground = useSelector((state:RootState)=> state.editor.scannableBackground)
  const gradientAngle = useSelector((state:RootState)=> state.editor.gradientAngle)

  const track = useSelector((state:RootState)=> state.track.track)
  const coverData = useSelector((state:RootState)=> state.track.coverData)
  const scannableData = useSelector((state:RootState)=> state.track.scannableData)
  const coverPalette = useSelector((state:RootState)=> state.track.coverPallete)
 
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <Preview CustomizeComponent={
        <CustomizeCard/>
      }>
        <FrontCover
          gradientAngle={gradientAngle}
          coverData={coverData!}
          track={track!}
          firstBgColor={background[0]}
          secondBgColor={background[1]}
          textColor={text}
        />
      </Preview>
      <Preview CustomizeComponent={
        <CustomizeCard/>
      }>
        <BackCover
          coverData={coverData!}
          scannableData={scannableData!}
          scannableBackground={scannableBackground!}
          scannableText={coverPalette[1]!}
        />
      </Preview>
    </div>
  );
};

export default TrackCardsPreview;
