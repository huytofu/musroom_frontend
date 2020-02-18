import {toast} from 'react-toastify';
let user_current_alert = null;

export function alert(message, type) {
    if(!user_current_alert) {
        setTimeout(() => { //Reset after 5 seconds
            user_current_alert = null;
        }, 4000);
        type = type || 'success';
        toast.success(message, {
            type: type,
            className: 'toast-' + type
        });
        user_current_alert = {message, type};
    }
}

export function isEmpty(value){
    if (
      typeof(value) === 'undefined' ||
      typeof(value) === 'null' || 
      value === ''
    ) { return true; }
    return false;
}

