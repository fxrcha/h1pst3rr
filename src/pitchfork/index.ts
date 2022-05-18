import cheerio from "cheerio";

import { AlbumReview, TrackReview } from "../interface/pitchfork";
import reqHTTP from "../util/request";

const search = (album: string, artist: string) => {
    const searchResp = reqHTTP('GET', 'http://pitchfork.com/search', { query: `${album} - ${artist}` });

    console.log(searchResp);

    // 여기서 크롤링하고 트랙이면 트랙 앨범이면 앨범..!

}

export default search;

