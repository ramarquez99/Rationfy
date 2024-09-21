import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WinDiag } from '@/constants/Windiag';

const winDiag = WinDiag();

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tu lista está vacía. Agrega nuevos elementos para empezar.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: winDiag * 2,
  },
  text: {
    fontSize: winDiag * 2,
    textAlign: 'center',
    color: '#666',
  },
});

export default EmptyList;
