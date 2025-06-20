import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { HomePage } from "./components/pages/HomePage";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { Layout } from "./components/templates/Layout/Layout";

const TrackGeneratorPage = lazy(
  () => import("./components/pages/TrackGeneratorPage")
);
const EditorLayout = lazy(
  () => import("./components/atoms/EditorLayout/EditorLayout")
);
const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/track/:trackId",
        element: (
          <Suspense>
            <TrackGeneratorPage />,
          </Suspense>
        ),
      },
      {
        path: "editor/",
        element: (
          <Suspense>
            <EditorLayout />,
          </Suspense>
        ),
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
