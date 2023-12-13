import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <p id="login-state">{user} is logged in. </p>
      ) : (
        <Link to={"/api/users"}>
          <p id="login-state">Click to log in.</p>
        </Link>
      )}

      <h1 id="header">NC NEWS</h1>
    </div>
  );
};

export default Header;
