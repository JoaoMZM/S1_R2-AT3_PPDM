import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>

      <Image source={require('../../../assets/logo.png')} style={{ width: '95%', height: '30%' }}></Image>

      <View style={{padding: 16, backgroundColor: '#ff0033', borderRadius: 12}}>
        <Text style={{ fontSize: 18, color: '#000000' }}>
          A Mazierojogos é uma marca focada no universo gamer, unindo inovação tecnológica e paixão pelo entretenimento digital. Com uma identidade visual vibrante e moderna, a empresa busca oferecer uma experiência imersiva e de alta performance para jogadores que valorizam qualidade e estilo na cultura dos eSports.
        </Text>
      </View>
      <View style={{ gap: 20, width: '100%', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Produtos')}
        >
          <AntDesign name="shopping" size={20} color="#000000" />
          <Text style={styles.textoBotao}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Contato')}
        >
          <AntDesign name="phone" size={20} color="#000000" />
          <Text style={styles.textoBotao}>Contato</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20
  },
  botao: {
    width: '90%',
    padding: 10,
    backgroundColor: '#f5163b',
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  textoBotao: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
