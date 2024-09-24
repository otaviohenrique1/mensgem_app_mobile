import { Text, View } from 'react-native';
import { styles } from './styles';
import { Container } from '../../components/Container';
import { CampoBusca } from '../../components/CampoBusca';

export function Ligacoes() {
  return (
    <Container>
      <CampoBusca />
      <Text>Ligacoes</Text>
    </Container>
  );
}
