# PostHog Tracking Implementation

We have implemented a comprehensive tracking system for user interactions and screen views using PostHog.

## 1. Screen Tracking
Screen views are automatically tracked.
- **Mechanism**: A `usePathname` listener is active in `app/_layout.tsx` (via `<ScreenTracker />`).
- **Event Name**: `Screen` (or `$screen`)
- **Properties**: 
    - `$screen_name`: The current path or explicit name (e.g., `event-details`, `/home`).
    - `name` / `id`: Available when viewing specific content.

## 2. Interaction Tracking (PressableScale)
All buttons using `PressableScale` are now capable of auto-tracking.

### Default Behavior
When a `PressableScale` is pressed, it captures a `button_pressed` event.
The system attempts to identify the button in this order:
1. `eventLabel` prop (Recommended)
2. `accessibilityLabel` prop
3. Text content (if the child is a simple string)
4. Fallback: `"unknown_button"`

### How to Use
To ensure high-quality analytics data, pass a descriptive `eventLabel` prop when using `PressableScale`, especially for icons or complex content.

```tsx
<PressableScale 
    onPress={handlePress} 
    eventLabel="close_menu" // Explicit label
    eventProperties={{ context: "header" }} // Optional extra data
>
    <Icon icon="close" />
</PressableScale>
```

## 3. Dashboard Configuration (Critical)

By default, PostHog's "Live" or "Activity" feed only shows the standard columns. To see the detailed data we are sending, you must configure the columns.

### Recommended Columns

Go to **Configure columns** (or "SQL expression" in the column editor) and add the following:

| Column Header | SQL Expression | Description |
| :--- | :--- | :--- |
| **Action / Label** | `properties.label` |Shows which button was pressed (e.g., `toggle_bookmark`, `menu_open`). |
| **Content Name** | `properties.name` | Shows the name of the Event or Organization being viewed. |
| **Bookmark Action** | `properties.action` | Shows `add` or `remove` for bookmarks. |
| **Screen Name** | `properties.$screen_name` | Shows the specific screen name (e.g., `event-details`). |

### Unified "Activity" Column SQL

Copy and paste the following into the **SQL expression** field.
This will create a single column named **Activity** that categorizes actions into Screen, Bookmark, and Button.

```sql
concat(
    if(properties.label = 'toggle_bookmark', 'Bookmark: ', 
        if(event = '$screen', 'Screen: ', 'Button: ')
    ),
    coalesce(properties.label, properties.$screen_name),
    if(properties.name is not null, concat(' - ', properties.name), '')
)
```

**Important**: The `AS Activity` syntax is not supported in this field. Please use the **pencil icon (✎)** next to the column name in the list to rename it to "Activity" after adding the expression.