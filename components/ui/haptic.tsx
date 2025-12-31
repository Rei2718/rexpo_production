import * as Haptics from 'expo-haptics';
import { Pressable, PressableProps } from 'react-native';


export function Haptic(props: PressableProps & {
  type?: keyof typeof Haptics.ImpactFeedbackStyle
}) {
  return (
    <Pressable
      {...props}
      onPressIn={(ev) => {
        const style = props.type
          ? Haptics.ImpactFeedbackStyle[props.type]
          : Haptics.ImpactFeedbackStyle.Medium;

        Haptics.impactAsync(style);

        props.onPressIn?.(ev);
      }}
    />
  );
}