import React from 'react';
import {View, Text} from 'react-native';

export function Home() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello World</Text>
        <Text>React Native</Text>
      </View>
    </>
  );
}
