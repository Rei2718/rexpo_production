import { ThemedView } from '@/components/core/themed-view';
import { Radii, Typography } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import {
    createMaterialTopTabNavigator,
    MaterialTopTabBar,
    MaterialTopTabNavigationEventMap,
    MaterialTopTabNavigationOptions
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
>(Navigator);

export default function ExplorationLayout() {
    const color = useThemeColor();
    const inactivetabBarColor = color.textPrimary + "80";
    const inactiveIndicatorColor = color.textPrimary + '20';

    const dynamicStyles = {
        indicator: {
            backgroundColor: color.textPrimary,
        },
        inactiveIndicator: {
            backgroundColor: inactiveIndicatorColor,
        }
    };

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea} edges={['top']}>
                <MaterialTopTabs
                    tabBar={props => (
                        <ThemedView>
                            <View style={[styles.inactiveIndicatorBase, dynamicStyles.inactiveIndicator]} />
                            <MaterialTopTabBar {...props} />
                        </ThemedView>
                    )}
                    screenOptions={{
                        tabBarStyle: styles.tabBar,
                        tabBarIndicatorStyle: [styles.indicatorBase, dynamicStyles.indicator],
                        tabBarLabelStyle: styles.tabLabel,
                        tabBarActiveTintColor: color.textPrimary,
                        tabBarInactiveTintColor: inactivetabBarColor,
                    }}
                >
                    <MaterialTopTabs.Screen
                        name="index"
                        options={{ title: "🎉  Events" }}
                    />
                    <MaterialTopTabs.Screen
                        name="food"
                        options={{ title: "🍔  Food" }}
                    />
                </MaterialTopTabs>
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: 'transparent',
        shadowOpacity: 0, // Android
        elevation: 0, // iOS
        borderBottomWidth: 0,
    },
    tabLabel: {
        ...Typography.Subtitle,
        fontWeight: 'bold',
        textTransform: 'none',
    },
    indicatorBase: {
        height: 4,
        borderRadius: Radii.full,
    },
    inactiveIndicatorBase: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 4,
    },
});
