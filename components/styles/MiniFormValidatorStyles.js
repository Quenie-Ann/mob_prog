import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.background,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.contrast,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    alignSelf: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: colors.label,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    fontSize: 16,
    backgroundColor: colors.white,
    color: colors.text,
  },
  error: {
    color: colors.error,
    fontSize: 13,
    marginBottom: 12,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});