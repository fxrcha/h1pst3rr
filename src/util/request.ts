import axios from "axios";

const defaultHeader = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15"
}

const reqHTTP = (method: string, url: string, params?: any) => {
    const resp = axios({
        method: method,
        url: url,
        params: params,
        headers: defaultHeader
    }).then((resp) => {
        console.log(resp);
        return resp;
    }).catch((err) => {
        console.log(err);
    })
};

export default reqHTTP;