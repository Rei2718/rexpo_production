import { OrganizationDescription } from "@/components/organization-details/description";
import { OrganizationGallery } from "@/components/organization-details/gallery";
import { OrganizationHeader } from "@/components/organization-details/header";
import { OrganizationSns } from "@/components/organization-details/sns";
import { Column } from "@/components/ui/flex";
import { StatusMessage } from "@/components/ui/status-message";
import { Spacing } from "@/constants/theme";
import { useOrganizationDetails } from "@/supabase/api";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";


export default function OrganizationDetailsScreen() {
    const { organization_public_id } = useLocalSearchParams<{ organization_public_id: string }>();
    const { data, isPending, isError } = useOrganizationDetails(organization_public_id);

    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!data) return <StatusMessage status="empty" />;

    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={styles.container}
            >
                <Column gap="s32">

                    {/* Header */}
                    <OrganizationHeader {...data} />

                    {/* Info */}
                    <OrganizationSns {...data} />

                    {/* Gallery */}
                    <OrganizationGallery {...data} />

                    {/* Overview */}
                    <Column paddingHorizontal="s20">
                        <OrganizationDescription {...data} />
                    </Column>

                </Column >
            </ScrollView >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: Spacing.s20,
    },
});