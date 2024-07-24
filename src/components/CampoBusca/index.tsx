import { View, TextInput } from 'react-native';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function CampoBusca() {
  return (
    <View style={styles.campoBusca}>
      <Ionicons name="search" size={20} color="#000" style={styles.campoBuscaIcone} />
      <TextInput placeholder="Pesquisar" />
    </View>
  );
}
