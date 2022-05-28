import React from "react" ;
import Swal from 'sweetalert2'

export const Confirm = (msg ,thenCallback) => {
    return Swal.fire({
        text: msg ,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(result => {
        return result.isConfirmed ? thenCallback() : undefined ;
    }) ;
}

const Alert = (msg) => {
    return Swal.fire(msg) ;
}
export default Alert ;
