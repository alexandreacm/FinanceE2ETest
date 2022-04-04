import React from 'react';
import { TextInput, TextInputProps, Text, View } from 'react-native';

import { styles } from './styles';

type Props = TextInputProps & {
  required: boolean
}

export function Input({ required ,...rest }: Props) {
  return (
    <>
      <TextInput
        style={styles.input}
        {...rest}
        />
        {
           required && (
            <View style={styles.viewText}>
            <Text style={styles.textRequired}>Email is required</Text>
          </View>
           )
        }
    </>
  );
}