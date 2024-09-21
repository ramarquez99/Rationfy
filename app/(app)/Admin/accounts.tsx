import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WinDiag } from '@/constants/Windiag';

const winDiag = WinDiag();

export default function accounts() {
  return (
    <View>
      <View style={styles.titlesContainer}>
        <Text style={styles.titles}>Ingresos</Text>
      </View>
      <View>
        <Text>Gastos</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {

  },
  titlesContainer: {
    marginLeft: winDiag*1,
    marginTop: winDiag*1
  },
  titles: {
    fontSize: winDiag*2
  }
});