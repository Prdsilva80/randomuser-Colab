import React, { useState, useEffect } from "react";
import axios from "axios";

type User = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<{ results: User[] }>("https://randomuser.me/api/?results=10").then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
