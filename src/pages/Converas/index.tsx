import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';
import { Container } from '../../components/Container';
import { CampoBusca } from '../../components/CampoBusca';

export function Conversas() {
  return (
    <Container>
      <CampoBusca />
      <Text>Conversas</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
