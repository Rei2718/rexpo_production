import { Container } from '@/components/ui/container';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useEffect, useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { VenueContent } from './venue-content';


interface MapBottomSheetProps {
    data: Verified<DisplayVenue> | null;
    onClose: () => void;
}

export default function MapBottomSheet({ data, onClose }: MapBottomSheetProps) {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const color = useThemeColor();

    const snapPoints = useMemo(() => ['50%', '90%'], []);

    useEffect(() => {
        if (data) {
            bottomSheetRef.current?.present();
        } else {
            bottomSheetRef.current?.dismiss();
        }
    }, [data]);

    return (
        <BottomSheetModal
            ref={bottomSheetRef}
            enableDynamicSizing={false}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backgroundStyle={{ backgroundColor: color.natural_600, borderRadius: Spacing.s36 }}
            handleStyle={{ height: Spacing.s20 }}
            handleIndicatorStyle={{ backgroundColor: color.natural_300 }}
            onDismiss={onClose}
        >
            <BottomSheetScrollView
                style={styles.sheetView}
                contentContainerStyle={styles.contentContainer}
            >
                {data && (
                    <Container flex={1}>
                        <VenueContent {...data} />
                    </Container>
                )}
            </BottomSheetScrollView>
        </BottomSheetModal>
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