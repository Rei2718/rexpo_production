import { Container } from '@/components/ui/container';
import { Spacing } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { DisplayVenue, Verified } from '@/supabase/api/types';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useEffect, useMemo, useRef } from 'react';
import { Content } from './map-content';


interface SheetProps {
    data: Verified<DisplayVenue | null>;
    onClose: () => void;
}

export default function Sheet({ data, onClose }: SheetProps) {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const color = useThemeColor();
    const [contentData, setContentData] = React.useState<Verified<DisplayVenue> | null>(data);

    const snapPoints = useMemo(() => ['50%', '90%'], []);

    useEffect(() => {
        if (data) {
            setContentData(data);
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
            <BottomSheetScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
                {contentData && (
                    <Container paddingBottom="s20">
                        <Content {...contentData} />
                    </Container>
                )}
            </BottomSheetScrollView>
        </BottomSheetModal>
    );
}