import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from './src/screens/CalendarScreen';
import DayToDoScreen from './src/screens/DayToDoScreen';
// import { TouchableOpacity, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen 
          name="Home" 
          component={MainScreen} 
          options={{ headerShown: false }} 
        /> */}
        <Stack.Screen 
          name="Calendar" 
          component={CalendarScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen name="DayToDoScreen" component={DayToDoScreen} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
