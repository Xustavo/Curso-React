import { useState } from 'react';

const UserDetails = () => {
  const [users] = useState([
    { id: 1, name: "Gustavo", age: 18, profissao: "programmer" },
    { id: 2, name: "Mavi", age: 17, profissao: "Doctor" },
    { id: 3, name: "Simone", age: 46, profissao: "Marketing" }
  ]);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.profissao}
            <div>
              {user.age >= 18 ? (
                <p>{user.name} pode tirar carteira de habilitação!</p>
              ) : (
                <p>{user.name} não pode tirar carteira de habilitação!</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
