import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: 'rgba(50,50,50,1)',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}
