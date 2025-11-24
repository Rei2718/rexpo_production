--------------------------------------------------------------------------------
-- Event Tag Mapping Table
--------------------------------------------------------------------------------
CREATE TABLE public.event_tag_mapping (
  event_id BIGINT NOT NULL REFERENCES public.event(event_id) ON DELETE CASCADE,
  event_tag_id BIGINT NOT NULL REFERENCES public.event_tag(event_tag_id) ON DELETE CASCADE,
  
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  PRIMARY KEY (event_id, event_tag_id)
);

--------------------------------------------------------------------------------
-- Index
--------------------------------------------------------------------------------
CREATE INDEX idx_event_tag_mapping_tag_id
ON public.event_tag_mapping (event_tag_id);

--------------------------------------------------------------------------------
-- RLS
--------------------------------------------------------------------------------
ALTER TABLE public.event_tag_mapping ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" 
  ON public.event_tag_mapping
  FOR SELECT TO public USING (true);