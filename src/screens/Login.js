import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imgLogo}
          source={require('../assets/login/logo1.png')}
        />

        <Image
          style={styles.imgNameLogo}
          source={require('../assets/login/name_logo1.png')}
        />

        <Text style= { styles.text1 }>Iniciar sessão</Text>
        <Text style= { styles.text2 }>Faça o login para usar o Denarius</Text>

        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail..."
          placeholderTextColor="#858585"
          onChangeText={(text) => console.log(text)}
        />

        <TextInput
            style={[styles.input]}
            placeholder="Insira sua senha..."
            placeholderTextColor="#858585"
            secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotPass}>
            Esqueceu a senha?
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            Entrar
            </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
     backgroundColor: '#F9F9F9' // (Branco) Mesma cor utilizada no Figma
  },

  imgLogo: {
    width: 120, 
    height: 120,
    resizeMode: 'contain',
  },

  imgNameLogo: {
    width: 150, 
    height: 150,
    resizeMode: 'contain',
    marginVertical: -45
  },

  text1: {
    textAlign: 'left',
    fontSize: 28,
    color: 'black',
    fontFamily: 'Montserrat',
    marginTop: 50,
    marginVertical: 5,
    fontWeight: 'bold',
    width: '75%', 
  },
  
  text2: {
    textAlign: 'left',
    fontSize: 20,
    color: '#858585', // Mesma cor utilizada no Figma
    fontFamily: 'Montserrat',
    marginVertical: 5,
    width: '75%',
  },
  
  input: {
    height: 55,
    width: '75%',
    borderRadius: 5,
    margin: 10,
    fontSize: 16,
    padding: 10,
    backgroundColor: '#E8E8E8', // Mesma cor utilizada no Figma
  },

  forgotPass: {
    alignSelf: 'flex-end',
    fontSize: 20,
    color: '#FF8C00',  // Mesma cor utilizada no Figma
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginBottom: 20,
    width: '85%',
  },
  
  loginButton: {
    backgroundColor: '#4285F4',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
  },

  loginButtonText: {
    color: '#F8F4E6', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;