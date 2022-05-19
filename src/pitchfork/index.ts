import cheerio from "cheerio";

import { AlbumReview, TrackReview } from "../interface/pitchfork";
import reqHTTP from "../util/request";

const loadTrackReview = (body: string) => {

}

const loadAlbumReview = (body: string) => {

}

const search = async (album: string, artist: string) => {
    const searchResp = await reqHTTP('GET', 'http://pitchfork.com/search', { query: `${album} - ${artist}` });
    const raw = searchResp.data.split('window.App=')[1].split(';</script>')[0];

    const parsed = JSON.parse(raw);

    console.log(parsed);





}

export default search;

