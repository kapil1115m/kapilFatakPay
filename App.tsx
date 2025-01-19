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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StackNavigator from './src/navigation/AppNavigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import PageNavigation from './src/navigation/PageNavigation';
import { PaperProvider } from 'react-native-paper';


function App(): React.JSX.Element {

  const pageNav = new PageNavigation()

  const isDarkMode = useColorScheme() === 'dark';
  // const navigationRef = useNavigationContainerRef()
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer ref={(ref)=>pageNav.setTopLevelNavigator(ref)}> 
        <PaperProvider>
          <StackNavigator/>
        </PaperProvider>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
