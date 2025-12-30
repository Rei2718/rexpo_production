import { Icon } from '@/components/ui/icon';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Venue } from '@/supabase/api/type';
import React, { memo, useEffect, useState } from 'react';
import { Marker } from 'react-native-maps';

interface VenueMarkerProps {
    venue: Venue;
    isSelected: boolean;
    onSelect?: (venue: Venue) => void;
}

const VenueMarker = memo(({ venue, isSelected, onSelect }: VenueMarkerProps) => {
    const [tracksViewChanges, setTracksViewChanges] = useState(true);

    const onIconLoad = () => {
        setTracksViewChanges(false);
    };

    useEffect(() => {
        setTracksViewChanges(true);
    }, [isSelected]);

    const color = useThemeColor();

    return (
        <Marker
            coordinate={{
                latitude: venue.map_latitude,
                longitude: venue.map_longitude,
            }}
            onPress={(e) => {
                e.stopPropagation();
                if (onSelect) {
                    onSelect(venue);
                }
            }}
            tracksViewChanges={tracksViewChanges}
        >
            <Icon
                icon={isSelected ? "locationOnFill" : "locationOn"}
                size={32}
                color={isSelected ? color.tint : color.tint}
                onLoad={onIconLoad}
            />
        </Marker>
    );
});

VenueMarker.displayName = 'VenueMarker';

export default VenueMarker;