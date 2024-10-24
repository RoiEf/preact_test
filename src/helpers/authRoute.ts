import { ComponentType, h } from "preact";
import { RoutableProps, useLocation } from "preact-iso";
import { useContext } from "preact/hooks";
import { StateContext } from "../context/state-context";

export interface AuthRouteProps extends RoutableProps {
  authentication: boolean;
  component: ComponentType<AuthRouteProps>;
}

export default function AuthRoute(props: AuthRouteProps) {
  const newLocation = useLocation();
  const state = useContext(StateContext);

  if (
    props.authentication &&
    state.auth?.value.isAuthenticated !== props.authentication
  ) {
    newLocation.route("/login", false);
  } else if (
    !props.authentication &&
    state.auth?.value.isAuthenticated !== props.authentication
  ) {
    newLocation.route("/", false);
  }

  return h(props.component, props);
}
