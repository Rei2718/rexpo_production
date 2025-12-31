import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { DisplayVenue, Verified } from "@/supabase/api/types";
import { ScrollView, TouchableOpacity } from "react-native";
import { Container } from "../ui/container";
import { ThemedText } from "../ui/themed-text";

interface VenueFilterProps {
    venues: Verified<DisplayVenue>[]; // Verified型を使用
    selectedVenueId?: string;
    onVenueChange: (venueId: string | undefined) => void;
}

export default function VenueFilter(props: VenueFilterProps) {
    const color = useThemeColor();
    const { venues, selectedVenueId, onVenueChange } = props;

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
        >
            {venues.map((venue) => {
                const isSelected = selectedVenueId === venue.venue_public_id;
                return (
                    <TouchableOpacity
                        // 修正: ?? "" を削除 (Verifiedによりstring保証)
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
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}