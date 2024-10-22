import { LocationProvider, ErrorBoundary, Router, Route } from "preact-iso";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./routes/home";
import { WiFi } from "./routes/wifi/wifi";
import { Admin } from "./routes/admin";
import { Login } from "./routes/login";
import { Updates } from "./routes/updates";

export const App = () => {
  return (
    <div id="app">
      <LocationProvider>
        <ErrorBoundary>
          <Header />
          <Router>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/wifi" component={WiFi} />
            <Route path="/admin" component={Admin} />
            <Route path="/updates" component={Updates} />
          </Router>
          <Footer />
        </ErrorBoundary>
      </LocationProvider>
    </div>
  );
};
