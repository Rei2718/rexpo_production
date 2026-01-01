import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { Container } from "../ui/container";

export default function TimelineSeparator() {
    const color = useThemeColor();
    return (
        <Container style={styles.separatorRoot}>
            <Container alignItems="center" marginLeft="s16" style={styles.separatorInner}>
                <Container backgroundColor={color.natural_400} style={styles.separatorLine} />
            </Container>
        </Container>
    );
}

const styles = StyleSheet.create({
    separatorRoot: {
        height: Spacing.s32,
    },
    separatorInner: {
        width: Spacing.s8,
    },
    separatorLine: {
        width: 1,
        height: '100%',
    }
});
