import { useAuth } from "../context/useAuth";

export const Logout = () => {
  const { reset } = useAuth();

  return (
    <div id="basePage">
      <div id="small">
        <h1>Logout</h1>
        <p class="submit">
          <input
            type="submit"
            name="commit"
            value="Logout"
            onClick={() => reset()}
          />
        </p>
      </div>
    </div>
  );
};
