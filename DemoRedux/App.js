
import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer,DefaultTheme,
  DarkTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Splash from './src/Screens/Splash';
import Profile from './src/Screens/Profile';
import Setting from './src/Screens/Setting';

import {useSelector} from 'react-redux'

const Stack  = createStackNavigator();
const themes = {
  DefaultTheme,
  DarkTheme,
};

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return(
  <NavigationContainer theme={ isDark ? themes.DarkTheme : themes.DefaultTheme}>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
          <Stack.Screen name='Splash' component={Splash}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='Setting' component={Setting}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

  
};





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
