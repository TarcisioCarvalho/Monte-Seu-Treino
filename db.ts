// Importe a biblioteca sqlite3
import sqlite3, { Database, RunResult } from 'sqlite3';

// Crie uma instância de banco de dados em memória
const db = new sqlite3.Database(':memory:');

// Função para criar uma tabela de exemplo
function createTable(): Promise<RunResult> {
  return new Promise((resolve, reject) => {
    db.run('CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(this);
      }
    });
  });
}

// Função para inserir dados de exemplo na tabela
function insertData(): Promise<RunResult> {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO users VALUES (1, "John Doe")', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(this);
      }
    });
  });
}

// Inicialize o banco de dados (crie a tabela e insira dados)
async function initializeDatabase(): Promise<void> {
  await createTable();
  await insertData();
}

export { db, initializeDatabase };
