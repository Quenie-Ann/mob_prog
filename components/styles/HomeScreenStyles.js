import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    color: colors.contrast,
    textAlign: 'center',
  },
  icon: {
    marginRight: 8,
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: colors.text,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 4,
    marginBottom: 16,
    width: '80%',
    alignItems: 'center',

  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  },

  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
});