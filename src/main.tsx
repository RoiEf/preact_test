import "preact/devtools";
import { render } from "preact";
import { StateContextProvider } from "./context/state-context";
import { App } from "./helpers/app";

render(
  <StateContextProvider>
    <App />
  </StateContextProvider>,
  document.getElementById("app")!
);
