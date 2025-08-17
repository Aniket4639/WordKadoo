import React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabScreen from '../screens/tabs/tabScreen/TabScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import VocabularyListScreen from '../screens/tabs/homeScreen/components/vocabulary/VocabularyListScreen';
import VocabularyDaysListScreen from '../screens/tabs/homeScreen/components/vocabulary/VocabularyDaysList';

interface AppNavigatorInterface {
  first?: string;
  second?: string;
  third?: string;
}

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={TabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VocabularyDaysList"
          component={VocabularyDaysListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VocabularyList"
          component={VocabularyListScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigator;
