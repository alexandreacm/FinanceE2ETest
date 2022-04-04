import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.CONTAINER_HEADER,
    paddingBottom: 33
  },
  button: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.TITLE_HEADER
  },
  subtitle: {
    fontSize: 17
  }
});