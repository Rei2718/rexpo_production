import { Database } from "../database.types";

export type GetEventsListByTag = Database['public']['Functions']["get_events_list_by_tag"]['Returns'][number];
export type GetEventDetailsById = Database['public']['Functions']["get_event_details_by_id"]['Returns'][number];
export type GetEventsByVenueId = Database['public']['Functions']["get_events_by_venue_id"]['Returns'][number];
export type GetVenues = Database['public']['Functions']["get_venues"]['Returns'][number];