import { ThemedText } from '@/components/core/themed-text';
import { ThemedView } from '@/components/core/themed-view';
import { Spacing } from '@/constants/theme';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: '',
                    headerShadowVisible: false,
                }}
            />
            <ThemedView style={styles.container}>
                <ThemedText type="Title">Oops! Not Found</ThemedText>
                <Link href="/" style={styles.link}>
                    <ThemedText type="Body" color="tint">Go to home screen!</ThemedText>
                </Link>
            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.xl,
    },
    link: {
        marginTop: Spacing.md,
        paddingVertical: Spacing.md,
    },
});