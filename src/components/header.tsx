import { useLocation } from "preact-iso";
import { useAuth } from "../context/useAuth";

export const Header = () => {
  const { isAuthenticated } = useAuth();
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
        {isAuthenticated ? (
          <>
            <Link href="/wifi" text="WiFi Settings" />
            <Link href="/admin" text="Admin" />
            <Link href="/updates" text="Updates" />
            <Link href="/logout" text="Logout" />
          </>
        ) : (
          <Link href="/login" text="Login" />
        )}
      </nav>
    </header>
  );
};
