import { Row } from '@/components/ui/flex';
import { Icon } from '@/components/ui/icon';
import { useThemeColor } from '@/hooks/use-theme-color';
import { OrganizationDetails, Verified } from '@/supabase/api/types';
import { Linking, TouchableOpacity } from 'react-native';
import { Container } from '../ui/container';


export function OrganizationSns(data: Verified<OrganizationDetails>) {
    const color = useThemeColor();

    const hasSns =
        data.website || data.instagram || data.linkedin || data.twitter || data.youtube;

    if (!hasSns) return null;

    return (
        <Container
            borderRadius="pill"
            alignSelf="center"
            backgroundColor={color.natural_500}
        >
            <Row flexWrap="wrap" paddingHorizontal='s8'>
                {data.instagram && (
                    <TouchableOpacity
                        onPress={() => Linking.openURL(data.instagram!)}
                    >
                        <Container padding="s8">
                            <Icon icon="instagram" color={color.natural_200} />
                        </Container>
                    </TouchableOpacity>
                )}
                {data.linkedin && (
                    <TouchableOpacity
                        onPress={() => Linking.openURL(data.linkedin!)}
                    >
                        <Container padding="s8">
                            <Icon icon="linkedin" color={color.natural_200} />
                        </Container>
                    </TouchableOpacity>
                )}
                {data.twitter && (
                    <TouchableOpacity
                        onPress={() => Linking.openURL(data.twitter!)}
                    >
                        <Container padding="s8">
                            <Icon icon="twitter" color={color.natural_200} />
                        </Container>
                    </TouchableOpacity>
                )}
                {data.youtube && (
                    <TouchableOpacity
                        onPress={() => Linking.openURL(data.youtube!)}
                    >
                        <Container padding="s8">
                            <Icon icon="youtube" color={color.natural_200} />
                        </Container>
                    </TouchableOpacity>
                )}
                {data.website && (
                    <TouchableOpacity
                        onPress={() => Linking.openURL(data.website!)}
                    >
                        <Container padding="s8">
                            <Icon icon="link" color={color.natural_200} />
                        </Container>
                    </TouchableOpacity>
                )}
            </Row>
        </Container>
    );
}

