import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

export default function Contato() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Contato</Text>

      <View style={styles.card}>
        <Text style={styles.nomeLoja}>Maziero Jogos</Text>

        <View style={styles.textoInfo}>
          <AntDesign name="environment" size={18} color="#ccc" />
          <Text style={styles.texto}> Campinas - SP</Text>
        </View>

        <View style={styles.textoInfo}>
          <AntDesign name="clock-circle" size={18} color="#ccc" />
          <Text style={styles.texto}> Seg - Sex: 6h às 19h</Text>
        </View>

        <View style={styles.textoInfo}>
          <AntDesign name="phone" size={18} color="#ccc" />
          <Text style={styles.texto}> (67) 66666-6666</Text>
        </View>

        <View style={styles.textoInfo}>
          <AntDesign name="whats-app" size={18} color="#ccc" />
          <Text style={styles.texto}> WhatsApp: (67) 77777-7777</Text>
        </View>

        <View style={styles.textoInfo}>
          <AntDesign name="mail" size={18} color="#ccc" />
          <Text style={styles.texto}> mazierojogos@gmail.com</Text>
        </View>

        <View style={styles.textoInfo}>
          <AntDesign name="idcard" size={18} color="#ccc" />
          <Text style={styles.texto}> CNPJ: 12.345.678/0001-95</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 20,
    justifyContent: 'center'
  },

  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  card: {
    backgroundColor: '#2b2b2b',
    borderRadius: 16,
    padding: 20,
    gap: 14
  },

  nomeLoja: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  textoInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  texto: {
    color: '#ccc',
    fontSize: 18
  }
});