import { useContext } from "preact/hooks";
import { StateContext } from "../context/state-context";
import { useLocation } from "preact-iso";

export const Header = () => {
  const state = useContext(StateContext);
  const { url } = useLocation();

  const Link = ({ href, text }: { href: string; text: string }) => {
    const isActive = url === href;

    return (
      <a href={href} className={isActive ? "active" : ""}>
        {text}
      </a>
    );
  };

  return (
    <header id="header">
      <h1>Preact App with Microbundle</h1>
      <nav>
        <Link href="/" text="Home" />
        {state?.auth?.value.isAuthenticated ? (
          <>
            <Link href="/wifi" text="WiFi Settings" />
            <Link href="/admin" text="Admin" />
            <Link href="/updates" text="Updates" />
            <Link href="/login" text="Logout" />
          </>
        ) : (
          <Link href="/login" text="Login" />
        )}
      </nav>
    </header>
  );
};
