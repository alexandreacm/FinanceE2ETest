import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 35,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  active: {
    backgroundColor:  colors.WHITE,
    fontSize: 13,
    fontWeight: 'bold'
  }
});