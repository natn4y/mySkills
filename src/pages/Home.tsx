import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    console.log('Removing skill with id: ', id);
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome...</Text>
        <Text style={styles.greetings}>{greeting}</Text>

        <TextInput
          style={styles.input}
          placeholder="New skill "
          placeholderTextColor={'#ffffff49'}
          onChangeText={text => setNewSkill(text)}
        />

        <Button title="Adicionar" onPress={handleAddNewSkill} />

        <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SkillCard
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}>
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
  greetings: {
    color: '#fff',
  },
});
