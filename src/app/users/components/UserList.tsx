import React from 'react';
import { useFetchUsers } from '../hooks/useFetchUsers';
import { IUser } from '../../../entities/User';

export const UserList: React.FC = () => {
  const { users, loading, error } = useFetchUsers();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <ul className="space-y-2">
      {users.map((user: IUser) => (
        <li key={user.id} className="border p-2 rounded">
          <h3 className="font-semibold">{user.name}</h3>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
};


