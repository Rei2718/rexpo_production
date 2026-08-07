import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { runOnJS, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated';

const TERMINATION_VIEWED_KEY = 'termination_viewed';

// Target period: 2026-02-11 00:00:00 JST and later
const START_TIME = new Date('2026-02-11T00:00:00+09:00').getTime();

export const useTermination = () => {
  const textOpacity = useSharedValue(0);
  const contentOpacity = useSharedValue(0);
  const [showContent, setShowContent] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isTerminationActive, setIsTerminationActive] = useState(false);

  useEffect(() => {
    const checkViewed = async () => {
      try {
        const now = Date.now();
        const isActive = now >= START_TIME;
        setIsTerminationActive(isActive);

        const viewed = await AsyncStorage.getItem(TERMINATION_VIEWED_KEY);
        if (viewed === 'true') {
          setShowContent(true);
        }
      } catch (error) {
        console.error('Failed to check termination status', error);
      } finally {
        setIsChecked(true);
      }
    };
    checkViewed();
  }, []);

  useEffect(() => {
    if (!isChecked || !isTerminationActive || showContent) return;

    const animateMessage = (index: number) => {
      // 4 messages total (0-3)
      if (index >= 4) {
        runOnJS(setShowContent)(true);
        AsyncStorage.setItem(TERMINATION_VIEWED_KEY, 'true').catch(console.error);
        return;
      }

      textOpacity.value = withDelay(
        index === 0 ? 2000 : 0,
        withSequence(
          withTiming(1, { duration: 1500 }),
          withDelay(3000, withTiming(0, { duration: 1500 }, (finished) => {
            if (finished) {
              runOnJS(setMessageIndex)(index + 1);
            }
          }))
        )
      );
    };

    animateMessage(messageIndex);
  }, [messageIndex, showContent, isChecked, isTerminationActive]);

  useEffect(() => {
    if (showContent) {
      contentOpacity.value = withTiming(1, { duration: 1000 });
    }
  }, [showContent]);

  return {
    textOpacity,
    contentOpacity,
    showContent,
    messageIndex,
    isInitialLoading: !isChecked,
    isTerminationActive,
  };
};
