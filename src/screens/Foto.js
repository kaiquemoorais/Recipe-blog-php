import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Foto() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Tela Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});
