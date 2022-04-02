import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity key={1} style={styles.buttonSkill} {...rest}>
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
