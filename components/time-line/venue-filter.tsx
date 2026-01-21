import { PressableScale } from "@/components/ui/pressable-scale";
import { Spacing } from "@/constants/theme";
import { ALL_VENUE_ID } from "@/constants/venue-constants";
import { useThemeColor } from "@/hooks/use-theme-color";
import { DisplayVenue, Verified } from "@/supabase/api/types";
import { memo, useCallback, useMemo } from "react";
import { FlatList } from "react-native";
import { Container } from "../ui/container";
import { ThemedText } from "../ui/themed-text";


const VenueItem = memo(({
    item,
    isSelected,
    onPress
}: {
    item: Verified<DisplayVenue> | typeof ALL_VENUE_ID_OBJ;
    isSelected: boolean;
    onPress: (id: string) => void;
}) => {
    const color = useThemeColor();
    const isAll = item === ALL_VENUE_ID_OBJ;
    const name = isAll ? "すべて" : (item as Verified<DisplayVenue>).name;
    const id = isAll ? ALL_VENUE_ID : (item as Verified<DisplayVenue>).venue_public_id;

    return (
        <PressableScale onPress={() => onPress(id)}>
            <Container marginVertical="s8">
                <Container
                    paddingHorizontal="s24"
                    paddingVertical="s12"
                    gap="s12"
                    backgroundColor={isSelected ? color.natural_100 : color.natural_500}
                    style={{
                        borderRadius: Spacing.pill,
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: Spacing.s1,
                        borderColor: isSelected ? "transparent" : color.border,
                    }}
                >
                    <ThemedText
                        type="caption1"
                        color={isSelected ? "natural_600" : "natural_100"}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {name}
                    </ThemedText>
                </Container>
            </Container>
        </PressableScale>
    );
});

const ALL_VENUE_ID_OBJ = { venue_public_id: ALL_VENUE_ID } as const;

export default function VenueFilter(props: {
    venues: Verified<DisplayVenue>[];
    selectedVenueId: string;
    onVenueChange: (venueId: string) => void;
}) {
    const { venues, selectedVenueId, onVenueChange } = props;

    const handlePress = useCallback((venueId: string) => {
        if (selectedVenueId !== venueId) {
            onVenueChange(venueId);
        }
    }, [selectedVenueId, onVenueChange]);

    const data = useMemo(() => [ALL_VENUE_ID_OBJ, ...venues], [venues]);

    const renderItem = useCallback(({ item }: { item: typeof ALL_VENUE_ID_OBJ | Verified<DisplayVenue> }) => {
        const id = item === ALL_VENUE_ID_OBJ ? ALL_VENUE_ID : item.venue_public_id;
        return (
            <VenueItem
                item={item}
                isSelected={selectedVenueId === id}
                onPress={handlePress}
            />
        );
    }, [selectedVenueId, handlePress]);

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.venue_public_id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: Spacing.s20,
                gap: Spacing.s8,
            }}
            contentInsetAdjustmentBehavior="automatic"
            initialNumToRender={5}
            windowSize={3}
            maxToRenderPerBatch={3}
        />
    );
}