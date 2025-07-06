import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Contato from './Contato';

const dadosFake = [
  {
    id: '1',
    nome: 'João Pedro',
    fotoUri: 'https://randomuser.me/api/portraits/men/10.jpg',
    ultimaMensagem: 'Fechou então!',
    hora: '09:45',
    mensagensNaoLidas: 2,
  },
  {
    id: '2',
    nome: 'Ana Beatriz',
    fotoUri: 'https://randomuser.me/api/portraits/women/20.jpg',
    ultimaMensagem: 'Vou te mandar o link já já',
    hora: 'Ontem',
    mensagensNaoLidas: 0,
  },
  {
    id: '3',
    nome: 'Carlos Eduardo',
    fotoUri: 'https://randomuser.me/api/portraits/men/35.jpg',
    ultimaMensagem: 'Valeu! Até mais!',
    hora: '08:12',
    mensagensNaoLidas: 5,
  },
];

const Contatos = ({ contatos = dadosFake }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Contato
            nome={item.nome}
            fotoUri={item.fotoUri}
            ultimaMensagem={item.ultimaMensagem}
            hora={item.hora}
            mensagensNaoLidas={item.mensagensNaoLidas}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  separador: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 74,
  },
});

export default Contatos;
