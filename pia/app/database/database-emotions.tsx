import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('emocoes.db');

export const setupDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS emocoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        descricao TEXT NOT NULL,
        data TEXT NOT NULL
      );`
    );
  });
};

export const executeSql = (sql: string, params: any[] = []): Promise<any> =>
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        sql,
        params,
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });

export default db;
