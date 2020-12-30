import * as session from 'browser-session-store';
import Cookies from 'universal-cookie';

class ClientSession {
    static authkey = 'auth';

    static loggedin = null;

    static cookies = new Cookies();

    static storeAuth = (value) => {
        session.put(ClientSession.authkey, value, (err) => console.log(err));
    };

    static getAuth = (cb) => {
        session.get(ClientSession.authkey, (err, value) => cb(err, value));
    };

    static removeAuth = () => {
        session.remove(ClientSession.authkey, (err) => {
            console.log(err)
        });
    };

    static isLoggedIn = (func) => {
        ClientSession.getAuth((err, value) => {
            if (err) {
                console.error(err);
                func(false);
            } else {
                const condition = value == null;
                if (condition) {
                    // check if loggedin from third party
                    if (ClientSession.cookies.get('access_token')) {
                        ClientSession.storeAuth(
                            {
                                userId: ClientSession.cookies.get('userId', (error) => { console.error(error); }),
                                id: ClientSession.cookies.get('access_token', (error) => { console.error(error); })
                            }, (error) => console.error(error)
                            );
                            func(true);
                    } else {
                        ClientSession.removeAuth((error) => console.error(error));
                        func(false);
                    }
                } else if ((new Date(value.created)).getTime() + value.ttl >= (new Date().getTime())) {
                    func(true);
                } else {
                    ClientSession.removeAuth((error) => console.error(error));
                    func(false);
                }
            }
        });
    };

    static getToken = () => {
        if (ClientSession.isLoggedIn()) {
            ClientSession.getAuth((err, value) => {
                if (err) {
                    console.error(err);
                    return false;
                } else {
                    return value.id;
                }
            })
        }
    };

    static getAccessToken = (callback) => {
        ClientSession.isLoggedIn(function (isLoggedIn) {
            if (isLoggedIn) {
                ClientSession.getAuth((err, value) => {
                    if (err) {
                        console.error(err);
                        callback(false, err);
                    } else {
                        callback(true, value);
                    }
                });
            } else {
                callback(false, null);
            }
        });
    };
}
export default ClientSession;
