import { useContext } from "preact/hooks";
import { StateContext } from "../context/state-context";

export const Header = () => {
  const state = useContext(StateContext);

  return (
    <header id="header">
      <h1>Preact App with Microbundle</h1>
      <nav>
        <a href="/">Home</a>
        {state?.auth?.value.isAuthenticated ? (
          <>
            <a href="/wifi">WiFi Settings</a>
            <a href="/admin">Admin</a>
            <a href="/updates">Updates</a>
            <a href="/login">Logout</a>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </nav>
    </header>
  );
};
