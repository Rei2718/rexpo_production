# R-EXPO アプリ開発ガイドライン

本プロジェクトでは、データの取得から表示まで、以下の原則に基づいた開発ルールを採用しています。
一貫性のあるコードと堅牢なアプリケーション構築のため、本ガイドラインに従ってください。

## 1. 基本思想 (Core Philosophy)

**「データは加工せず、塊（Data Asset）として受け渡す」**

- **サーバーサイド (RPC/SQL)**: データベースから出力される時点で「ID欠損データ（ゴミデータ）」を排除します。
- **API層**: フロントエンドに対し、「IDは必ず存在する」ことを型レベルで保証して返却します。
- **クライアントサイド (UI)**: 受け取ったデータは加工せず、スプレッド構文で丸ごとコンポーネントへ受け渡し、再定義や分割代入による加工を行いません。

## 2. ディレクトリ構成と役割 (Directory Structure)

データアクセス層を `supabase/` ディレクトリに集約し、役割を厳格に分離しています。

### 2-1. API層 (`supabase/api/`)
クライアントサイドのデータ取得ロジックを集約します。

- **`types.ts`**: アプリケーション全体の型定義。
    - Utility Types: `Nullable`（全項目null許容）、`Verified`（ID必須化）
    - Domain Types: `EventOverview` などのデータ型定義
- **`keys.ts`**: TanStack Query (React Query) 用の Query Key 定数管理。
- **`function.ts`**: Supabase Client を使用した RPC 呼び出しのラッパー関数群。`Verified` 型へのキャストはここで行います。
- **`index.ts`**: UIコンポーネントから呼び出すカスタムフックのエントリーポイント。

### 2-2. サーバーロジック層 (`supabase/sql/`)

- **`rpc/*.sql`**: データベース関数（Stored Procedures）。データのフィルタリング（ID NULL排除）ロジックを実装します。

## 3. 型定義 (Type Definitions)

型定義は `supabase/api/types.ts` に集約します。

### 3-1. Verified型の採用
本プロジェクトでは `Verified<T>` 型を核とし、IDの存在を保証します。

```typescript
// ID保証型: T型の中にある *_public_id を string (必須) に変換
export type Verified<T> = T & {
  [K in keyof T as K extends `${string}_public_id` ? K : never]: string
};
```

### 3-2. ドメイン定義
全てのフィールドを `Nullable` で定義し、実態（DBの可能性）に合わせます。

```typescript
export type EventOverview = Nullable<{
  event_public_id: string;
  name: string;
  // ...
}>;
```

## 4. サーバーサイド実装ルール (Server Side Logic)

**ルール: 「親は厳格に、子は柔軟に」**

`supabase/sql/rpc/*.sql` において、以下の基準でフィルタリングを行います。

- **親オブジェクト**: ID が NULL の場合、行全体を除外します。（必須）
- **子オブジェクト/配列**: 子要素の ID が NULL の場合、その子要素のみを除外し、親は残します。

```sql
-- 親のIDがない場合、イベントごと除外
WHERE e.event_public_id IS NOT NULL
```

## 5. データ取得と命名規則 (Data Fetching & Naming)

### 5-1. API層の実装フロー
1.  **`keys.ts`**: Query Key を定義。
2.  **`function.ts`**: RPCを呼び出し、`Verified<T>[]` にキャストして返す。
3.  **`index.ts`**: `useQuery` を使ったカスタムフックを作成。

### 5-2. 命名規則
- **基本**: API戻り値、コンポーネント引数ともに `data` を使用する。
- **例外**: 1つのファイルで複数のAPIを呼ぶ場合のみ、`eventsData` のように `[Entity]Data` 形式でのリネームを許可する。

## 6. コンポーネント実装 (UI Implementation)

- **場所**: `components/**/*.tsx`
- **ルール**: IDチェックなし、表示崩れのみケア
    - `Verified` 型によりIDの存在が保証されているため、ガード節（`if (!id) return null`）は記述しません。
- **引数**: `data` という名前で受け取る。
- **型**: `Verified<Type>` を使用する。
- **実装**: 画像やテキストが `null` の場合の表示制御のみ行う。

```tsx
// 子コンポーネント例
export default function EventCard(data: Verified<EventOverview>) {
  return (
    <Pressable onPress={() => router.push(`/event/${data.event_public_id}`)}>
      {data.header_image ? <Image source={{ uri: data.header_image }} /> : null}
      <Text>{data.name}</Text>
    </Pressable>
  );
}
```