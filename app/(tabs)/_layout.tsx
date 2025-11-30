import { Haptic } from '@/components/ui/haptic';
import { Icon } from '@/components/ui/icon';
import { tabBarOptions } from '@/constants/navigation-options';
import { useThemeColor } from '@/hooks/use-theme-color';
import { msBrowse, msBrowseFill, msHome, msHomeFill } from '@material-symbols-react-native/rounded-400';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    const color = useThemeColor();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: color.tint,
                tabBarInactiveTintColor: color.textSecondary,
                headerShown: false,
                tabBarButton: Haptic,
                ...tabBarOptions,
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
                            ? <Icon size={32} icon={msBrowseFill} color={color} />
                            : <Icon size={32} icon={msBrowse} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}