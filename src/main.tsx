import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const reactApp = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log("wwww");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const browserWindow: any = window;

// render micro frontend function
if (browserWindow?.rendermf2) {
  let mountInMF: ReactDOM.Root;

  browserWindow.rendermf2 = (containerId: string) => {
    mountInMF = ReactDOM.createRoot(document.getElementById(containerId)!);

    mountInMF.render(reactApp);
  };

  // unmount micro frontend function
  browserWindow.unmountmf2 = () => {
    mountInMF.unmount();
  };
}

if (!browserWindow?.rendermf2) {
  ReactDOM.createRoot(document.getElementById("root")!).render(reactApp);
}
