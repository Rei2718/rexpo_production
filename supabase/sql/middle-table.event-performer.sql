--------------------------------------------------------------------------------
-- Event Performer Table
--------------------------------------------------------------------------------
CREATE TABLE public.event_performer (
  event_id BIGINT NOT NULL REFERENCES public.event(event_id) ON DELETE CASCADE,
  performer_id BIGINT NOT NULL REFERENCES public.performer(performer_id) ON DELETE CASCADE,

  display_order INT NOT NULL DEFAULT 999,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  PRIMARY KEY (event_id, performer_id)
);

--------------------------------------------------------------------------------
-- Index
--------------------------------------------------------------------------------
CREATE INDEX idx_event_performer_performer_id
ON public.event_performer (performer_id);

--------------------------------------------------------------------------------
-- RLS
--------------------------------------------------------------------------------
ALTER TABLE public.event_performer ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" 
 ON public.event_performer
 FOR SELECT TO public USING (true);