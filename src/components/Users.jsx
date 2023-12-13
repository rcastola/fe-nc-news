import { useContext, useEffect, useState } from "react";
import { getUsers } from "../api";
import { UserContext } from "./UserContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const { user } = useContext(UserContext);

  function handleAvatarClick(username) {
    setUser(username);
  }

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((response) => {
      setUsers(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <h2>{user} has logged in</h2>
      ) : (
        <h2>Click your avatar to log in: </h2>
      )}

      <ul>
        {users.map((user) => {
          return (
            <li key={user.username} className="user-card">
              <p>Username: {user.username}</p>
              <img
                className="user-avatar"
                src={user.avatar_url}
                onClick={() => {
                  handleAvatarClick(user.username);
                }}
              ></img>
              <p>Name: {user.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
