import { useAuth } from "../context/useAuth";

export const Footer = () => {
  const location = `${window.location.hostname}`;
  const { isAuthenticated, user } = useAuth();

  return (
    <footer id="footer">
      <p>{location}</p>
      {isAuthenticated ? <p>Logged as: {user}</p> : <p>Not logged in.</p>}
    </footer>
  );
};
