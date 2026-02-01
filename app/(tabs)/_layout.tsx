import { useThemeColor } from '@/hooks/use-theme-color';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
    const color = useThemeColor();

    return (
        <NativeTabs
            disableTransparentOnScrollEdge
            backgroundColor={color.natural_600}
            tintColor={color.tint}
            indicatorColor={color.natural_400}
        >
            {/* 
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
            */}
            <NativeTabs.Trigger name="index">
                <Label>ホーム</Label>
                <Icon
                    sf={"house.fill"}
                    androidSrc={{
                        default: require("@/assets/msIconImage/homeOff.png"),
                        selected: require("@/assets/msIconImage/homeTint.png")
                    }}
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="ranking">
                <Label>ランキング</Label>
                <Icon
                    sf={"trophy.fill"}
                    androidSrc={{
                        default: require("@/assets/msIconImage/crownOff.png"),
                        selected: require("@/assets/msIconImage/crownTint.png")
                    }}
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="time-line">
                <Label>タイムライン</Label>
                <Icon
                    sf={"clock.fill"}
                    androidSrc={{
                        default: require("@/assets/msIconImage/clockOff.png"),
                        selected: require("@/assets/msIconImage/clockTint.png")
                    }}
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="bookmark">
                <Label>ブックマーク</Label>
                <Icon
                    sf={"bookmark.fill"}
                    androidSrc={{
                        default: require("@/assets/msIconImage/bookmarkOff.png"),
                        selected: require("@/assets/msIconImage/bookmarkTint.png")
                    }}
                />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}