import { useContext } from "preact/hooks";
import { StateContext } from "../context/state-context";

export const Footer = () => {
  const location = `${window.location.hostname}`;
  const state = useContext(StateContext);

  return (
    <footer id="footer">
      <p>{location}</p>
      {state?.auth.value.isAuthenticated ? (
        <p>Logged as: {state.auth.value.user}</p>
      ) : (
        <p>Not logged in.</p>
      )}
    </footer>
  );
};
