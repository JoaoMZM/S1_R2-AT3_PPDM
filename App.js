import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './src/pages/Home';
import Contato from './src/pages/Contato';
import Produtos from './src/pages/Produtos';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Página inicial',
          }}
        />
        <Stack.Screen
          name='Produtos'
          component={Produtos}
          options={{
            title: 'Produtos da loja',
          }}
        />
        <Stack.Screen
          name='Contato'
          component={Contato}
          options={{
            title: 'Contato da loja',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}