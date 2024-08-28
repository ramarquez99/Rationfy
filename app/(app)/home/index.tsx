import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import HeaderTitle from '@/components/header/HeaderTitle';
import { useNavigation } from 'expo-router';


const data = [
  { id: '1', account: 'Santander Debito', amount: '$10,105.00', type: 'Crédito' },
  { id: '2', account: 'Santander Debito', amount: '$10,105.00', type: 'Crédito' },
  { id: '3', account: 'Santander Debito', amount: '$10,105.00', type: 'Efectivo' },
  { id: '4', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '5', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '6', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '7', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '8', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '9', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '10', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '11', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '12', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '13', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '14', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
  { id: '15', account: 'Santander Debito', amount: '$10,105.00', type: 'Ahorros' },
];

const HomeScreen = () => {

  const navigation = useNavigation();

  const renderItem = ({ item }:any) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.accountText}>{item.account}</Text>
        <View style={styles.typeBadge}>
          <Text style={styles.typeText}>{item.type}</Text>
        </View>
      </View>
      <Text style={styles.amountText}>{item.amount}</Text>
      <Icon name="chevron-right" type="material-community" />
    </View>
  );

  return (
    <>
      <HeaderTitle navigation={navigation} title="Hola Raul!" c={true}/>
      <View style={styles.container}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Balance total</Text>
          <View style={styles.balanceAmountContainer}>
            <Text style={styles.balanceAmount}>$ 24,561</Text>
            <Icon name="chevron-right" type="material-community" />
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />

        <TouchableOpacity style={styles.floatingButton}>
          <Icon name="plus" type="material-community" color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  balanceAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  itemTextContainer: {
    flexDirection: 'column',
  },
  accountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  typeBadge: {
    backgroundColor: '#000',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 4,
  },
  typeText: {
    color: '#fff',
    fontSize: 12,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6200ee',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default HomeScreen;


// import { useEffect } from 'react';
// import { useNavigation } from 'expo-router';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { router } from 'expo-router';
// import { supabase } from '@/lib/supabase';
// import Bsheet from '@/components/Bsheet';
// import HeaderTitle from '@/components/header/HeaderTitle';

// export default function HomeScreen() {

//   const navigation = useNavigation();

//   useEffect(() => {
    
//   }, [navigation]);

//   const handleLogout = async () => {
//     console.log("click")
//     const { error } = await supabase.auth.signOut();
//     if (error) {
//     } else {
//       router.replace('/(auth)/login'); // Redirige al usuario a la pantalla de login
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <HeaderTitle navigation={navigation} title="Hola Raul!" c={true}/>
//       <Text>123456</Text>
//       <Button title="Logout" 
//         // onPress={handleLogout} 
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: "white"
//   },
// });