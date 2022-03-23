import storage, {KEYS} from "./storage";

export default class Auth{

    static login(){
        return (
            storage.has(KEYS.AUTHUSER) && storage.has(KEYS.TOKEN)
        );
    }

    static user(){
        return storage.has(KEYS.AUTHUSER) ? storage.get(KEYS.AUTHUSER) : false ;
    }

    static token(){
        return storage.has(KEYS.TOKEN) ? storage.get(KEYS.TOKEN) : false ;
    }

    static setUser(user){
        return storage.set(KEYS.AUTHUSER , user) ;
    }

    static setToken(token){
        return storage.set(KEYS.TOKEN , token ) ;
    }

    static logout()
    {
        if(storage.has(KEYS.TOKEN) ) {
            return storage.flash(KEYS.TOKEN) ;
        }

        return false ;
    }

}