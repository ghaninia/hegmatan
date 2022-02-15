export default class localStorage {
    set( name , data ) {
        return localStorage.setItem( name , JSON.stringify(data) ) ;
    }
    get( name ) {
        return JSON.parse( localStorage.getItem( name ) ) ;
    }
    has( name ) {
        return this.get( name ) !== null ;
    }
    flash( name ) {
        return localStorage.removeItem( name ) ;
    }
}