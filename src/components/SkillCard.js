import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity key={1} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
