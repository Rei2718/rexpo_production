import { usePostHogOptOut } from '@/hooks/use-posthog-opt-out';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useColorScheme } from 'react-native';

export const useDataCollectionActionSheet = () => {
    const { isOptedIn, setOptIn } = usePostHogOptOut();
    const { showActionSheetWithOptions } = useActionSheet();
    const colors = useThemeColor();
    const colorScheme = useColorScheme();

    const showDataCollectionActionSheet = () => {
        showActionSheetWithOptions(
            {
                options: ['オン', 'オフ', 'キャンセル'],
                cancelButtonIndex: 2,
                destructiveButtonIndex: 2,
                userInterfaceStyle: colorScheme ?? 'light',
                containerStyle: {
                    backgroundColor: colors.natural_500,
                    borderRadius: 20,
                    margin: 20,
                },
                textStyle: {
                    color: colors.natural_100,
                },
                tintColor: colors.tint,
                titleTextStyle: {
                    color: colors.natural_200,
                },
                messageTextStyle: {
                    color: colors.natural_200,
                },
            },
            (buttonIndex) => {
                if (buttonIndex === 0) setOptIn(true);
                if (buttonIndex === 1) setOptIn(false);
            }
        );
    };

    return {
        showDataCollectionActionSheet,
        dataCollectionLabel: isOptedIn ? 'オン' : 'オフ',
    };
};
