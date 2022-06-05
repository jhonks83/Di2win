import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './src/pages/Home';
import { Details } from './src/pages/Details';

const Stack = createNativeStackNavigator();

export type Plant = {
  id: string;
  title: string;
  price: string;
  description: string;
  height: number;
  width: number;
  category: string;
  type: string;
  plant: string;
  isFavorited: boolean;
}

export type StackNavigatorParamsList = {
  Home: undefined;
  Details: Plant;
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar 
        style="dark"
        backgroundColor="transparent"
        translucent
      /> 
    </>
  );
}

