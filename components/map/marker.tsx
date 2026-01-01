import { Icon } from '@/components/ui/icon';
import { useThemeColor } from '@/hooks/use-theme-color';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { useEffect, useState } from 'react';
import { MarkerPressEvent, Marker as RNMarker } from 'react-native-maps';

interface MarkerProps {
    venue: Verified<DisplayVenue>;
    isSelected: boolean;
    onSelect?: (venue: Verified<DisplayVenue>) => void;
}

export default function Marker({ venue, isSelected, onSelect }: MarkerProps) {
    const [tracksViewChanges, setTracksViewChanges] = useState(true);
    const color = useThemeColor();

    const onIconLoad = () => {
        setTracksViewChanges(false);
    };

    useEffect(() => {
        setTracksViewChanges(true);
    }, [isSelected]);

    return (
        venue.map_latitude && venue.map_longitude ? (
            <RNMarker
                coordinate={{
                    latitude: venue.map_latitude,
                    longitude: venue.map_longitude,
                }}
                onPress={(e: MarkerPressEvent) => {
                    e.stopPropagation();
                    onSelect?.(venue);
                }}
                tracksViewChanges={tracksViewChanges}
            >
                <Icon
                    icon={isSelected ? "locationOnFill" : "locationOn"}
                    size={32}
                    color={color.tint}
                    onLoad={onIconLoad}
                />
            </RNMarker>
        ) : null
    );
}
