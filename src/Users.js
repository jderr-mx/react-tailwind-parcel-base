import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [userList, updateUsers] = useState([]);
  useEffect(() => {
    axios.get('/api/users').then(response => {
      updateUsers(response.data);
    });
  }, []);
  return (
    <ul>
      {userList.map(user => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};

export default Users;
