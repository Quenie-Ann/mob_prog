import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ContentEditor from './components/ContentEditor';
import MiniFormValidator from './components/MiniFormValidator';
import CatchTheButton from './components/CatchTheButton';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Content Editor" component={ContentEditor} />
      <Stack.Screen name="Mini Form Validator" component={MiniFormValidator} />
      <Stack.Screen name="Catch the Button" component={CatchTheButton} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;