import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { Container } from "../ui/container";

export default function TimelineSeparator() {
    const color = useThemeColor();
    return (
        <Container style={styles.separatorRoot}>
            <Container backgroundColor={color.natural_400} style={styles.verticalLine} />
        </Container>
    );
}


// ドット(s4)とライン(1px)の中心を揃えるため、paddingLeftを s20 - (s2 + 0.5) に調整
const styles = StyleSheet.create({
    separatorRoot: {
        height: Spacing.s32,
        paddingLeft: Spacing.s20 - (Spacing.s2 + 0.5),
    },
    verticalLine: {
        width: 1,
        flex: 1,
        marginBottom: -(Spacing.s8 + Spacing.s20),
    },
});