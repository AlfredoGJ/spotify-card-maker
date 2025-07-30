import { AlbumIcon, DiscAlbum, FileMusic, GripHorizontal } from "lucide-react";
import { Container } from "../../atoms";
import GenerateCardWidget from "../../organisms/GenerateCardWidget";
import { Surface } from "../../atoms/Surface/Surface";

interface IPlaylistCreatorPageProps {
  // Define any props if needed
}

const PlaylistCreatorPage: React.FC<IPlaylistCreatorPageProps> = ({}) => {
  return (
    <Container className="grid gap-6 grid-cols-2">
      <GenerateCardWidget
        className="col-span-2 row-start-1 row-end-2 md:col-span-2"
        placeholder="Paste your Youtube video or playlist URL here"
        headerText="Generate your playlist"
        headerIcon={<FileMusic size={24} />}
      />
      <Surface
        shadow="md"
        className="col-span-2 row-start-2 row-end-3 md:col-span-2 p-4"
      >
        <div className="flex flex-col gap-2">
            <Surface padding="sm" opacity={50} blur="lg" className="grid grid-cols-[10fr_40fr_20fr_30fr] gap-4 items-center bg-slate-400">
                <DiscAlbum size={48} className="" />
                <div className="flex flex-col justify-self-start">
                    <span>Minerva</span>
                    <span>Deftones</span>
                </div>
                <div className="mr-3">
                    <span>4:00</span>
                </div>
                <GripHorizontal size={24} className="flex justify-self-end" />
            </Surface>
        </div>
      </Surface>
    </Container>
  );
};

export default PlaylistCreatorPage;
