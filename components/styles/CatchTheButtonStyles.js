// components/styles/CatchTheButtonStyles.js
import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/theme';

const { width, height } = Dimensions.get('window');
const BUTTON_SIZE = 100;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
    color: colors.contrast,
  },
  score: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 4,
  },
  round: {
    fontSize: 16,
    color: colors.label,
    marginBottom: 20,
  },
  countdown: {
    fontSize: 20,
    color: colors.contrast,
    marginBottom: 10,
  },
  final: {
    fontSize: 22,
    color: colors.error,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  catchBtn: {
    position: 'absolute',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    backgroundColor: colors.primary,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});