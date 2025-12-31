# R-EXPO Application Development Guidelines

This document serves as the absolute rulebook for development within the R-EXPO project.
Adherence to these guidelines is mandatory. Deviations, personal interpretations, or "exceptions" are strictly prohibited unless explicitly authorized by the project lead in writing.

## 1. Core Philosophy (Non-Negotiable)

**"Pass Data Assets as Whole Chunks without Modification"**

- **Server-Side Sanitization**: The database must never output data with missing primary keys (IDs). All filtering of invalid data occurs here.
- **Type-Level Guarantee**: The API layer must guarantee to the frontend that IDs exist. The frontend must never doubt the existence of an ID.
- **No Data Modification**: The UI layer receives data objects whole. Destructuring, remapping, or creating intermediate types for props is prohibited.

## 2. Directory Structure and Roles

Data access logic is strictly consolidated within the `supabase/` directory.

### 2-1. API Layer (`supabase/api/`)

This directory contains ALL client-side data fetching logic.

- **`types.ts`**: The ONLY source of truth for application-wide type definitions.
  - **Utility Types**: `Nullable` (all properties nullable), `Verified` (converts `*_public_id` to string).
  - **Domain Types**: All domain entities (e.g., `EventOverview`).
- **`keys.ts`**: The ONLY place for defining TanStack Query Keys. Hardcoding string keys in components is prohibited.
- **`function.ts`**: Wrapper functions for Supabase RPC calls. This is the ONLY place where casting to `Verified<T>` is permitted.
- **`index.ts`**: Entry point for custom hooks. UI components must import hooks from here, never directly from `function.ts`.

### 2-2. Server Logic Layer (`supabase/sql/`)

- **`rpc/*.sql`**: Database functions (Stored Procedures). All business logic for data retrieval and filtering resides here.

## 3. Type Definitions (Strict Rules)

**File Location**: `supabase/api/types.ts` ONLY.

### 3-1. Utility Types (Mandatory)

These types must be defined and used.

```typescript
// 1. Nullable: All properties must be nullable to reflect DB reality.
export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// 2. Verified: The ONLY mechanism to guarantee ID existence.
// Transforms *_public_id from string | null to string.
export type Verified<T> = T & {
  [K in keyof T as K extends `${string}_public_id` ? K : never]: string
};
```

### 3-2. Domain Definitions (Mandatory Structure)

- **Rule**: Define all fields as `Nullable`.
- **Rule**: Do NOT use optional properties (`?`) or union types (`| null`) directly in domain definitions. Use the `Nullable` wrapper.

```typescript
// CORRECT
export type EventOverview = Nullable<{
  event_public_id: string;
  name: string;
  // ...
}>;

// INCORRECT (PROHIBITED)
export interface EventOverview {
  event_public_id: string | null; // Prohibited
  name?: string; // Prohibited
}
```

## 4. Server-Side Implementation Rules (RPC)

- **File Location**: `supabase/sql/rpc/*.sql`
- **Rule**: "Strict Parent, Flexible Child"

Filtering logic in SQL/PLpgSQL is strict and follows these exact rules:

- **Parent Object**: If the Primary Key (ID) is NULL, the entire row MUST be excluded.
- **Child Object/Array**: If a child's Primary Key is NULL, ONLY that child element is excluded. The parent remains.

**Implementation Requirement**:
Every SELECT statement returning entities must include a WHERE clause ensuring the ID is not null.

```sql
-- MANDATORY
WHERE e.event_public_id IS NOT NULL
```

## 5. Data Fetching and Naming Conventions

### 5-1. Naming Rules (No Exceptions)

- **API Return Value**: MUST be named `data`.
- **Component Argument (Domain-Dependent)**: MUST be named `data`.
- **Component Argument (Generic)**: May use `props` or specific names.
- **List Iteration Variable**: MUST be named `item`.
- **Exception for Multiple Fetches**: Only when a single file calls multiple APIs, variables may be renamed using the pattern: `[Entity]Data` (e.g., `eventsData`, `newsData`).

### 5-2. API Implementation Flow

1. Define Key in `keys.ts`.
2. Implement RPC wrapper in `function.ts` and cast result to `Verified<T>[]`.
3. Expose Hook via `index.ts`.

## 6. Component Implementation (UI)

**File Location**: `components/**/*.tsx`

### 6-1. Arguments and Props

- **Domain Components**: Must accept a single argument named `data`.
- **Type Annotation**: Must use `Verified<Type>` directly.
- **Destructuring**: Destructuring props in the function signature is PROHIBITED for Domain Components.

```typescript
// CORRECT:
export default function EventCard(data: Verified<EventOverview>) { ... }

// INCORRECT (PROHIBITED):
export default function EventCard({ name, image }: Verified<EventOverview>) { ... }
```

### 6-2. Implementation Logic

- **Guard Clauses**: Writing `if (!data.id) return null` is PROHIBITED. The `Verified` type guarantees existence.
- **Display Logic**: Handle null values for non-ID fields using conditional rendering (e.g., `data.image ? <Image... /> : null`).

### 6-3. Prohibitions (Strictly Enforced)

- **NO Intermediate Types**: Defining types like `type EventCardProps = ...` within component files is prohibited. Use `Verified<T>` directly.
- **NO Index Signatures**: Adding `& Record<string, unknown>` or `[key: string]: any` is prohibited.
- **NO Nullable Props**: The prop itself (`data`) must NOT be nullable (`Verified<T> | null`). The API is guaranteed to return an array (empty or populated), never null for the list itself.
- **NO Renaming**: Renaming the `data` prop to `event`, `info`, `item`, etc., is prohibited in Domain Components.

**Example of Prohibited Code**:

```typescript
// ❌ STRICTLY PROHIBITED
type EventListData = Verified<EventSummary> & Record<string, unknown>; // Custom type & unsafe record

export function EventList({ data }: { data: EventListData[] | null }) { // Nullable prop
   if (!data) return null; // Unnecessary guard
   // ...
}
```

**Example of Mandated Code**:

```tsx
// ✅ MANDATORY STYLE
// Parent Component
<FlatList
  data={listData}
  renderItem={({ item }) => <EventCard data={item} />} // Pass as 'data' prop
/>

// Child Component (EventCard.tsx)
import { Verified, EventOverview } from '@/supabase/api/types';

export default function EventCard({ data }: { data: Verified<EventOverview> }) {
   // Access via data.name, data.event_public_id, etc.
   return (
     <Pressable onPress={() => router.push(`/event/${data.event_public_id}`)}>
       <Text>{data.name}</Text>
     </Pressable>
   );
}
```