import { StyleSheet, View } from 'react-native';

import LittleLemonHeader from '@/components/parts/LittleLemonHeader';
import React from 'react';
import WelcomeScreen from '@/components/screens/WelcomeScreen';
import LittleLemonFooter from '@/components/parts/LittleLemonFooter';
import MenuItems from '@/components/screens/MenuItems';

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57"
  },
  footerContainer: {
    backgroundColor: '#495E57'
  },
});
