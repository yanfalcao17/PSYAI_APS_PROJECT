import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { getDb } from './database/database-connection';
import { useRouter } from 'expo-router';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    const db = getDb();
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users;',
        [],
        (_, { rows }) => setUsers(rows._array),
        (_, error) => console.error('Erro ao buscar usuários:', error)
      );
    });
  };

  return (
    <View>
      <Button title="Adicionar Usuário" onPress={() => router.push('/UserForm')} />
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text onPress={() => router.push(`/UserDetail?id=${item.id}`)}>
            {item.name} - {item.email}
          </Text>
        )}
      />
    </View>
  );
}
