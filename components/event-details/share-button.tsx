import { Row } from '@/components/ui/flex';
import { ShineBorder } from '@/components/ui/shine-border';
import { ThemedText } from '@/components/ui/themed-text';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { EventDetails, Verified } from '@/supabase/api/types';
import { SymbolView } from 'expo-symbols';
import { Platform, Share } from 'react-native';
import { Icon } from '../ui/icon';
import { PressableScale } from '../ui/pressable-scale';

export function EventShareButton(data: Verified<EventDetails>) {
    const color = useThemeColor();

    const handleShare = async () => {
        try {
            const url = `https://r-expo-app.site/event/${data.event_public_id}`;

            await Share.share({
                message: Platform.OS === 'ios' ? undefined : url,
                url: url,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <PressableScale onPress={handleShare}>
            <ShineBorder borderRadius={Spacing.s12}>
                <Row justifyContent="center" alignItems="center" paddingVertical="s16" gap="s8">
                    {Platform.OS === 'ios' ? (
                        <SymbolView
                            name="square.and.arrow.up"
                            size={Spacing.s20}
                            tintColor={color.natural_100}
                        />
                    ) : (
                        <Icon icon="share" size={Spacing.s20} color={color.natural_100} />
                    )}
                    <ThemedText type="callout" color="natural_100">
                        シェア
                    </ThemedText>
                </Row>
            </ShineBorder>
        </PressableScale>
    );
}
