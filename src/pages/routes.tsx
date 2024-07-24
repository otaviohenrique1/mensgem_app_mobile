import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './Homepage';

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
