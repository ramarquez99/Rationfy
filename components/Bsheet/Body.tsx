import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import { WinDiag } from '@/constants/Windiag';
import { router } from 'expo-router';

const winDiag = WinDiag();

export default function Body() {
  return (
    <View style={styles.container}>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/Admin")}>
          <Icon name="database-outline" type="material-community" size={winDiag*3.2}/>
          <Text style={styles.elementText}>Administación de datos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="database-outline" type="material-community" size={winDiag*3.2}/>
          <Text style={styles.elementText}>Administación de datos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: winDiag*2
  },
  elementText: {
    fontSize: winDiag*2,
    marginLeft: winDiag*1
  },
  button: {
    flexDirection: "row",
    marginHorizontal: winDiag*1,
    // marginVertical: winDiag*1.5,
    // backgroundColor: "red"
  },
  buttoncontainer: {
    // backgroundColor: "green",
    marginVertical: winDiag*0.9
  },
});