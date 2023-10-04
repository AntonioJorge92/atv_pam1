import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CadastroScreen = ({ navigation }) => {
  const [nomeCategoria, setNomeCategoria] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleCadastro = () => {
  };

  return (
    
    <View style={styles.container}>
      <Image style={styles.Img}source={require('./assets/formulario.png')}></Image>
      <Text>Formulário de Cadastro</Text>
      <TextInput
        placeholder="Nome da Categoria"
        value={nomeCategoria}
        onChangeText={setNomeCategoria}
        style={styles.input}
      />
      <TextInput
        placeholder="Observações"
        value={observacoes}
        onChangeText={setObservacoes}
        multiline={true}
        numberOfLines={10}
        style={styles.input}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  fontStyle: 'bold',

  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  Img:{
    paddingTop: 100,
    alignContent:'center',
    width:100,
    height:100,
  },
});

export default CadastroScreen;
