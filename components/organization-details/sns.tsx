import { Row } from '@/components/ui/flex';
import { Icon } from '@/components/ui/icon';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Spacing } from '@/constants/theme';
import { useInAppBrowser } from '@/hooks/use-in-app-browser';
import { useThemeColor } from '@/hooks/use-theme-color';
import { OrganizationDetails, Verified } from '@/supabase/api/types';
import { Container } from '../ui/container';


export function OrganizationSns(data: Verified<OrganizationDetails>) {
    const color = useThemeColor();
    const openInAppBrowser = useInAppBrowser();

    return (
        <Container
            borderRadius="pill"
            alignSelf="center"
            backgroundColor={color.natural_500}
            style={{
                borderWidth: Spacing.s1,
                borderColor: color.border,
            }}
        >
            <Row flexWrap="wrap" paddingHorizontal="s8">
                {data.website && (
                    <PressableScale
                        onPress={() => openInAppBrowser(data.website!)}
                    >
                        <Container padding="s8">
                            <Icon icon="link" color={color.natural_200} />
                        </Container>
                    </PressableScale>
                )}
                {data.instagram && (
                    <PressableScale
                        onPress={() => openInAppBrowser(data.instagram!)}
                    >
                        <Container padding="s8">
                            <Icon icon="instagram" color={color.natural_200} />
                        </Container>
                    </PressableScale>
                )}
                {data.linkedin && (
                    <PressableScale
                        onPress={() => openInAppBrowser(data.linkedin!)}
                    >
                        <Container padding="s8">
                            <Icon icon="linkedin" color={color.natural_200} />
                        </Container>
                    </PressableScale>
                )}
                {data.twitter && (
                    <PressableScale
                        onPress={() => openInAppBrowser(data.twitter!)}
                    >
                        <Container padding="s8">
                            <Icon
                                icon="twitter"
                                color={color.natural_200}
                                size={26}
                            />
                        </Container>
                    </PressableScale>
                )}
                {data.youtube && (
                    <PressableScale
                        onPress={() => openInAppBrowser(data.youtube!)}
                    >
                        <Container padding="s8">
                            <Icon icon="youtube" color={color.natural_200} />
                        </Container>
                    </PressableScale>
                )}
            </Row>
        </Container>
    );
}

