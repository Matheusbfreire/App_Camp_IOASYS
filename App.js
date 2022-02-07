import React, {useState} from "react";
import { ImageBackground, TextInput, StyleSheet, Text, View } from "react-native";

export default function App() {

  const [text, setText] = useState()

  return (
    <ImageBackground source={require('./images/Background_Image.png')} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.logo}>ioasys</Text>
        <Text style={styles.title}>Books</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TextInput placeholder='Email' placeholderTextColor={'white'} value={text} onChangeText={text => setText(text)} style={styles.input} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create ({
  image: {
    
  },
  container: {
    flexDirection: 'row'
  },
  logo: {
    fontSize: 50,
    color: '#FFFFFF',
    margin: 10
  },
  title: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontSize: 40,
    color: '#FFFFFF',
    margin: 10
  },
  input: {
    width: 288,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    borderRadius: 4,
    left: '20%',
    color: 'white'
  },
  inputContainer: {
    justifyContent: 'center'
  }
});