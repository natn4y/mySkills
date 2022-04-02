import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

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

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({item}) => <SkillCard skill={item} />}>
          )
        </FlatList>
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
});
