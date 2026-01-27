import { Container } from "@/components/ui/container";
import { StatusMessage } from "@/components/ui/status-message";
import { ThemedText } from "@/components/ui/themed-text";
import { useBottomPadding } from "@/hooks/use-bottom-padding";
import { useScreenView } from "@/hooks/use-screen-view";
import { useFoods } from "@/supabase/api";
import { Stack } from "expo-router";
import { FoodList } from "./food-list";


export default function FoodScreen() {
    const { data, isPending, isError } = useFoods();
    const { modal: bottom } = useBottomPadding();

    useScreenView({
        screen: 'food',
        label: 'Food',
        isReady: !!data,
    });

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data || data.length === 0) return <StatusMessage status="empty" />;

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "フード"
                }}
            />
            <FoodList
                data={data}
                contentContainerStyle={{ paddingBottom: bottom }}
                ListHeaderComponent={
                    <Container paddingBottom="s16" alignItems="center">
                        <ThemedText type="caption1" color="natural_200">
                            本情報（マップ）は、来場者の利便性向上を目的として、会場周辺にある飲食店の情報を以下の掲載基準に照らし、一覧化したものです。{'\n'}{'\n'}
                            ・徒歩20分圏内{'\n'}
                            ・一般来客を受け入れている飲食店{'\n'}
                            ・Googleマップ等で常時公開されている店舗{'\n'}{'\n'}
                            本情報（マップ）は、特定の店舗を推奨・斡旋するものではありません。営業時間・定休日・混雑状況等は変更される場合がありますので、ご利用の際は各店舗へ直接ご確認ください。
                            また、行事開催時間帯の前後は周辺飲食店が大変混雑する場合があります。時間に余裕をもってのご利用、または分散利用にご協力ください。
                        </ThemedText>
                    </Container>
                }
            />
        </>
    );
}