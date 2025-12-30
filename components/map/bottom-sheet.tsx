import { Container } from '@/components/ui/container';
import { useThemeColor } from '@/hooks/use-theme-color';
import GorhomBottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import VenueProfile from './venue-profile';

interface MapBottomSheetProps {
    venuePublicId: string | null;
    onClose: () => void;
}

export default function MapBottomSheet({ venuePublicId, onClose }: MapBottomSheetProps) {
    const bottomSheetRef = useRef<GorhomBottomSheet>(null);
    const color = useThemeColor();

    useEffect(() => {
        if (venuePublicId) {
            bottomSheetRef.current?.snapToIndex(0);
        } else {
            bottomSheetRef.current?.close();
        }
    }, [venuePublicId]);

    return (
        <GorhomBottomSheet
            ref={bottomSheetRef}
            index={-1}
            enableDynamicSizing={false}
            snapPoints={["50%", '90%']}
            enablePanDownToClose={true}
            backgroundStyle={{ backgroundColor: color.natural_600 }}
            handleIndicatorStyle={{ backgroundColor: color.natural_300 }}
            onClose={onClose}
            onChange={(index: number) => {
                if (index === -1) {
                    onClose();
                }
            }}
        >
            <BottomSheetScrollView
                style={styles.sheetView}
                contentContainerStyle={styles.contentContainer}
            >
                <Container flex={1}>
                    {venuePublicId && <VenueProfile venuePublicId={venuePublicId} />}
                </Container>
            </BottomSheetScrollView>
        </GorhomBottomSheet>
    );
}

const styles = StyleSheet.create({
    sheetView: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
});
