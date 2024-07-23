import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Conversas } from './Converas';
import { Contatos } from './Contatos';
import { Ligacoes } from './Ligacoes';
import { Comunidades } from './Comunidades';
import { HomePage } from './Homepage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type NativeStackRootStaticParamList = {
  HomePage: undefined;
}

const NativeStack = createNativeStackNavigator<NativeStackRootStaticParamList>();

export function AppRoutesNativeStack() {
  const appBarStyle = {
    headerStyle: {
      backgroundColor: "cadetblue",
    },
    headerTitleStyle: {
      fontSize: 30,
      color: "#fff",
    },
    contentStyle: {
      backgroundColor: "#fff",
    },
  };

  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: "App Mensagem",
            ...appBarStyle
          }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

export type TabRootStaticParamList = {
  Converas: undefined;
  Contatos: undefined;
  Ligacoes: undefined;
  Comunidades: undefined;
}

const Tab = createBottomTabNavigator<TabRootStaticParamList>();

export function AppRoutesTab() {
  
  const tabOptions = {
    headerShown: false,
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === 'Contatos') {
            iconName = focused
              ? 'briefcase'
              : 'briefcase-outline';
          } else if (route.name === 'Comunidades') {
            iconName = focused ? 'flag' : 'flag-outline';
          } else if (route.name === 'Converas') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Ligacoes') {
            iconName = focused ? 'call' : 'call-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 15
        }
      })}
    >
      <Tab.Screen name="Converas" component={Conversas} options={{ ...tabOptions }} />
      <Tab.Screen name="Contatos" component={Contatos} options={{ ...tabOptions }} />
      <Tab.Screen name="Ligacoes" component={Ligacoes} options={{ ...tabOptions }} />
      <Tab.Screen name="Comunidades" component={Comunidades} options={{ ...tabOptions }} />
    </Tab.Navigator>
  );
}
