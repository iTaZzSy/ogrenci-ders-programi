import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0F766E',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#F8FAFC',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Haftalık Ders Programı',
        }}
      />
      <Stack.Screen
        name="ders/[id]"
        options={{
          title: 'Ders Detayı',
        }}
      />
    </Stack>
  );
}
