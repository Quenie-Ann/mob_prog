import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { styles } from './styles/CatchTheButtonStyles';
import { colors } from '../styles/theme';
import Ionicons from '@expo/vector-icons/Ionicons';


const { width, height } = Dimensions.get('window');
const BUTTON_SIZE = 100;
const ROUND_LIMIT = 5;

const CatchTheButton = () => {
  const [visible, setVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [countdown, setCountdown] = useState(2);
  const [position, setPosition] = useState({ top: 200, left: 100 });
  const countdownRef = useRef(null);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    if (round >= ROUND_LIMIT) return;

    startCountdown();

    return () => {
      clearInterval(countdownRef.current);
      clearTimeout(hideTimerRef.current);
    };
  }, [round]);

  const startCountdown = () => {
    setCountdown(2);
    countdownRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev === 1) {
          clearInterval(countdownRef.current);
          showButton();
        }
        return prev - 1;
      });
    }, 1000);
  };

  const showButton = () => {
    const randomTop = Math.random() * (height - BUTTON_SIZE - 100);
    const randomLeft = Math.random() * (width - BUTTON_SIZE - 40);
    setPosition({ top: randomTop, left: randomLeft });
    setVisible(true);

    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
      setRound(prev => prev + 1);
    }, 1000);
  };

  const handleCatch = () => {
    setScore(prev => prev + 1);
    setVisible(false);
    setRound(prev => prev + 1);
  };

  const handleRestart = () => {
    setScore(0);
    setRound(0);
    setCountdown(2);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catch the Button Game</Text>
      <Text style={styles.round}>Round: {round} / {ROUND_LIMIT}</Text>

      {/* Countdown before button appears */}
      {round < ROUND_LIMIT && countdown > 0 && !visible && (
        <Text style={styles.countdown}>Next in: {countdown}</Text>
      )}

      {/* Score section */}
      {round < ROUND_LIMIT ? (
        <View style={styles.scoreWrapper}>
          <Text style={styles.scoreLabel}>Score</Text>
          <Text style={styles.scoreValue}>{score}</Text>
        </View>
      ) : (
        <>
          <Text style={styles.final}>Game Over!</Text>
          <View style={styles.scoreWrapper}>
            <Ionicons name="trophy" size={24} color={colors.contrast} style={{ marginRight: 8 }} />
            <Text style={styles.finalScore}>Final Score: {score}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRestart}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="refresh-outline" size={18} color={colors.text} style={{ marginRight: 6 }} />
              <Text style={styles.buttonText}>Restart</Text>
            </View>
          </TouchableOpacity>
        </>
      )}

      {/* Catch button */}
      {visible && round < ROUND_LIMIT && (
        <TouchableOpacity
          style={[styles.catchBtn, { top: position.top, left: position.left }]}
          onPress={handleCatch}
          activeOpacity={0.8}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="sparkles-outline" size={18} color={colors.white} style={{ marginRight: 6 }} />
            <Text style={{ color: colors.white, fontWeight: 'bold' }}>Catch Me!</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CatchTheButton;
