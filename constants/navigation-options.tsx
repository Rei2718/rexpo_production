import { GradientBackground } from '@/components/ui/gradient-background';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

export const gradientHeaderOptions: NativeStackNavigationOptions = {
    headerTransparent: true,
    headerShadowVisible: false,
    headerBackground: () => <GradientBackground variant="header" />,
};

export const gradientTabBarOptions: BottomTabNavigationOptions = {
    tabBarStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        borderTopWidth: 0,
        shadowOpacity: 0, // iOS
        elevation: 0, // Android
        height: Platform.select({ ios: 104, default: 84 }),
        paddingTop: Platform.select({ ios: 8, default: 8 }),
    },
    tabBarBackground: () => <GradientBackground variant="tab-bar" />,
};
