import React, { ChangeEvent, useState } from "react";
import { Button, Input } from "@headlessui/react";
import { Outlet, useNavigate } from "react-router";
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

  return (
    <div>
      <div className="flex flex-col text-white p-5 bg-green-400">
        <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Spotify Card Generator</div>
        <br></br>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Generate cards of your favorite Songs, Albums, Artists or Playlists
        </div>
      </div>
      <div className="flex gap-3  p-3 w-full">
        <Input
          onChange={handleUriChange}
          className="rounded-md w-3/4 border-2 px-2 text-gray-600  focus:outline-none focus:ring focus:ring-green-300 border-green-400"
          placeholder="Paste your spotify URI here"
          type="text"
        />
        <Button
          onClick={handleButtonClick}
          className="w-1/4 bg-green-400 rounded-md p-2 text-white hover:bg-green-500 focus:ring focus:ring-green-300 "
        >
          Generate
        </Button>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
