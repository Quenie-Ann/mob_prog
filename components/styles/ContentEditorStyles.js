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
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
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
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: colors.white,
    color: colors.text,
  },
  toggleGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    marginTop: 10,
  },
  buttonGroup: {
    gap: 10,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  fullWidthButton: {
    width: '100%',
  },
  buttonActive: {
    backgroundColor: colors.contrast,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  buttonTextActive: {
    color: colors.white,
  },
});