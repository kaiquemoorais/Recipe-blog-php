// components/Contato.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Contato = ({ 
  nome, 
  fotoUri, 
  ultimaMensagem, 
  hora, 
  mensagensNaoLidas 
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: fotoUri }} style={styles.foto} />
      
      <View style={styles.infoContainer}>
        <View style={styles.topRow}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.hora}>{hora}</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.ultimaMensagem} numberOfLines={1}>
            {ultimaMensagem}
          </Text>
          {mensagensNaoLidas > 0 && (
            <View style={styles.bolinha}>
              <Text style={styles.contador}>{mensagensNaoLidas}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  foto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  hora: {
    fontSize: 12,
    color: '#888',
  },
  ultimaMensagem: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  bolinha: {
    backgroundColor: '#25D366',
    minWidth: 20,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  contador: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Contato;
