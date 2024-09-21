import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import HeaderTitle from '@/components/header/HeaderTitle';
import { useNavigation } from 'expo-router';
import { WinDiag } from '@/constants/Windiag';
import API from '../../../services/supabase/supabaseApi';
import EmptyList from '@/components/design/EmptyList';

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

const winDiag = WinDiag();

const HomeScreen = () => {
  const navigation = useNavigation();

  const [ accounts, setAccounts ] = useState<any[]>([]);

  useEffect(() => {
    getAccounts();
  }, [])

  const getAccounts = async() => {
    const accounts = await API.instance.getAccounts();
    console.log("ACCOUNTS: ", accounts)
    setAccounts(accounts || []);
  };

  const renderItem = ({ item }:any) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.accountText}>{item.account}</Text>
        <View style={styles.typeBadge}>
          <Text style={styles.typeText}>{item.type}</Text>
        </View>
      </View>
      <Text style={styles.amountText}>{item.amount}</Text>
      <Icon name="chevron-right" type="material-community" color="#B3B3B3" />
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
          </View>
        </View>
        <View style={styles.separator} />
          <FlatList
            data={accounts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={
              (accounts?.length > 0)
              ? <View style={styles.flatListFooter}/>
              : <></>
            }
            ListEmptyComponent={<EmptyList/>}
          />
        <TouchableOpacity style={styles.floatingButton}>
          <Icon name="plus" type="material-community" color="#00728B" size={winDiag*4} />
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
    justifyContent: "center",
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  balanceIcon :{
    alignSelf: "flex-end"
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
    height: "100%"
  },
  accountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  typeBadge: {
    backgroundColor: '#000',
    borderRadius: winDiag*1,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: winDiag*1.5,
    width: winDiag*9,
    alignItems: "center",
  },
  typeText: {
    color: '#fff',
    fontSize: 11,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    height: winDiag*0.2,
    backgroundColor: '#DDD9D9',
    marginTop: winDiag*0.1,
    marginBottom: winDiag*3,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: winDiag*11.3,
    backgroundColor: '#ECE6F0',
    borderRadius: 20,
    width: winDiag*22,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  flatListFooter: {
    height: winDiag*0.2, backgroundColor: '#DDD9D9',
    marginTop: winDiag*0.1,
    marginBottom: winDiag*8,
  }
});

export default HomeScreen;