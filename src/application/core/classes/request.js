import axios from "axios";
import storage , {KEYS} from "./storage";

export default class Request{

    constructor(url , data = {} , headers = {'Content-Type': 'application/json'}) {
        this.url = url;
        this.data = data;
        this.headers = headers;
    }

    request(method) {
        let { url , data , headers} = this ;

        if(this.token !== undefined) {
            headers = {
                ...headers ,
                "Authorization" : "Bearer " + this.token
            } ;
        }


        switch (method) {
            case "get" : {
                url += (Object.keys(data).length) ? "?" + (new URLSearchParams(data)).toString() : "" ;
                return axios({
                    method ,
                    url ,
                    headers ,
                });
            }
            default : {
                return axios({
                    method ,
                    url ,
                    headers ,
                    data
                });
            }
        }


    }

    auth(){
        this.token = storage.get(KEYS.TOKEN) ;
        return this ;
    }

    post(){
        return this.request( "post");
    }

    get(){
        return this.request('get');
    }

    delete(){
        return this.request('delete');
    }
}