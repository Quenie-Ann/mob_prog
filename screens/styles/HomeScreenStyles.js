import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    color: colors.contrast,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});