import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles/MiniFormValidatorStyles';
import { colors } from '../styles/theme';

const MiniFormValidator = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.includes('@')) newErrors.email = 'Email must contain "@"';
    if (!age || isNaN(age) || Number(age) <= 0)
      newErrors.age = 'Age must be a number greater than 0.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert('Form submitted successfully!');
      setName('');
      setEmail('');
      setAge('');
      setErrors({});
    }
  };

  const handleLiveValidation = (field, value) => {
    let error = '';
    if (field === 'name' && !value.trim()) error = 'Name is required.';
    if (field === 'email' && !value.includes('@')) error = 'Email must contain "@"';
    if (field === 'age') {
      if (!value || isNaN(value) || Number(value) <= 0)
        error = 'Age must be a number greater than 0.';
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

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
            <Text style={styles.title}>Mini Form Validator</Text>

            <View style={styles.card}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={value => {
                  setName(value);
                  handleLiveValidation('name', value);
                }}
                placeholder="Enter your name"
                placeholderTextColor={colors.label}
              />
              {errors.name && <Text style={styles.error}>{errors.name}</Text>}

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={value => {
                  setEmail(value);
                  handleLiveValidation('email', value);
                }}
                placeholder="Enter your email"
                keyboardType="email-address"
                placeholderTextColor={colors.label}
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}

              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                value={age}
                onChangeText={value => {
                  setAge(value);
                  handleLiveValidation('age', value);
                }}
                placeholder="Enter your age"
                keyboardType="numeric"
                placeholderTextColor={colors.label}
              />
              {errors.age && <Text style={styles.error}>{errors.age}</Text>}

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default MiniFormValidator;