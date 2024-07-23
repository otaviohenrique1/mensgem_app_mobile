import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';
import { Container } from '../../components/Container';

export function Comunidades() {
  return (
    <Container>
      <View>
        <TextInput
          style={styles.campoBusca}
          placeholder="Pesquisar"
        />
      </View>
      <Text>Comunidades</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
