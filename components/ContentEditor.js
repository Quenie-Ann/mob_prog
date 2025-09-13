import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles/ContentEditorStyles';
import { colors } from '../styles/theme';

const ContentEditor = () => {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState('This is the default paragraph.');
  const [color, setColor] = useState(colors.text);
  const [customText, setCustomText] = useState('');
  const [customColor, setCustomColor] = useState('');
  const fadeAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const reset = () => {
    setVisible(true);
    setText('This is the default paragraph.');
    setColor(colors.text);
    setCustomText('');
    setCustomColor('');
  };

  const Button = ({ label, onPress, active, fullWidth = false, style }) => (
    <TouchableOpacity
      style={[
        styles.button,
        active && styles.buttonActive,
        fullWidth && styles.fullWidthButton,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, active && styles.buttonTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.title}>Content Editor</Text>

            <View style={styles.card}>
              <Animated.View style={{ opacity: fadeAnim }}>
                {visible && (
                  <Text style={[styles.paragraph, { color }]}>{text}</Text>
                )}
              </Animated.View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Custom Text</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your message"
                  value={customText}
                  onChangeText={setCustomText}
                  placeholderTextColor={colors.label}
                />

                <Text style={styles.label}>Text Color</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. #ff0000 or 'blue'"
                  value={customColor}
                  onChangeText={setCustomColor}
                  placeholderTextColor={colors.label}
                />
              </View>

              <View style={styles.toggleGroup}>
                <Button
                  label="Show"
                  onPress={() => setVisible(true)}
                  active={visible}
                  style={{ flex: 1, marginRight: 10 }}
                />
                <Button
                  label="Hide"
                  onPress={() => setVisible(false)}
                  active={!visible}
                  style={{ flex: 1 }}
                />
              </View>

              <Text style={styles.sectionLabel}>Customize</Text>
              <View style={styles.actionRow}>
                <Button
                  label="Change Text"
                  onPress={() => setText(customText || text)}
                  style={{ flex: 1, marginRight: 10 }}
                />
                <Button
                  label="Change Color"
                  onPress={() => setColor(customColor || color)}
                  style={{ flex: 1 }}
                />
              </View>

              <View style={styles.buttonGroup}>
                <Button label="Reset" onPress={reset} fullWidth />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ContentEditor;