import { LocationProvider, ErrorBoundary, Router, Route } from "preact-iso";

import AuthRoute from "./authRoute";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Home } from "../routes/home";
import { WiFi } from "../routes/wifi/wifi";
import { Admin } from "../routes/admin";
import { Login } from "../routes/login";
import { Logout } from "../routes/logout";
import { Updates } from "../routes/updates";

export const App = () => {
  return (
    <div id="app">
      <LocationProvider>
        <ErrorBoundary>
          <Header />
          <Router>
            <Route path="/" component={Home} />
            <AuthRoute path="/wifi" component={WiFi} authentication={true} />
            <AuthRoute path="/admin" component={Admin} authentication={true} />
            <AuthRoute
              path="/updates"
              component={Updates}
              authentication={true}
            />
            <AuthRoute path="/login" component={Login} authentication={false} />
            <AuthRoute
              path="/logout"
              component={Logout}
              authentication={true}
            />
          </Router>
          <Footer />
        </ErrorBoundary>
      </LocationProvider>
    </div>
  );
};
