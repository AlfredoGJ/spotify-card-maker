import React, { ChangeEvent, useState } from "react";
import { Input } from "@headlessui/react";
import { Outlet, useNavigate } from "react-router";
import { Button } from "../atoms/Button/Button";
import Header from "../molecules/Header/Header";
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
 navigate('/track')
  return (
    <div className="bg-slate-100 min-h-screen font-sans text-slate-800">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};
