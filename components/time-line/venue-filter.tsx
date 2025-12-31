import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { DisplayVenue } from "@/supabase/api/types";
import { ScrollView, TouchableOpacity } from "react-native";
import { Container } from "../ui/container";
import { ThemedText } from "../ui/themed-text";

interface VenueFilterProps {
    venues: DisplayVenue[];
    selectedVenueId?: string;
    onVenueChange: (venueId: string | undefined) => void;
}

export default function VenueFilter({ venues, selectedVenueId, onVenueChange }: VenueFilterProps) {
    const color = useThemeColor();

    const handlePress = (venueId: string) => {
        // Only change if selecting a different venue (no deselection allowed)
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
        >
            {venues.map((venue: DisplayVenue) => {
                const isSelected = selectedVenueId === venue.venue_public_id;
                return (
                    <TouchableOpacity
                        key={venue.venue_public_id ?? ""}
                        onPress={() => handlePress(venue.venue_public_id ?? "")}
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
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}
