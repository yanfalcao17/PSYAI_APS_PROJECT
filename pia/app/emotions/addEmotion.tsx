import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { executeSql } from './database/database-emotions';

export default function AdicionarEmocao() {
  const [descricao, setDescricao] = useState('');
  const router = useRouter();

  const salvarEmocao = async () => {
    if (!descricao.trim()) {
      Alert.alert('Por favor, insira uma descrição.');
      return;
    }
    const data = new Date().toISOString();
    await executeSql('INSERT INTO emocoes (descricao, data) VALUES (?, ?)', [descricao, data]);
    Alert.alert('Emoção adicionada!');
    router.push('/emocoes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Emoção</Text>
      <TextInput
        style={styles.input}
        placeholder="Descreva sua emoção"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Salvar" onPress={salvarEmocao} />
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
