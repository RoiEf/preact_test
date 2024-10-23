import { AnyComponent } from "preact";
import { useLocation } from "preact-iso";
import { useContext } from "preact/hooks";
import { StateContext } from "../context/state-context";

export default function AuthLayout({
  children,
  authentication = true,
}: {
  children: AnyComponent;
  authentication?: boolean;
}) {
  const newLocation = useLocation();
  const state = useContext(StateContext);

  if (authentication && state.auth?.value.isAuthenticated !== authentication) {
    newLocation.route("/login", false);
  } else if (
    !authentication &&
    state.auth?.value.isAuthenticated !== authentication
  ) {
    newLocation.route("/", false);
  }

  return children;
}
