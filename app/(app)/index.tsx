import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

import HomeScreen from './home';
import Bsheet from '@/components/Bsheet';

export default function App() {

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Bsheet/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});