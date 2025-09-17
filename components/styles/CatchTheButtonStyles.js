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
    marginBottom: 20,
    color: colors.contrast,
  },
  score: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 5,
  },
  round: {
    fontSize: 16,
    color: colors.label,
    marginBottom: 20,
  },
  countdown: {
    fontSize: 16,
    color: colors.contrast,
    marginBottom: 10,
  },
  scoreWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 20,
  },

  scoreLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.label,
    marginRight: 8,
  },

  scoreValue: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.contrast,
  },

  finalScore: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  final: {
    fontSize: 22,
    color: colors.error,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: colors.text,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    marginTop: 10,
    marginBottom: 16,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },
  catchBtn: {
    position: 'absolute',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    backgroundColor: colors.contrast,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});