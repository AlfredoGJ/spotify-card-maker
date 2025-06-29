import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../atoms/Button/Button";
import { Surface } from "../atoms/Surface/Surface";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../state/track/trackSlice";
import { initialTrackIds } from "../../data/initialIds";
import NowPlayingSample from "../../assets/img/examples/nowplaying-sample.png";
import NowPlayingSample2 from "../../assets/img/examples/nowplaying-sample-2.png";
import AlbumPosterSample from "../../assets/img/examples/poster-sample.png";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleButtonClick() {
    dispatch(setIsLoading());
    navigate(
      `/track/${
        initialTrackIds[Math.floor(Math.random() * initialTrackIds.length)]
      }`
    );
  }

  const Hero = () => {
    return (
      <section className="flex flex-col items-center text-center mb-12 px-4">
        <h1 className="text-4xl font-bold mb-4 mt-8 max-w-3xl capitalize">
          Transform your favorite music into customizable graphics
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mb-8 font-light">
          SpotiTools allows you to create beatiful graphics from your favorite
          songs, customize colors, design and share with friends in seconds.
        </p>

        <div className="relative flex justify-center my-1">
          <div className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-[372px] rounded-xl shadow-xl overflow-hidden -rotate-6 mr-2 z-10">
            <img
              fetchPriority="high"
              src={NowPlayingSample}
              alt="Sample frontal card with attributes of the song"
              className="w-full"
            />
          </div>
          <div className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-[372px]  rounded-xl shadow-xl overflow-hidden rotate-6">
            <img
              fetchPriority="high"
              src={NowPlayingSample2}
              alt="Sample back card with scannable code"
              className="w-full"
            />
          </div>
        </div>

        {/* <Button onClick={handleButtonClick} size="large">
          <p className="font-semibold">Begin To Create</p>
        </Button> */}
      </section>
    );
  };

  const FeatureCard = ({ icon, title, description }: any) => {
    return (
      <Surface
        borderRadius="lg"
        shadow="md"
        backgroundColor="tertiary"
        opacity={60}
        blur="sm"
      >
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl text-emerald-500 mb-4">{icon}</div>
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </Surface>
    );
  };

  const ToolLinkCard = ({
    toolName,
    toolDescription,
    toolLink,
    toolImg,
  }: any) => {
    return (
      <Surface
        style={{
          backgroundImage: `url(${toolImg})`,
          backgroundSize: "100%",
          backgroundPositionY: "75%",
        }}
        padding="none"
        className="border border-emerald-500 relative"
      >
        <div className=" text-secondary-200 flex gap-2 relative rounded-md px-4 py-4 backdrop-blur-sm bg-black/60 font-light h-full">
          <div className="flex-col gap-2 w-4/5">
            <h3 className="text-lg font-semibold">{toolName}</h3>
            <p style={{ lineHeight: 1.3 }}>{toolDescription}</p>
          </div>
          <div className="flex w-1/5 items-center">
            <img src={toolImg} alt={toolName} className="" />
          </div>
        </div>
      </Surface>
    );
  };

  const Features = () => {
    return (
      <section className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2  gap-8 mb-16 px-6 sm:px-8 md:px-10">
        <FeatureCard
          icon="🎵"
          title="Connected with Spotify"
          description="Simply paste the Spotify link and automatically we extract the info of the song, album or playlist."
        />
        <FeatureCard
          icon="🎨"
          title="Quick Customization"
          description="Adjust just a few parameters and instantly you will have something that reflects the style of the song you like."
        />
        <FeatureCard
          icon="👁️"
          title="Scannable Codes"
          description="With the Spotify scannable codes you can share the music you love with anyone in an easy way."
        />
        <FeatureCard
          icon="🔄"
          title="Many Designs to Choose"
          description="Choose the design that most suit your needs among all the designs we have. "
        />
      </section>
    );
  };

  const ToolList = () => {
    return (
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-6 sm:px-8 md:px-10">
        <ToolLinkCard
          toolName="Now Playing Card"
          toolDescription="Create customizable Now Playing cards using your favorite song's album colors and Spotify scannable codes."
          toolLink="/spotimage"
          toolImg={NowPlayingSample}
        />
        <ToolLinkCard
          toolName="Album Poster"
          toolDescription="Create stunning posters for the iconic albums you love, customize with album's colors an Spotify scannable code."
          toolLink="/spotixer"
          toolImg={AlbumPosterSample}
        />
      
      </section>
    );
  };

  // Footer Component

  return (
    <div className="">
      <Hero />
      <ToolList />
      <Features />
    </div>
  );
};
