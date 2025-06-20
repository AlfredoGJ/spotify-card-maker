import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../atoms/Button/Button";
import SampleImg from "../../assets/img/examples/sample1.png";
import SampleImgBack from "../../assets/img/examples/sample1-back.png";
import { Surface } from "../atoms/Surface/Surface";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../state/track/trackSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialIds = [
    "190IqlryWu91WBKeDgZqZz", //
    "1ZBqJilDGBVYktvlCEo9jC", //
    "3k3NWokhRRkEPhCzPmV8TW", //
    "2X485T9Z5Ly0xyaghN73ed", //
    "1JekRMGQ8iN4G1AAdh0SBa", //
    "1NZs6n6hl8UuMaX0UC0YTz",
  ];

  function handleButtonClick() {
    dispatch(setIsLoading());
    navigate(
      `/track/${initialIds[Math.floor(Math.random() * initialIds.length)]}`
    );
  }

  const Hero = () => {
    return (
      <section className="flex flex-col items-center text-center mb-12 px-4">
        <h1 className="text-4xl font-bold mb-4 mt-8 max-w-3xl capitalize">
          Transform your favorite music into customizable cards
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mb-8 font-light">
          SpotImage Card Generator allows you to create beatiful cards from your
          favorite songs, customize colors, design and share with friends in
          seconds.
        </p>

        <Button onClick={handleButtonClick} size="large">
          <p className="font-semibold">Begin To Create</p>
        </Button>

        <div className="relative flex justify-center my-12">
          <div className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-[372px] rounded-xl shadow-xl overflow-hidden -rotate-6 mr-2 z-10">
            <img fetchPriority="high"  src={SampleImg} alt="Sample frontal card with attributes of the song" className="w-full" />
          </div>
          <div className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-[372px]  rounded-xl shadow-xl overflow-hidden rotate-6">
            <img fetchPriority="high" src={SampleImgBack} alt="Sample back card with scannable code" className="w-full" />
          </div>
        </div>
      </section>
    );
  };

  const FeatureCard = ({ icon, title, description }: any) => {
    return (
      <Surface borderRadius="lg" shadow="md">
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl text-emerald-500 mb-4">{icon}</div>
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
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

  // Footer Component

  return (
    <div className="">
      <Hero />
      <Features />
    </div>
  );
};
