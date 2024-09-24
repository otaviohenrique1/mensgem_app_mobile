import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';
import { Container } from '../../components/Container';
import { CampoBusca } from '../../components/CampoBusca';

export function Comunidades() {
  return (
    <Container>
      <CampoBusca />
      <Text>Comunidades</Text>
    </Container>
  );
}
