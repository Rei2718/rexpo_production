import { Box } from '@/components/ui/layout/Box';
import { Column, Row } from '@/components/ui/layout/Flex';
import { ThemedText } from '@/components/ui/themed-text';
import { FALLBACK_IMAGE_URL } from '@/constants/fallback-image';
import { spacing } from '@/constants/theme';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { CardProps } from '../types';

export function Card({ item }: CardProps) {
    return (
        <Link
            href={{
                pathname: "/event-detail",
                params: { id: item.id },
            }}
            asChild
        >
            <Pressable>
                <Row>
                    <Image
                        source={item.logo_url ? item.logo_url : FALLBACK_IMAGE_URL}
                        style={{
                            width: spacing.xxxl,
                            height: spacing.xxxl,
                            borderRadius: 18, // radii.l
                        }}
                    />

                    <Column flex={1} marginHorizontal="m" gap="xs">
                        <ThemedText type="body" numberOfLines={1}>
                            {item.title}
                        </ThemedText>
                        <ThemedText type="caption1" color="textSecondary" numberOfLines={1}>
                            {item.overview_description}
                        </ThemedText>
                    </Column>

                    <Box
                        backgroundColor="backgroundSecondary"
                        borderRadius="pill"
                        paddingVertical="s"
                        paddingHorizontal="xl"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <ThemedText type="caption1" color="tint">
                            詳細
                        </ThemedText>
                    </Box>
                </Row>
            </Pressable>
        </Link>
    );
}
