import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.WHITE
  },
  options: {
    width: 200,
    backgroundColor: colors.OPTIONS,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 25
  },
  details: {
    color: colors.TEXT_NOTE,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 22
  },
  confirmation: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
    color: colors.BUTTON,
    marginBottom: 12
  }
});