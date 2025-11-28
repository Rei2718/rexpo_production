import { Colors } from '@/constants/theme';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Platform, StyleSheet, View, useColorScheme } from 'react-native';

function NavigationBackground({ variant }: { variant: 'header' | 'tab-bar' }) {
    const colorScheme = useColorScheme();
    const backgroundColor =
        colorScheme === 'dark'
            ? Colors.dark.backgroundPrimary
            : Colors.light.backgroundPrimary;

    return (
        <View
            style={[
                styles.container,
                { backgroundColor },
                variant === 'header' ? styles.headerBorder : styles.tabBarBorder,
            ]}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBorder: {
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
    },
    tabBarBorder: {
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
    },
});

export const headerOptions: NativeStackNavigationOptions = {
    headerTransparent: true,
    headerShadowVisible: false,
    headerBackground: () => <NavigationBackground variant="header" />,
};

export const tabBarOptions: BottomTabNavigationOptions = {
    tabBarStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        borderTopWidth: 0,
        shadowOpacity: 0, // iOS
        elevation: 0, // Android
        height: Platform.select({ ios: 104, default: 84 }),
        paddingTop: Platform.select({ ios: 8, default: 8 }),
    },
    tabBarBackground: () => <NavigationBackground variant="tab-bar" />,
};
