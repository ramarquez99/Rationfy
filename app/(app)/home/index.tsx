import { View, Text, StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';
import { supabase } from '@/lib/supabase';
import Bsheet from '@/components/Bsheet';


export default function HomeScreen() {

  // const { expand } = useBottomSheet();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
    } else {
      router.replace('/(auth)/login'); // Redirige al usuario a la pantalla de login
    }
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={handleLogout} />
      <Bsheet/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});