import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Contato() {

  const mensagem = () => {
    Alert.alert('Sucesso', 'Produto adicionado ao carrinho');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ gap: 12, paddingBottom: 20 }}>
        <View style={styles.cardProduto}>
          <Image
            source={require('../../../assets/tecladoBranco.png')}
            style={styles.image}
          />

          <View style={styles.infoProduto}>
            <Text style={styles.titulo}>Teclado Mecânico Branco</Text>
            <Text style={styles.preco}>R$300,00</Text>
            <Text style={styles.preco}>Valor PIX: R$280,00</Text>

            <TextInput
              placeholder='Quantidade desejada'
              placeholderTextColor="#999"
              keyboardType='number-pad'
              style={styles.input}
            />

            <TouchableOpacity style={styles.botao} onPress={mensagem}>
              <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardProduto}>
          <Image
            source={require('../../../assets/tecladoMemb.png')}
            style={styles.image}
          />

          <View style={styles.infoProduto}>
            <Text style={styles.titulo}>Teclado Membrana Preto</Text>
            <Text style={styles.preco}>R$220,00</Text>
            <Text style={styles.preco}>Valor PIX: R$200,00</Text>

            <TextInput
              placeholder='Quantidade desejada'
              placeholderTextColor="#999"
              keyboardType='number-pad'
              style={styles.input}
            />

            <TouchableOpacity style={styles.botao} onPress={mensagem}>
              <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardProduto}>
          <Image
            source={require('../../../assets/Mouse.png')}
            style={styles.image}
          />

          <View style={styles.infoProduto}>
            <Text style={styles.titulo}>Mouse</Text>
            <Text style={styles.preco}>R$200,00</Text>
            <Text style={styles.preco}>Valor PIX: R$180,00</Text>

            <TextInput
              placeholder='Quantidade desejada'
              placeholderTextColor="#999"
              keyboardType='number-pad'
              style={styles.input}
            />

            <TouchableOpacity style={styles.botao} onPress={mensagem}>
              <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardProduto}>
          <Image
            source={require('../../../assets/tecladoPreto.png')}
            style={styles.image}
          />

          <View style={styles.infoProduto}>
            <Text style={styles.titulo}>Teclado Magnético Preto</Text>
            <Text style={styles.preco}>R$400,00</Text>
            <Text style={styles.preco}>Valor PIX: R$360,00</Text>

            <TextInput
              placeholder='Quantidade desejada'
              placeholderTextColor="#999"
              keyboardType='number-pad'
              style={styles.input}
            />

            <TouchableOpacity style={styles.botao} onPress={mensagem}>
              <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardProduto}>
          <Image
            source={require('../../../assets/tecladoMec.png')}
            style={styles.image}
          />

          <View style={styles.infoProduto}>
            <Text style={styles.titulo}>Teclado Mecânico Preto</Text>
            <Text style={styles.preco}>R$300,00</Text>
            <Text style={styles.preco}>Valor PIX: R$280,00</Text>

            <TextInput
              placeholder='Quantidade desejada'
              placeholderTextColor="#999"
              keyboardType='number-pad'
              style={styles.input}
            />

            <TouchableOpacity style={styles.botao} onPress={mensagem}>
              <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 16
  },
  cardProduto: {
    width: '95%',
    backgroundColor: '#2b2b2b',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 12
  },

  infoProduto: {
    flex: 1,
    gap: 6
  },

  preco: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 8,
    color: '#fff',
    marginTop: 6
  },

  botao: {
    backgroundColor: '#ff0033',
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  },
  titulo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
});