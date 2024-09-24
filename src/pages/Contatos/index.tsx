import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';
import { Container } from '../../components/Container';
import { CampoBusca } from '../../components/CampoBusca';

export function Contatos() {
  return (
    <Container>
      <CampoBusca />
      <Text>Contatos</Text>
    </Container>
  );
}
