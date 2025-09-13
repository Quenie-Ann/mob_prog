import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles/KeyboardSafeLayoutStyles';
import { colors } from '../styles/theme';

const KeyboardSafeLayout = ({ children }) => (
  <SafeAreaView style={styles.safeArea}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  </SafeAreaView>
);

export default KeyboardSafeLayout;