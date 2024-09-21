import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderTitle from '@/components/header/HeaderTitle';
import { useNavigation } from 'expo-router';
import { Icon } from '@rneui/base';
import { WinDiag } from '@/constants/Windiag';
import { Divider } from '@rneui/base';
import { router } from 'expo-router';

const winDiag = WinDiag();

export default function index() {
  const navigation = useNavigation();

  return (
    <>
      <HeaderTitle navigation={navigation} title="Administración de datos" bold={false}/>
      <View style={styles.container}>
        <View style={styles.subContainers}>
          <Text style={styles.containerTitle}>Cuentas y movimientos</Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/Admin/accounts" as any)} >
            <Icon name="account-cash-outline" type="material-community" size={winDiag*3.2}/>
            <Text style={styles.buttonText}>Cuentas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="bank-transfer" type="material-community" size={winDiag*3.5}/>
            <Text style={styles.buttonText}>Gastos e ingresos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles =  StyleSheet.create({
  container: {
    // backgroundColor: "green",
    paddingLeft: winDiag*2
  },
  subContainers: {
    // backgroundColor: "red",
    marginVertical: winDiag*2
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: winDiag*2
  },
  buttonText: {
    fontSize: winDiag*2,
    marginLeft: winDiag*1,
    
  },
  containerTitle: {
    fontSize: winDiag*1.6,
    fontWeight: "bold",
    color: "rgba(50,50,50,1)"

  }
})