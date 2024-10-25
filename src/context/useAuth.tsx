import { useContext } from "preact/hooks";
import { StateContext } from "../context/state-context";

export const useAuth = () => {
  const state = useContext(StateContext);

  function reset() {
    state!.auth!.value = {
      user: null,
      password: null,
      isAuthenticated: false,
    };
  }

  return {
    isAuthenticated: state.auth?.value.isAuthenticated,
    user: state.auth?.value.user,
    reset,
  };
};
