import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { getDb } from './database/database-connection';
import { useRouter } from 'expo-router';

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSave = () => {
    const db = getDb();
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (name, email) VALUES (?, ?);',
        [name, email],
        () => {
          console.log('Usuário salvo com sucesso!');
          router.push('/');
        },
        (_, error) => console.error('Erro ao salvar usuário:', error)
      );
    });
  };

  return (
    <View>
      <TextInput placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}
