import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { rhp } from '../constants/dimensions';

const ProgressBar = ({ prevState,nextState, style }) => {
  const animatedWidth = useRef(new Animated.Value(prevState)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(animatedWidth, {
        toValue: nextState,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }, 300)
  }, [nextState]);

  return (
    <View style={styles.barBackground}>
      <Animated.View
        style={[
          styles.barFront,
          styles.barProgress(animatedWidth),
          style,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barBackground: {
    marginTop: rhp(5),
    height: rhp(4),
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
  },
  barFront: {
    height: rhp(4),
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#4681AA',
  },
  barProgress: (animatedWidth) => ({
    width: animatedWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    }),
    borderTopRightRadius: animatedWidth._value === 100 ? 8 : 0,
    borderBottomRightRadius: animatedWidth._value === 100 ? 8 : 0,
  }),
});

export default ProgressBar;
