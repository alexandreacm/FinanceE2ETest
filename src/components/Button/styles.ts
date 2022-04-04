import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BUTTON,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  title: {
    color: colors.WHITE,
    fontSize: 16
  }
});