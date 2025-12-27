import { useThemeColor } from '@/hooks/use-theme-color';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
    const color = useThemeColor();

    return (
        <NativeTabs
            minimizeBehavior="automatic"
            disableTransparentOnScrollEdge
            backgroundColor={color.natural_600}
            tintColor={color.tint}
            indicatorColor={color.natural_400}
        >
            <NativeTabs.Trigger name="index">
                <Label>ホーム</Label>
                <Icon
                    sf={"house.fill"}
                    androidSrc={{
                        default: require("@/assets/msIconImage/homeDarkOff.png"),
                        selected: require("@/assets/msIconImage/homeDarkTint.png")
                    }}
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="explore">
                <Label>探索</Label>
                <Icon
                    sf={"square.stack.3d.up.fill"}
                    androidSrc={{
                        default: require("@/assets/msIconImage/exploreDarkOff.png"),
                        selected: require("@/assets/msIconImage/exploreDarkTint.png")
                    }}
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="time-line">
                <Label>タイムライン</Label>
                <Icon
                    sf={"clock.fill"}
                    androidSrc={{
                        default: require("@/assets/msIconImage/clockDarkOff.png"),
                        selected: require("@/assets/msIconImage/clockDarkTint.png")
                    }}
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="map">
                <Label>マップ</Label>
                <Icon
                    sf={"map.fill"}
                    androidSrc={{
                        default: require("@/assets/msIconImage/mapDarkOff.png"),
                        selected: require("@/assets/msIconImage/mapDarkTint.png")
                    }}
                />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}