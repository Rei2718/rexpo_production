import { Container } from '@/components/ui/container';
import { ThemedText } from '@/components/ui/themed-text';
import { CREDITS_DATA } from '@/constants/credits';
import { Spacing } from '@/constants/theme';
import { useBottomPadding } from '@/hooks/use-bottom-padding';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Stack } from 'expo-router';
import { Image, SectionList, useColorScheme, View } from 'react-native';

export default function CreditsScreen() {
    const color = useThemeColor();
    const { modal } = useBottomPadding();
    const theme = useColorScheme() ?? 'light';

    // Transform data for SectionList
    const sections = CREDITS_DATA.map((section) => {
        if (section.type === 'grid') {
            return {
                ...section,
                data: [section.data], // Pass the whole array as a single item
            };
        }
        return section;
    });

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "クレジット",
                }}
            />
            <SectionList
                sections={sections as any}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                    paddingTop: Spacing.s20,
                    paddingBottom: modal + Spacing.s20,
                    paddingHorizontal: Spacing.s20,
                }}
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
                contentInsetAdjustmentBehavior="automatic"
                style={{ backgroundColor: color.natural_600 }}

                ListHeaderComponent={
                    <Container alignItems="center" paddingTop="s20" paddingBottom="s40">
                        <Image
                            source={theme === 'dark' ? require('@/assets/logo/ios-light.png') : require('@/assets/logo/ios-dark.png')}
                            style={{ width: Spacing.s80, height: Spacing.s80, borderRadius: Spacing.s16, marginBottom: Spacing.s16 }}
                        />
                        <ThemedText type="callout" color="natural_200" style={{ textAlign: 'center', marginBottom: Spacing.s24 }}>
                            R-EXPO 2026
                        </ThemedText>

                        <Container paddingHorizontal="s12">
                            <ThemedText type="caption1" color="tint" style={{ textAlign: 'center', lineHeight: 20 }}>
                                本アプリは、学校関係者および {"\n"}
                                外部パートナー様の多大なるご協力のもと{"\n"}
                                生徒の手によって企画・開発・運営されています
                            </ThemedText>
                        </Container>
                    </Container>
                }

                renderSectionHeader={({ section: { title } }) => (
                    <Container paddingTop="s24" paddingBottom="s8">
                        <ThemedText type="caption1" color="natural_200">
                            {title}
                        </ThemedText>
                    </Container>
                )}
                renderItem={({ item, section }) => {
                    if (section.type === 'grid') {
                        const names = item as string[];
                        return (
                            <Container flexDirection="row" flexWrap="wrap">
                                {names.map((name, index) => (
                                    <Container
                                        key={index}
                                        style={{ flexBasis: '33.33%', flexGrow: 0 }}
                                        paddingVertical="s8"
                                        paddingHorizontal="s4"
                                        alignItems="flex-start"
                                        justifyContent="center"
                                    >
                                        <ThemedText type="callout">
                                            {name}
                                        </ThemedText>
                                    </Container>
                                ))}
                            </Container>
                        );
                    }
                    return (
                        <Container paddingVertical="s4">
                            <ThemedText type="callout">{item as string}</ThemedText>
                        </Container>
                    );
                }}
                ItemSeparatorComponent={() => <View style={{ height: Spacing.s4 }} />}
                SectionSeparatorComponent={() => <View style={{ height: Spacing.s8 }} />}
            />
        </>
    );
}