import axios from "axios";

export default class Request{

    constructor(url , data = {} , headers = {'Content-Type': 'application/json'}) {
        this.url = url;
        this.data = data;
        this.headers = headers;
    }

    async request(method) {
        const { url , data , headers} = this ;
        return await axios({
            method ,
            url ,
            headers ,
            data
        });
    }

    post(){
        return this.request( "post");
    }

    get(){
        return this.request('get');
    }

}