import { Container } from '@/components/ui/container';
import { Spacing } from '@/constants/theme';
import { useScreenView } from '@/hooks/use-screen-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Content } from './map-content';


interface SheetProps {
    data: Verified<DisplayVenue | null>;
    onClose: () => void;
}

export default function Sheet({ data, onClose }: SheetProps) {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const color = useThemeColor();
    const [contentData, setContentData] = React.useState<Verified<DisplayVenue> | null>(data);

    const snapPoints = useMemo(() => ['50%', '90%'], []);

    useEffect(() => {
        if (data) {
            setContentData(data);
            bottomSheetRef.current?.snapToIndex(0);
        } else {
            bottomSheetRef.current?.close();
        }
    }, [data]);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            onClose();
        }
    }, [onClose]);

    useScreenView({
        screen: 'map',
        label: contentData ? `Venue: ${contentData.name}` : 'Map Bottom Sheet',
        isReady: !!data,
    });

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={data ? 0 : -1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
            backgroundStyle={{ backgroundColor: color.natural_600, borderRadius: Spacing.s36 }}
            handleStyle={{ height: Spacing.s20 }}
            handleIndicatorStyle={{ backgroundColor: color.natural_300 }}
        >
            <BottomSheetScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
                {contentData && (
                    <Container paddingBottom="s20">
                        <Content {...contentData} />
                    </Container>
                )}
            </BottomSheetScrollView>
        </BottomSheet>
    );
}