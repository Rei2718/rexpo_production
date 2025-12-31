import { NO_DATA } from "@/constants/no-data";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TagEvents, Verified } from "@/supabase/api/types";
import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Container } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";


export function TagHeader(data: Verified<TagEvents>) {
    const color = useThemeColor();

    return (
        <Link
            href={{
                pathname: "/",
                params: { id: data.tag_public_id, name: data.name ?? NO_DATA },
            }}
            asChild
        >
            <TouchableOpacity>
                <Container gap="s4">
                    <Container flexDirection="row" alignItems="center" gap="none">
                        <ThemedText type="title3">{data.name ?? NO_DATA}</ThemedText>
                        <Icon icon="right" color={color.natural_200} />
                    </Container>
                    <ThemedText type="caption1" color="natural_200">
                        {data.caption ?? NO_DATA}
                    </ThemedText>
                </Container>
            </TouchableOpacity>
        </Link>
    );
}