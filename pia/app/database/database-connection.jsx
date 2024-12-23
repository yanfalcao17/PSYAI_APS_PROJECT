import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('users.db');

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
      );`,
      [],
      () => console.log('Tabela criada com sucesso.'),
      (_, error) => console.error('Erro ao criar tabela:', error)
    );
  });
};

export const getDb = () => db;
