import { Text, View, TextInput, ScrollView } from 'react-native';
import { styles } from './styles';
import { Container } from '../../components/Container';
import { CampoBusca } from '../../components/CampoBusca';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function Conversas() {
  return (
    <Container>
      <CampoBusca />
      <ScrollView>
        {
          Array.from({ length: 20 }, (a, index) => {
            return (
              <View style={styles.itemConversa} key={index}>
                <FontAwesome name="user-circle-o" size={50} color="#000" style={styles.foto} />
                <View style={{
                  flex: 1
                }}>
                  <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}>
                    <Text>Nome</Text>
                    <Text>18:00</Text>
                  </View>
                  <Text>Mensagem</Text>
                </View>
              </View>
            );
          })
        }
      </ScrollView>
    </Container>
  );
}
