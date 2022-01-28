import React, { useState } from 'react';
import { TUser } from '../types/TUser';

const User = () => {
  const [user, setUser] = useState<TUser>();

  const handleLogin = () => {
    setUser({
      uid: 'ABC12345',
      name: 'Vic Flores',
    });
  };

  return (
    <div className="mt-5">
      <h3>Usuario: useState </h3>
      <br />
      <button className="btn btn-outline-primary" onClick={handleLogin}>
        Login
      </button>

      {!user ? (
        <pre> Waiting a user </pre>
      ) : (
        <pre> {JSON.stringify(user)} </pre>
      )}
    </div>
  );
};

export default User;
