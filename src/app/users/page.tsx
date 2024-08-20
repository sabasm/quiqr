import React from 'react';
import { UserList } from './components/UserList';
import { Main } from '../../shared/components/Main';

export default function UsersPage() {
  return (
    <Main>
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <UserList />
    </Main>
  );
}


