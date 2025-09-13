import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/HomeScreenStyles';
import { colors } from '../styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text style={styles.title}>Mobile Programming Activities</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Content Editor')}
      >
        <Text style={styles.buttonText}>Content Editor</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Mini Form Validator')}
      >
        <Text style={styles.buttonText}>Mini Form Validator</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Catch the Button')}
      >
        <Text style={styles.buttonText}>Play Catch the Button</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default HomeScreen;