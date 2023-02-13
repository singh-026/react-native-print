/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RNPrint from 'react-native-print';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  };
  const handlePrintOnClick = async () => {
    await RNPrint.print({
      filePath:
        'https://wyvatedev.s3.amazonaws.com/Desi%20Palette%20-%20KOT(Take%20Away)08-02-2023%2012:29.pdf',
    });
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <TouchableOpacity style={styles.printButton} onPress={handlePrintOnClick}>
        <Text>Print</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  printButton: {
    width: 100,
    height: 100,
    backgroundColor: '#93bbfa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default App;
