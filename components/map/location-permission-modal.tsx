import { Container } from '@/components/ui/container';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedView } from '@/components/ui/themed-view';
import { Spacing } from '@/constants/theme';
import { PressableScale } from 'pressto';
import { Linking, Modal, StyleSheet } from 'react-native';

interface LocationPermissionModalProps {
    visible: boolean;
    onClose: () => void;
}

export function LocationPermissionModal({ visible, onClose }: LocationPermissionModalProps) {
    const onOpenSettings = () => {
        Linking.openSettings();
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent
            statusBarTranslucent
            animationType="fade"
            onRequestClose={onClose}
        >
            <ThemedView
                color="natural_600"
                style={[
                    StyleSheet.absoluteFill,
                    { opacity: 0.5 }
                ]}
            />
            <Container
                flex={1}
                justifyContent="center"
                alignItems="center"
                padding="s20"
            >
                <ThemedView
                    color="natural_600"
                    style={{
                        width: '100%',
                        borderRadius: Spacing.s32,
                        padding: Spacing.s16,
                        gap: Spacing.s16,
                    }}
                >
                    <Container gap="s8">
                        <ThemedText type="subhead" style={{ textAlign: 'center' }}>
                            位置情報が無効です
                        </ThemedText>
                        <ThemedText type="footnote" color="natural_200" style={{ textAlign: 'center' }}>
                            現在地を表示するには、{'\n'}
                            設定から位置情報を許可してください。
                        </ThemedText>
                    </Container>

                    <Container flexDirection="row" gap="s16">
                        <PressableScale
                            onPress={onClose}
                            style={{ flex: 1 }}
                        >
                            <Container
                                alignItems="center"
                                justifyContent="center"
                                paddingVertical="s12"
                                style={{
                                    borderRadius: Spacing.s16,
                                }}
                            >
                                <ThemedText type="subhead">キャンセル</ThemedText>
                            </Container>
                        </PressableScale>

                        <PressableScale
                            onPress={onOpenSettings}
                            style={{ flex: 1 }}
                        >
                            <ThemedView
                                color="natural_500"
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: Spacing.s16,
                                    paddingVertical: Spacing.s12,
                                }}
                            >
                                <ThemedText type="subhead" color="tint">設定を開く</ThemedText>
                            </ThemedView>
                        </PressableScale>
                    </Container>
                </ThemedView>
            </Container>
        </Modal>
    );
}