import { useSignal, batch } from "@preact/signals";
import { useContext } from "preact/hooks";
import { StateContext } from "../context/state-context";
import { useLocation } from "preact-iso";

export const Login = () => {
  const state = useContext(StateContext);
  const newLocation = useLocation();

  const error = useSignal(false);
  const userName = useSignal("");
  const password = useSignal("");

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (userName.peek() === "admin" && password.peek() === "12345") {
      state!.auth.value = {
        user: userName.peek(),
        password: password.peek(),
        isAuthenticated: true,
      };
      error.value = false;
      newLocation.route("/", true);
    } else {
      batch(() => {
        state!.auth.value = {
          user: null,
          password: null,
          isAuthenticated: false,
        };
        userName.value = "";
        password.value = "";
        error.value = true;
      });
    }
  };

  return (
    <div id="basePage">
      <div id="small">
        <h1>Login</h1>
        {error && <h2>Wrong user name or password</h2>}
        <form onSubmit={onSubmit}>
          <p>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onInput={(e) => {
                userName.value = e.currentTarget.value;
              }}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Password"
              value={password}
              onInput={(e) => {
                password.value = e.currentTarget.value;
              }}
            />
          </p>
          <p class="submit">
            <input type="submit" name="commit" value="Login" />
          </p>
        </form>
      </div>
    </div>
  );
};
