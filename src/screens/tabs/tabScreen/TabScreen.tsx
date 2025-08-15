
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddWordScreen from '../addWordScreen/AddWordScreen';
import HomeScreen from '../homeScreen/HomeScreen';
import UsageScreen from '../usageScreen/UsageScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import PersonalInfoScreen from '../personalInfoScreen/personalInfoScreen';

const Tab = createBottomTabNavigator();
const TabScreen = ({ navigation }: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Add Word') {
            iconName = 'plus-square';
          } else if (route.name === 'Statistics') {
            iconName = 'line-chart';
          } else {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4169e1',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Add Word"
        component={AddWordScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Statistics"
        component={UsageScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="User"
        component={PersonalInfoScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default TabScreen;
