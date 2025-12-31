---
trigger: always_on
---

# UI Implementation & Style Guide

This document outlines the strict standards for UI implementation within the R-EXPO project.
Consistency in styling, component usage, and imports is mandatory to maintain a high-quality codebase.

## 1. Theme & Colors (Strict Rule)

**Principle**: Never hardcode colors. Always adapt to the active theme (light/dark) dynamically.

### 1-1. Accessing Colors

To apply colors in styles, **ALWAYS** retrieve the current theme palette using the `useThemeColor` hook at the top of the component.

* **Mandatory Pattern**:
```typescript
const color = useThemeColor();

```


* **Usage**: Access colors via the returned object.
```typescript
// CORRECT
backgroundColor: color.natural_500
borderBottomColor: color.natural_400

```


* **Prohibitions**:
* ❌ **Direct Import**: Do NOT import the `Colors` constant directly from `@/constants/theme`.
* ❌ **Magic Strings**: Do NOT use hex codes (e.g., `#FFFFFF`, `#000`) or string literals (e.g., `'red'`) in styles.
* ❌ **Hardcoded Prop**: Do NOT pass string literals to color props (e.g., `color="red"`).



## 2. Typography

**Principle**: Use the dedicated text component to ensure consistent font families and sizes.

### 2-1. Component Usage

* **Mandatory Component**: Use `ThemedText` for **ALL** text rendering. Do not use the raw React Native `Text` component unless strictly necessary for third-party integration.

### 2-2. Text Styling

* **Type Prop**: Control font size, weight, and line height using the `type` prop, which maps to the design system.
```tsx
// CORRECT
<ThemedText type="title1">Page Title</ThemedText>
<ThemedText type="caption1">Auxiliary Text</ThemedText>

```


* **Customization**: Avoid manual `fontSize` or `fontWeight` in the `style` prop. Rely on the `type` presets defined in `@/constants/theme` (e.g., `body`, `headline`, `subhead`).

## 3. Layout & Spacing

**Principle**: All spatial relationships must be defined using the design system's spacing scale.

### 3-1. Spacing Constants

* **Source**: Import `Spacing` from `@/constants/theme`.
* **Usage**: Use `Spacing.s*` keys for all `margin`, `padding`, `gap`, `borderRadius`, and fixed dimensions.
```typescript
// CORRECT
import { Spacing } from "@/constants/theme";

styles = StyleSheet.create({
  container: {
    padding: Spacing.s16,
    gap: Spacing.s8,
    borderRadius: Spacing.s20,
  }
})

```


* **Prohibitions**:
* ❌ **Magic Numbers**: Never use raw numbers for spacing (e.g., `padding: 15`).
* ❌ **Approximations**: Do not "eyeball" values. If a design looks like 18px, use the closest defined spacing (e.g., `Spacing.s16` or `Spacing.s20`).



### 3-2. Screen Containers (Scrollable)

* **Standard Padding**:
* **Horizontal**: Scrollable containers MUST apply `Spacing.s20` to the left and right edges (`paddingHorizontal`).
* **Bottom**: Scrollable containers MUST apply `Spacing.s20` to the bottom (`paddingBottom`) to ensure content is not cut off at the screen edge.
* **Implementation**: Typically applied via `contentContainerStyle` in `FlatList` or `ScrollView`.


```typescript
// Example
contentContainerStyle={{
  paddingHorizontal: Spacing.s20,
  paddingBottom: Spacing.s20,
}}

```



## 4. Component Architecture

### 4-1. Themed Views

* **Standard**: Prefer `ThemedView` over `View` whenever the component requires a background color that should adapt to the theme (e.g., cards, screens, containers).
* **Usage**:
```tsx
<ThemedView style={{ flex: 1 }}>
  {/* Content */}
</ThemedView>

```



### 4-2. Icons

* **Library**: Use the custom `Icon` component wrapper (if available) or standard vector icons that respect the theme color.
* **Coloring**: Pass `color.natural_*` or `color.tint` derived from the hook to icons.

## 5. Imports & File Structure

### 5-1. Path Aliases

* **Mandatory**: Always use the `@/` alias for project-internal imports.
```typescript
// CORRECT
import { ThemedText } from "@/components/ui/themed-text";

// INCORRECT
import { ThemedText } from "../../components/ui/themed-text";

```



### 5-2. Colocation

* **Styles**: `StyleSheet.create` should be defined at the bottom of the file or in a separate file if it becomes too large.