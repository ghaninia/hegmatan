import {toast} from "react-toastify";

export default class Error {

    stepMessage(errors, length, step = 0, callback = null) {
        if (length > step) {
            var KEY = Object.keys(errors)[step];
            var ERR = errors[KEY][0];

            toast.error(ERR , {
                onClose: () => {

                    this.stepMessage(errors, length, step + 1 ) ;

                    if (callback != null) {
                        callback(errors);
                    }
                }
            });

        }
    }

    notification(err, callback = null) {

        const { ok, msg } = err.response.data ;

        if (msg && ok == false) {

            toast.error(msg , {
                onClose: () => callback != null ? callback(msg) : null
            });

        } else {
            const { errors, message } = err.response.data ;

            if (errors != undefined) {

                this.stepMessage(errors, Object.keys(errors).length, 0, callback);

            } else {
                toast.error(msg , {
                    onClose: () => callback != null ? callback(message) : null
                });
            }

        }
    }

}