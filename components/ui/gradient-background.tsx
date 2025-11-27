import { Colors } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, useColorScheme } from 'react-native';

type GradientBackgroundProps = {
    variant: 'header' | 'tab-bar';
};

export function GradientBackground({ variant }: GradientBackgroundProps) {
    const colorScheme = useColorScheme();
    const backgroundColor =
        colorScheme === 'dark'
            ? Colors.dark.backgroundPrimary
            : Colors.light.backgroundPrimary;

    if (variant === 'header') {
        return (
            <View style={styles.container}>
                <View style={[styles.headerTop, { backgroundColor }]} />
                <LinearGradient
                    colors={[backgroundColor, 'transparent']}
                    style={styles.headerBottom}
                />
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <LinearGradient
                colors={['transparent', backgroundColor]}
                style={styles.tabBarGradient}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTop: {
        flex: 0.9,
    },
    headerBottom: {
        flex: 0.1,
    },
    tabBarGradient: {
        position: 'absolute',
        top: -30,
        left: 0,
        right: 0,
        height: 30,
    },
});
