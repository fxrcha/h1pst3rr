import axios from "axios";


const reqHTTP = (method: string, url: string, params?: any) => {
    const resp = axios({
        method: method,
        url: url,
        data: params
    }).then((resp) => {
        console.log(resp);
    }).catch((err) => {
        console.log(err);
    })
};

export default reqHTTP;