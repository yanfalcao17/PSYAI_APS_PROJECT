import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSearchParams, useRouter } from 'expo-router';
import { getDb } from './database/database-connection';

export default function UserDetail() {
  const { id } = useSearchParams();
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const db = getDb();
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE id = ?;',
        [id],
        (_, { rows }) => setUser(rows._array[0]),
        (_, error) => console.error('Erro ao buscar usuário:', error)
      );
    });
  }, [id]);

  const handleDelete = () => {
    const db = getDb();
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM users WHERE id = ?;',
        [id],
        () => {
          console.log('Usuário deletado.');
          router.push('/');
        },
        (_, error) => console.error('Erro ao deletar usuário:', error)
      );
    });
  };

  return (
    <View>
      {user && (
        <>
          <Text>Nome: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Button title="Deletar" onPress={handleDelete} />
        </>
      )}
    </View>
  );
}
