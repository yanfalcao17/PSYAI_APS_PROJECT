import { Tabs } from 'expo-router';

import { useEffect, useState } from 'react';
import { useRouter, Stack } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Lista de Usuários' }} />
      <Tabs.Screen name="UserForm" options={{ title: 'Adicionar Usuário' }} />
      <Tabs.Screen name="UserDetail" options={{ title: 'Detalhes do Usuário' }} />
    </Tabs>
  );
}

export default function Layout() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulação de autenticação
    if (!isAuthenticated) {
      router.replace('/Login');
    }
  }, [isAuthenticated]);

  return <Stack />;
}

