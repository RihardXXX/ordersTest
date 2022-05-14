import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllOrders from './screens/AllOrders';
import AddOrders from './screens/AddOrders';

const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="AllOrders" 
          component={AllOrders} 
        />
        <Stack.Screen 
          name="AddOrders" 
          component={AddOrders} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

