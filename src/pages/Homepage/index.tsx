import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackRootStaticParamList } from '../routes';
import { AppRoutesTab } from '../tab_routes';

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "HomePage">;

export function HomePage({ navigation }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <AppRoutesTab />
      <StatusBar style="auto" />
    </View>
  );
}
