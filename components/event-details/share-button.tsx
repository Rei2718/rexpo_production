import { Row } from '@/components/ui/flex';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { EventDetails, Verified } from '@/supabase/api/types';
import { SymbolView } from 'expo-symbols';
import { Platform, Share, StyleSheet } from 'react-native';
import { Icon } from '../ui/icon';
import { PressableScale } from '../ui/pressable-scale';

export function EventShareButton(data: Verified<EventDetails>) {
    const color = useThemeColor();

    const handleShare = async () => {
        try {
            const url = `https://r-expo-app.site/event/${data.event_public_id}`;
            const campaignMessage = 'みんなでこのイベントを盛り上げよう！🔥';
            const name = data.name ?? 'R-EXPO';
            const baseMessage = `${campaignMessage}\n\n${name}`;
            const message = Platform.OS === 'ios' ? baseMessage : `${baseMessage}\n${url}`;

            await Share.share({
                message,
                url,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <PressableScale onPress={handleShare}>
            <ThemedView
                style={[
                    styles.container,
                    {
                        borderWidth: Spacing.s1,
                        borderColor: color.border,
                    },
                ]}
                color="natural_500"
            >
                <Row justifyContent="center" alignItems="center" paddingVertical="s16" gap="s8">
                    {Platform.OS === 'ios' ? (
                        <SymbolView
                            name="square.and.arrow.up"
                            size={Spacing.s20}
                            tintColor={color.natural_200}
                        />
                    ) : (
                        <Icon icon="share" size={Spacing.s20} color={color.natural_200} />
                    )}
                    <ThemedText type="callout" color="natural_200">
                        シェア
                    </ThemedText>
                </Row>
            </ThemedView>
        </PressableScale>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: Spacing.s12,
        width: '100%',
    },
});


