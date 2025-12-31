import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TagFeed() {
    const { id, name } = useLocalSearchParams();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Tag: {name} ({id})</Text>
        </View>
    );
}
