import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  planInfo: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.CONTAINER_HEADER,
    paddingBottom: 33,
  },
  plan: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 14,
    marginTop: 34
  },
  price: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  value: {
    fontWeight: 'bold',
    color: '#1C1C1C',
    fontSize: 32
  },
  recurrence: {
    marginBottom: 7,
    color: colors.TEXT_RECURRENCE
  },
  note: {
    color: colors.TEXT_NOTE,
    fontSize: 12
  },
});