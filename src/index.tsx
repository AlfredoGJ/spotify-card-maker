import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { HomePage } from "./components/pages/HomePage";
import { SongPage } from "./components/pages/SongPage";
import { AlbumPage } from "./components/pages/AlbumPage";
import { EditorLayout } from "./components/atoms/EditorLayout/EditorLayout";
import { Provider } from "react-redux";
import { store } from "./state/store";
import TrackGeneratorPage from "./components/pages/TrackGeneratorPage";
import { Layout } from "./components/templates/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout/>,
    children: [
      {
        path:'/',
        element: <HomePage />,
      },
      {
        path: "/track/:trackId",
        element: <TrackGeneratorPage />,
      },
      {
        path: "editor/",
        element: <EditorLayout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
