import cheerio from 'cheerio';

import { AlbumReview, TrackReview } from '../interface/pitchfork';
import reqHTTP from '../util/request';

const loadTrackReview = (body: string) => {
  console.log('wow... a track');
};

const loadAlbumReview = (body: string) => {
  console.log('wow... an album ');
};

const search = async (album: string, artist: string) => {
  const searchResp = await reqHTTP('GET', 'http://pitchfork.com/search', {
    query: `${album} - ${artist}`,
  });
  const parsed = JSON.parse(
    searchResp.data.split('window.App=')[1].split(';</script>')[0]
  )['context']['dispatcher']['stores']['SearchStore']['results'];

  console.log(parsed['albumreviews']);

  if (Object.keys(parsed['albumreviews']).length > 0) {
    return loadAlbumReview(parsed);
  }

  return loadTrackReview(parsed); // early return
};

export default search;
