import { useEffect, useState } from 'react';
import { db, initializeDatabase } from '../db'; // Importe o arquivo de configuração do SQLite3

import { useClient } from 'next/react';

// Marque este componente como um componente do lado do cliente
useClient();

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Inicialize o banco de dados (crie a tabela e insira dados)
    initializeDatabase()
      .then(() => {
        // Consulte os usuários da tabela
        db.all('SELECT * FROM users', (err, rows) => {
          if (err) {
            console.error(err.message);
            return;
          }
          setUsers(rows);
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
