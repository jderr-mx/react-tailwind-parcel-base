import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default function Users() {
  const [userList, updateUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get('/api/users');
      updateUsers(data);
    }
    fetchUsers();
  }, []);
  return (
    <>
      <ul className="mb-8">
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>

      <ul>
        {userList.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}
