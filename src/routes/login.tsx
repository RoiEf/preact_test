import { JSX } from "preact";
import { useLocation } from "preact-iso";
import { useSignal, batch } from "@preact/signals";
import { useContext } from "preact/hooks";
import { StateContext } from "../context/state-context";

export const Login = () => {
  const state = useContext(StateContext);
  const newLocation = useLocation();

  const error = useSignal(false);
  const userName = useSignal("");
  const password = useSignal("");

  const reset = (errorValue: boolean) => {
    batch(() => {
      state!.auth!.value = {
        user: null,
        password: null,
        isAuthenticated: false,
      };
      userName.value = "";
      password.value = "";
      error.value = errorValue;
    });
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
      reset(true);
    }
  };

  if (state.auth?.value.isAuthenticated) {
    return (
      <div id="basePage">
        <div id="small">
          <h1>Logout</h1>
          <p class="submit">
            <input
              type="submit"
              name="commit"
              value="Logout"
              onClick={() => reset(false)}
            />
          </p>
        </div>
      </div>
    );
  } else {
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
  }
};
