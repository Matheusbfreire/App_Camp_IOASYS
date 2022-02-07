import React, {useState} from "react";
import { ImageBackground, TouchableOpacity, TextInput, StyleSheet, Text, View } from "react-native";

export default function App() {

  const [text, setText] = useState();
  const [password, setPassword] = useState();

  return (
    <ImageBackground source={require('./images/Background_Image.png')} style={{height: '100%'}} >
      <View style={styles.firstContainer} >
        <Text style={styles.logo}>ioasys</Text>
        <Text style={styles.title}>Books</Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput keyboardType='email-address' value={text} onChangeText={text => setText(text)} style={styles.emailText} />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <View>
              <Text style={styles.inputTitle}>Senha</Text>
              <TextInput secureTextEntry={true} value={password} onChangeText={password => setPassword(password)} style={styles.passwordText} />
            </View>
            <TouchableOpacity style={styles.buttom}>
              <Text style={styles.buttomText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create ({
  firstContainer: {
    flexDirection: 'row',
    top: '50%'
  },
  secondContainer: {
    top: '40%'
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: 10
  },
  title: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontSize: 40,
    color: '#FFFFFF',
    margin: 10,
    marginTop: 20
  },
  inputContainer: {
    width: '85%',
    height: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    borderRadius: 4,
    left: '5%',
    padding: 10,
    margin: 10
  },
  inputTitle: {
    color: '#FFFFFF',
    opacity: 0.5,
    fontSize: 20
  },
  emailText: {
    color: 'white',
    width: '100%',
    fontSize: 20
  },
  passwordText: {
    color: 'white',
    width: '100%',
    maxWidth: 200,
    fontSize: 20
  },
  inputSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttom: {
    backgroundColor: 'white',
    height: 48,
    width: 100,
    paddingLeft: 23,
    paddingTop: 10,
    marginTop: 5,
    marginRight: 10,
    borderRadius: 44,
  },
  buttomText: {
    color: '#B22E6F',
    fontSize: 20
  }
});