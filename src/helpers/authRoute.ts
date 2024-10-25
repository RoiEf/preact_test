import { ComponentType, h } from "preact";
import { RoutableProps, useLocation } from "preact-iso";
import { useAuth } from "../context/useAuth";

export interface AuthRouteProps extends RoutableProps {
  authentication: boolean;
  component: ComponentType<AuthRouteProps>;
}

export default function AuthRoute(props: AuthRouteProps) {
  const newLocation = useLocation();
  const { isAuthenticated } = useAuth();

  if (props.authentication && isAuthenticated !== props.authentication) {
    newLocation.route("/login", false);
  } else if (
    !props.authentication &&
    isAuthenticated !== props.authentication
  ) {
    newLocation.route("/", false);
  }

  return h(props.component, props);
}
