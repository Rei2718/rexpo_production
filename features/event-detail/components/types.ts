import { GetEventDetailsById } from '@/types/supabase';

export interface EventHeaderProps {
    title?: string | null;
    overview_description?: string | null;
    sponsorTier?: string | null;
}

export interface EventCoverImageProps {
    coverImageUrl?: string | null;
    logoUrl?: string | null;
}

export interface EventDescriptionProps {
    description?: string | null;
    overview?: string | null;
}

export interface EventGalleryCarouselProps {
    imageUrls: (string | null | undefined)[];
}

export interface Performer {
    id: string;
    name: string;
    avatar_url?: string | null;
    position?: string | null;
}

export interface EventPerformerListProps {
    performers: GetEventDetailsById['performers'];
}

export interface EventTagSectionProps {
    tags: string[] | null;
}

export interface TimeSlot {
    id: string;
    start: string;
    end: string;
}

export interface EventTimeListProps {
    times: GetEventDetailsById['times'];
}

export interface EventVenueSectionProps {
    venueName?: string | null;
}
