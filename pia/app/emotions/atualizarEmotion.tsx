import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';
import { executeSql } from './database/database-emotions';

export default function EditarEmocao() {
  const [descricao, setDescricao] = useState('');
  const { id } = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    carregarEmocao();
  }, []);

  const carregarEmocao = async () => {
    const result = await executeSql('SELECT * FROM emocoes WHERE id = ?', [id]);
    const emocao = result.rows._array[0];
    setDescricao(emocao.descricao);
  };

  const salvarAlteracoes = async () => {
    if (!descricao.trim()) {
      Alert.alert('Por favor, insira uma descrição.');
      return;
    }
    await executeSql('UPDATE emocoes SET descricao = ? WHERE id = ?', [descricao, id]);
    Alert.alert('Emoção atualizada!');
    router.push('/emocoes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Emoção</Text>
      <TextInput
        style={styles.input}
        placeholder="Atualize sua emoção"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Salvar" onPress={salvarAlteracoes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
});
