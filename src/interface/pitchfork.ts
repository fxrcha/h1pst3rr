export interface AlbumReview {
  album_name: string;
  artist_name: string;
  cover_url: string;
  abstract_detail: string;
  best_new_album: boolean;
  released_date: string;
  score: string;
}

export interface TrackReview {
  track_name: string;
  artist_name: string;
  cover_url: string;
  abstract_detail: string;
  best_new_track: boolean;
  released_date: string;
}
