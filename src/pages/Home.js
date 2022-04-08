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
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome...</Text>
        <TextInput
          style={styles.input}
          placeholder="New skill "
          placeholderTextColor={'#ffffff49'}
          onChangeText={text => setNewSkill(text)}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddNewSkill}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

        {mySkills.map(skill => (
          <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>{skill}</Text>
          </TouchableOpacity>
        ))}
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
  buttonSkill: {
    backgroundColor: '#1F1e25',
    padding: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 15,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
