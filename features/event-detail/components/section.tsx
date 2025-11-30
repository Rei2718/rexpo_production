import { ThemedText } from '@/components/ui/themed-text';
import { spacing } from '@/constants/theme';
import { StyleSheet, View } from 'react-native';

type EventSectionProps = {
    title: string;
    children?: React.ReactNode;
};

export default function EventSection({ title, children }: EventSectionProps) {
    if (!children) {
        return null;
    }

    return (
        <View>
            <ThemedText type="headline" color="textPrimary" style={styles.container}>{title}</ThemedText>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.xl,
    },
    content: {
        marginTop: spacing.m,
    },
});
