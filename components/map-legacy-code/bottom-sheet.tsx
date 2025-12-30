import { useThemeColor } from '@/hooks/use-theme-color';
import { Venue } from '@/supabase/api/type';
import GorhomBottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Column } from '../ui/flex';
import VenueProfile from './profile';

interface BottomSheetProps {
    venue: Venue | null;
    onClose: () => void;
}

const BottomSheet = ({ venue, onClose }: BottomSheetProps) => {
    const bottomSheetRef = useRef<GorhomBottomSheet>(null);
    const color = useThemeColor();

    useEffect(() => {
        if (venue) {
            bottomSheetRef.current?.snapToIndex(0);
        } else {
            bottomSheetRef.current?.close();
        }
    }, [venue]);

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
            onChange={(index) => {
                if (index === -1) {
                    onClose();
                }
            }}
        >
            <BottomSheetScrollView
                style={styles.sheetView}
                contentContainerStyle={styles.contentContainer}
            >
                <Column flex={1}>
                    {venue && <VenueProfile data={venue} />}
                </Column>
            </BottomSheetScrollView>
        </GorhomBottomSheet>
    );
};

export default React.memo(BottomSheet);

const styles = StyleSheet.create({
    sheetView: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
});