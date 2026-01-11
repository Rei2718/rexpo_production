import { ThemedView } from "@/components/ui/themed-view";
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet } from "react-native";

export default function CoreConceptScreen() {
    const player = useVideoPlayer(require('@/assets/movie/onbord.mp4'), player => {
        player.loop = true;
        player.play();
        player.muted = true;
    });

    return (
        <ThemedView style={styles.container}>
            <VideoView
                style={styles.video}
                player={player}
                contentFit="cover"
                nativeControls={false}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        width: '100%',
        height: '100%',
    },
});
