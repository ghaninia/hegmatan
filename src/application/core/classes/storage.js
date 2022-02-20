export default class storage {
    static set( name , data ) {

        data = JSON.stringify(data)
        data =  btoa(encodeURIComponent(data)) ;

        return localStorage.setItem( name , data ) ;

    }
    static get( name ) {
        var data = localStorage.getItem( name ) ;
        data = decodeURIComponent(atob(data)) ;
        data = JSON.parse( data ) ;
        return data ;
    }
    static has( name ) {
        return this.get( name ) !== null ;
    }
    static flash( name ) {
        return localStorage.removeItem( name ) ;
    }
}

export const KEYS = {
    TOKEN : "TOKEN" ,
    AUTHUSER  : "AUTHUSER" ,
}