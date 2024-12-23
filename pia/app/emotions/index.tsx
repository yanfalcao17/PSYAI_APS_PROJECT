import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { executeSql, setupDatabase } from './database/database-emotions';

type Emocao = { id: number; descricao: string; data: string };

export default function ListaEmocoes() {
  const [emocoes, setEmocoes] = useState<Emocao[]>([]);
  const router = useRouter();

  useEffect(() => {
    setupDatabase();
    carregarEmocoes();
  }, []);

  const carregarEmocoes = async () => {
    const result = await executeSql('SELECT * FROM emocoes ORDER BY data DESC');
    const rows = result.rows._array;
    setEmocoes(rows);
  };

  const excluirEmocao = async (id: number) => {
    await executeSql('DELETE FROM emocoes WHERE id = ?', [id]);
    Alert.alert('Emoção excluída!');
    carregarEmocoes();
  };

  return (
    <View style={styles.container}>
      <Button title="Adicionar Emoção" onPress={() => router.push('/emocoes/AdicionarEmocao')} />
      <FlatList
        data={emocoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.emocao}>
            <Text>{item.descricao}</Text>
            <Text>{item.data}</Text>
            <Button title="Editar" onPress={() => router.push(`/emocoes/EditarEmocao?id=${item.id}`)} />
            <Button title="Excluir" onPress={() => excluirEmocao(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emocao: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
