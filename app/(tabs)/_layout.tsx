import { Haptic } from '@/components/ui/haptic';
import { Icon } from '@/components/ui/icon';
import { useThemeColor } from '@/hooks/use-theme-color';
import { msExplore, msExploreFill, msHome, msHomeFill } from '@material-symbols-react-native/rounded-200';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  const color = useThemeColor();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: color.textPrimary,
        tabBarInactiveTintColor: color.textSecondary,
        tabBarStyle: {
          backgroundColor: color.backgroundPrimary,
          borderTopWidth: 0,
          shadowOpacity: 0, // iOS
          elevation: 0, // Android
          height: Platform.select({ ios: 104, default: 84 }),
          paddingTop: Platform.select({ ios: 8, default: 8 }),
        },
        headerShown: false,
        tabBarButton: Haptic,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            focused
              ? <Icon size={32} icon={msHomeFill} color={color} />
              : <Icon size={32} icon={msHome} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            focused
              ? <Icon size={32} icon={msExploreFill} color={color} />
              : <Icon size={32} icon={msExplore} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}