import { Spacing } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useCategories } from "@/supabase/api";
import { Category } from "@/supabase/api/types";
import { supabaseStorageUrl } from "@/supabase/supabase";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Container } from "../ui/container";
import { StatusMessage } from "../ui/status-message";
import { ThemedText } from "../ui/themed-text";

export default function CategoryFilter() {
    const color = useThemeColor();

    const { data: categories, isPending, isError } = useCategories();
    if (isPending) return <StatusMessage status="loading" />;
    if (isError) return <StatusMessage status="error" />;
    if (!categories) return <StatusMessage status="empty" />;

    return (
        <Container>

            {/* Category Tab */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: Spacing.s20,
                    gap: Spacing.s8,
                }}
            >
                {categories.map((category: Category) => (
                    <Link
                        key={category.category_public_id}
                        href={{
                            pathname: "/",
                            params: { id: category.category_public_id, name: category.name },
                        }}
                        asChild
                    >
                        <TouchableOpacity>
                            <Container
                                paddingHorizontal="s16"
                                paddingVertical="s8"
                                gap="s12"
                                backgroundColor={color.natural_500}
                                style={{
                                    borderRadius: Spacing.pill,
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                {category.icon && (
                                    <Image
                                        source={{ uri: supabaseStorageUrl + category.icon }}
                                        style={{ width: Spacing.s24, height: Spacing.s24 }}
                                    />
                                )}
                                <ThemedText type="caption1" numberOfLines={1} ellipsizeMode="tail">{category.name}</ThemedText>
                            </Container>
                        </TouchableOpacity>
                    </Link>
                ))}
            </ScrollView>
        </Container>
    );
}
