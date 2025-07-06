import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, useColorScheme } from 'react-native';

export default function Home() {
  const [username, setUsername] = useState('');
  const [typedText, setTypedText] = useState('');
  const colorScheme = useColorScheme();
  const themeStyles = styles[colorScheme] || styles.light;

  const fullText = '  Ola, bem vindo ao Mook !';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index >= fullText.length - 1) {
        clearInterval(interval);
        return;
      }
      setTypedText(prev => prev + fullText[index]);
      index++;
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.text2}>{typedText}</Text>
      <Text style={{textAlign: 'left', width: 300, marginBottom: -10, paddingTop: 30}}>Username</Text>
      <TextInput
        style={themeStyles.input}
        placeholderTextColor={colorScheme === 'dark' ? '#888' : '#999'}
        value={username}
        onChangeText={setUsername}
      />
    </View>
  );
}

const styles = {
  light: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 70,
      backgroundColor: 'white',
    },
    text: {
      fontSize: 17,
      paddingTop: 30,
      color: '#000',
    },
    text2: {
      fontSize: 22,
      color: '#000',
      paddingTop: 40,
    },
    input: {
      width: '80%',
      padding: 12,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 8,
      color: '#000',
      marginTop: 20,
    },
  }),

  dark: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 70,
      backgroundColor: '#111922',
    },
    text: {
      fontSize: 17,
      paddingTop: 30,
      color: '#fff',
    },
    text2: {
      fontSize: 22,
      color: '#fff',
      paddingTop: 60,
    },
    input: {
      width: '80%',
      padding: 12,
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 8,
      color: '#fff',
      marginTop: 20,
    },
  }),
};
