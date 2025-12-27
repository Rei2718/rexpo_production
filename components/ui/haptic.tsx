import * as Haptics from 'expo-haptics';
import { Pressable, PressableProps } from 'react-native';

export function Haptic(props: PressableProps) {
  return (
    <Pressable
      {...props}
      onPressIn={(ev) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        props.onPressIn?.(ev);
      }}
    />
  );
}