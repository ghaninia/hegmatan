import {toast} from "react-toastify";

export default class Notification{

    static success(msg , callback = null) {
        toast.success(msg, {
            onClose: () => callback !== null ? callback() : ""
        });
    }

}