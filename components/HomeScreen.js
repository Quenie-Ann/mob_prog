import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/HomeScreenStyles';
import { colors } from '../styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text style={styles.title}>Mobile Programming Activities</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Content Editor')}
      >
        <View style={styles.buttonContent}>
        <Ionicons name="pencil-outline" size={20} color={colors.text} style={styles.icon} />
        <Text style={styles.buttonText}>Content Editor</Text>
        </View>
      </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Mini Form Validator')}
        >
          <View style={styles.buttonContent}>
          <Ionicons name="information-circle-outline" size={20} color={colors.text} style={styles.icon} />
          <Text style={styles.buttonText}>Mini Form Validator</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Catch the Button')}
        >
          <View style={styles.buttonContent}>
          <Ionicons name="game-controller-outline" size={20} color={colors.text} style={styles.icon} />
          <Text style={styles.buttonText}>Play Catch the Button</Text>
          </View>
        </TouchableOpacity>

    </View>
  </SafeAreaView>
);

export default HomeScreen;