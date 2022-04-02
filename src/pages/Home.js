import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.title}>React Native</Text>

        <TextInput
          style={styles.input}
          placeholder="Type here"
          placeholderTextColor={'#ffffff49'}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => {}}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginTop: 20}]}>My Skills</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    color: '#fff',
    backgroundColor: '#1F1e25',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 0 : 12,
    marginTop: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
