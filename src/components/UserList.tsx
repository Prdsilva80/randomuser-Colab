import React, { useState, useEffect } from "react";
import axios from "axios";

type User = {
  name: {
    first: string;
    last: string;
    title: string;
  };
  gender: string;
  location: {
    country: string;
    street: {
      name: string;
      number: number;
    };
    city: string;
    state: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    username: string;
    password: string;
  };
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<{ results: User[] }>("https://randomuser.me/api/?results=10")
      .then((response) => {
        setUsers(response.data.results);
      })
      .catch((error) => {
        console.log("Failed to fetch users:", error);
      });
  }, []);

  return (
    <div className="user-list">
      <h1>Lista de Usuários</h1>
      <div className="user-card-list">
        {users.map((user) => (
          <div key={user.login.username} className="user-card">
            <div className="user-avatar">
              <img src={user.picture.medium} alt={user.name.first} />
            </div>
            <div className="user-info">
              <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>
                {`${user.location.street.number} ${user.location.street.name},`}
              </p>
              <p>{`${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
