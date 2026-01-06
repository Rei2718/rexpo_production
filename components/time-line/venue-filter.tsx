import { PressableScale } from "@/components/ui/pressable-scale";
import { Spacing } from "@/constants/theme";
import { ALL_VENUE_ID } from "@/constants/venue-constants";
import { useThemeColor } from "@/hooks/use-theme-color";
import { DisplayVenue, Verified } from "@/supabase/api/types";
import { ScrollView } from "react-native";
import { Container } from "../ui/container";
import { ThemedText } from "../ui/themed-text";


export default function VenueFilter(props: {
    venues: Verified<DisplayVenue>[];
    selectedVenueId: string;
    onVenueChange: (venueId: string) => void;
}) {
    const color = useThemeColor();
    const { venues, selectedVenueId, onVenueChange } = props;
    const isAllSelected = selectedVenueId === ALL_VENUE_ID;

    const handlePress = (venueId: string) => {
        if (selectedVenueId !== venueId) {
            onVenueChange(venueId);
        }
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: Spacing.s20,
                gap: Spacing.s8,
            }}
            contentInsetAdjustmentBehavior="automatic"
        >
            <PressableScale
                key={ALL_VENUE_ID}
                onPress={() => handlePress(ALL_VENUE_ID)}
            >
                <Container
                    paddingHorizontal="s24"
                    paddingVertical="s12"
                    gap="s12"
                    backgroundColor={isAllSelected ? color.natural_100 : color.natural_500}
                    style={{
                        borderRadius: Spacing.pill,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <ThemedText
                        type="caption1"
                        color={isAllSelected ? "natural_600" : "natural_100"}
                        numberOfLines={1}
                    >
                        すべて
                    </ThemedText>
                </Container>
            </PressableScale>

            {venues.map((venue) => {
                const isSelected = selectedVenueId === venue.venue_public_id;

                return (
                    <PressableScale
                        key={venue.venue_public_id}
                        onPress={() => handlePress(venue.venue_public_id)}
                    >
                        <Container
                            paddingHorizontal="s24"
                            paddingVertical="s12"
                            gap="s12"
                            backgroundColor={isSelected ? color.natural_100 : color.natural_500}
                            style={{
                                borderRadius: Spacing.pill,
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <ThemedText
                                type="caption1"
                                color={isSelected ? "natural_600" : "natural_100"}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {venue.name}
                            </ThemedText>
                        </Container>
                    </PressableScale>
                );
            })}
        </ScrollView>
    );
}