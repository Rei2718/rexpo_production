import { useThemeColor } from "@/hooks/use-theme-color";
import { TagEvents } from "@/supabase/api/types";
import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Container } from "../ui/container";
import { Icon } from "../ui/icon";
import { ThemedText } from "../ui/themed-text";


export function TagHeader({ item }: { item: TagEvents }) {
    const color = useThemeColor();

    return (
        <Link
            href={{
                pathname: "/",
                params: { id: item.tag_public_id, name: item.name },
            }}
            asChild
        >
            <TouchableOpacity>
                <Container gap="s4">
                    <Container flexDirection="row" alignItems="center" gap="none">
                        <ThemedText type="title3">{item.name}</ThemedText>
                        <Icon icon="right" color={color.natural_200} />
                    </Container>
                    <ThemedText type="caption1" color="natural_200">
                        {item.caption}
                    </ThemedText>
                </Container>
            </TouchableOpacity>
        </Link>
    );
}
