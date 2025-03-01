import { JSX } from "preact";
import { useLocation } from "preact-iso";
import { useSignal, batch } from "@preact/signals";
import { useContext } from "preact/hooks";
import { StateContext } from "../context/state-context";
import { useAuth } from "../context/useAuth";

export const Login = () => {
  const state = useContext(StateContext);
  const { reset } = useAuth();

  const newLocation = useLocation();

  const error = useSignal(false);
  const userName = useSignal("");
  const password = useSignal("");

  const _reset = (errorValue: boolean) => {
    batch(() => {
      userName.value = "";
      password.value = "";
      error.value = errorValue;
    });
    reset();
  };

  const onSubmit = (e: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName.peek() === "admin" && password.peek() === "12345") {
      state!.auth!.value = {
        user: userName.peek(),
        password: password.peek(),
        isAuthenticated: true,
      };
      error.value = false;
      newLocation.route("/", true);
    } else {
      _reset(true);
    }
  };

  return (
    <div id="basePage">
      <div id="small">
        <h1>Login</h1>
        {error.value && <h2>Wrong user name or password</h2>}
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
