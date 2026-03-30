import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

export default function Contato() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.titulo}>Contato</Text>

      <View style={styles.card}>
        <Text style={styles.nomeLoja}>Maziero Jogos</Text>

        <View style={styles.linha}>
          <AntDesign name="environment" size={18} color="#ccc" />
          <Text style={styles.info}> Campinas - SP</Text>
        </View>

        <View style={styles.linha}>
          <AntDesign name="clock-circle" size={18} color="#ccc" />
          <Text style={styles.info}> Seg - Sex: 9h às 18h</Text>
        </View>

        <View style={styles.linha}>
          <AntDesign name="phone" size={18} color="#ccc" />
          <Text style={styles.info}> (11) 99999-9999</Text>
        </View>

        <View style={styles.linha}>
          <AntDesign name="whats-app" size={18} color="#ccc" />
          <Text style={styles.info}> WhatsApp: (11) 99999-9999</Text>
        </View>

        <View style={styles.linha}>
          <AntDesign name="mail" size={18} color="#ccc" />
          <Text style={styles.info}> contato@loja.com</Text>
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

  linha: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  info: {
    color: '#ccc',
    fontSize: 14
  }
});