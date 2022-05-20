import cheerio from 'cheerio';

import { AlbumReview, TrackReview } from '../interface/pitchfork';
import reqHTTP from '../util/request';
import filterAlbum from '../util/filter';

const loadTrackReview = async (body: any): Promise<TrackReview> => {
  const resp = await reqHTTP('GET', body['url']);
  const $ = cheerio.load(resp.data);

  const obj: TrackReview = {
    track_name: '',
    artist_name: '',
    abstract_detail: '',
    released_date: '',
    best_new_track: false,
  };

  return obj;
};

const loadAlbumReview = async (body: any): Promise<AlbumReview> => {
  const resp = await reqHTTP('GET', body['url']);
  const $ = cheerio.load(resp.data);

  const obj: AlbumReview = {
    album_name: '',
    artist_name: '',
    abstract_detail: '',
    released_date: '',
    score: '',
    best_new_album: false,
  };

  return obj;
};

const search = async (album: string, artist: string) => {
  const searchResp = await reqHTTP('GET', 'http://pitchfork.com/search', {
    query: `${filterAlbum(album)} - ${artist}`,
  });

  const parsed = JSON.parse(
    searchResp.data.split('window.App=')[1].split(';</script>')[0]
  )['context']['dispatcher']['stores']['SearchStore']['results'];

  if (parsed['albumreviews']['count'] > 0) {
    return await loadAlbumReview(parsed['albumreviews']['items'][0]);
  }

  return await loadTrackReview(parsed['tracks']['items'][0]); // early return
};

export default search;
