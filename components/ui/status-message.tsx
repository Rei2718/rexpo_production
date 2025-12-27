import { ThemedText } from "@/components/ui/themed-text";
import { Spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

interface StatusMessageProps {
    status: 'loading' | 'error' | 'empty';
    message?: string;
}

export function StatusMessage({ status, message }: StatusMessageProps) {
    let defaultMessage = "";
    switch (status) {
        case 'loading':
            defaultMessage = "Loading...";
            break;
        case 'error':
            defaultMessage = "Error loading content";
            break;
        case 'empty':
            defaultMessage = "No content available";
            break;
    }

    return (
        <View style={styles.center}>
            <ThemedText>{message || defaultMessage}</ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: Spacing.l,
    },
});
