import { useContext, useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';

import { AuthContext } from '../contexts/AuthContext';

const Register = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { error, register } = useContext(AuthContext);

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    register(nome, email, senha);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <KeyboardAvoidingView
        style={styles.background}
        behavior="padding"
        enabled>
        <ScrollView style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 24, textAlign: 'center' }}>Registrar</Text>
          <HelperText type="error" visible={true}>
            {error}
          </HelperText>
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          <TextInput
            label="Confirmar Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          <Button mode="contained" onPress={handleRegister}>
            Registrar
          </Button>
          <Button onPress={handleLogin}>Voltar</Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 17,
    backgroundColor: '#FFF',
  },
});

export default Register;
