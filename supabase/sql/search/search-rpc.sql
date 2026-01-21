CREATE OR REPLACE FUNCTION hybrid_search(
  query_text text,
  query_embedding vector(512),
  match_count int
)
RETURNS TABLE (
  event_public_id uuid,
  highlight text,
  similarity float
)
LANGUAGE sql
AS $$
  WITH combined_scores AS (
    SELECT
      event_public_id,
      content,
      (1 - (embedding <=> query_embedding)) as vector_score
    FROM search_index
    ORDER BY vector_score DESC
    LIMIT match_count
  )
  SELECT
    event_public_id,
    ts_headline('japanese', content, websearch_to_tsquery('japanese', query_text), 
      'StartSel=<b>, StopSel=</b>, MaxWords=15, MinWords=5, ShortWord=3'
    ) AS highlight,
    vector_score AS similarity
  FROM combined_scores;
$$;