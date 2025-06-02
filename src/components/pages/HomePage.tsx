import React, { ChangeEvent, useState } from "react";
import { Input } from "@headlessui/react";
import { Outlet, useNavigate } from "react-router";
import { Button } from "../atoms/Button/Button";
import Header from "../molecules/Header/Header";
import SampleImg from "../../assets/img/examples/sample1.png";
import SampleImgBack from "../../assets/img/examples/sample1-back.png";
import { Surface } from "../atoms/Surface/Surface";
import { Link } from "react-router-dom";
import Footer from "../molecules/Footer/Footer";
export const HomePage = () => {
  const [uri, setUri] = useState<string>("");

  const navigate = useNavigate();
  const tester = /^https:\/\/open.spotify.com.*\/(\w+)\/([a-zA-Z\d]+)/;

  function handleUriChange(e: ChangeEvent<HTMLInputElement>) {
    setUri(e.target.value);
  }

  function handleButtonClick() {
    if (tester.test(uri)) {
      let [, type, id] = tester.exec(uri) as Array<string>;

      navigate(`/${type}/${id}`);
    }
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
        <Link to="/track/6Fba9RZtC6vTY814JToDtP" className="">
          <Button size="large">
            <p className="font-semibold">Begin To Create</p>
          </Button>
        </Link>

        <div className="relative flex justify-center my-12">
          <div className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-[372px] rounded-xl shadow-xl overflow-hidden -rotate-6 mr-2 z-10">
            <img src={SampleImg} alt="Sample" className="w-full" />
          </div>
          <div className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-[372px]  rounded-xl shadow-xl overflow-hidden rotate-6">
            <img src={SampleImgBack} alt="Sample" className="w-full" />
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
          <h3 className="text-xl font-bold mb-4">{title}</h3>
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
