
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

export default function CategoryTab() {
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
                    paddingHorizontal: Spacing.xl,
                    gap: Spacing.s,
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
                                paddingHorizontal="l"
                                paddingVertical="s"
                                gap="m"
                                backgroundColor={color.natural_400}
                                style={{
                                    borderRadius: Spacing.pill,
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                {category.icon && (
                                    <Image
                                        source={{ uri: supabaseStorageUrl + category.icon }}
                                        style={{ width: Spacing.xl, height: Spacing.xl }}
                                    />
                                )}
                                <ThemedText type="caption1" color="natural_100" numberOfLines={1} ellipsizeMode="tail">{category.name}</ThemedText>
                            </Container>
                        </TouchableOpacity>
                    </Link>
                ))}
            </ScrollView>
        </Container>
    );
}
