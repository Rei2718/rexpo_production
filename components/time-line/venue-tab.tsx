import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useDisplayVenue } from "@/supabase/api";
import { DisplayVenue } from "@/supabase/api/types";
import { ScrollView, TouchableOpacity } from "react-native";
import { Container } from "../ui/container";
import { StatusMessage } from "../ui/status-message";
import { ThemedText } from "../ui/themed-text";

interface VenueTabProps {
    selectedVenueId?: string;
    onVenueChange: (venueId: string | undefined) => void;
}

export default function VenueTab({ selectedVenueId, onVenueChange }: VenueTabProps) {
    const color = useThemeColor();

    const { data: venues, isPending, isError } = useDisplayVenue();
    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!venues) return <StatusMessage status="empty" />;

    const handlePress = (venueId: string) => {
        onVenueChange(selectedVenueId === venueId ? undefined : venueId);
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
                        key={venue.venue_public_id}
                        onPress={() => handlePress(venue.venue_public_id)}
                    >
                        <Container
                            paddingHorizontal="s24"
                            paddingVertical="s12"
                            gap="s12"
                            backgroundColor={isSelected ? color.tint : color.natural_500}
                            style={{
                                borderRadius: Spacing.pill,
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <ThemedText type="caption1" numberOfLines={1} ellipsizeMode="tail">{venue.name}</ThemedText>
                        </Container>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}
