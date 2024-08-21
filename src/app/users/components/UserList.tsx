import React from 'react';
import { User } from '../../../entities/User';

export const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
};


