import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { spacing } from '@/constants/theme';
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
                <ThemedText type="title1">Oops! Not Found</ThemedText>
                <Link href="/" style={styles.link}>
                    <ThemedText type="body" color="tint">Go to home screen!</ThemedText>
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
        padding: spacing.xl,
    },
    link: {
        marginTop: spacing.m,
        paddingVertical: spacing.m,
    },
});