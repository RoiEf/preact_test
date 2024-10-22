import "preact/debug";
import { render } from "preact";
import { StateContextProvider } from "./context/state-context";
import { App } from "./app";

render(
  <StateContextProvider>
    <App />
  </StateContextProvider>,
  document.getElementById("app")!
);
