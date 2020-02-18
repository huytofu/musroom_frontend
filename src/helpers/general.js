import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let user_current_alert = null;

export function alert(message, type) {
    if(!user_current_alert) {
        setTimeout(() => { //Reset after 5 seconds
            user_current_alert = null;
        }, 4000);
        type = type || 'success';
        toast.success(message, {
            type: type,
            autoClose: 4000,
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-' + type,
            fontSize: '60px',
            closeOnClick: true
        });
        user_current_alert = {message, type};
    }
}

export function isEmpty(value){
    if (
      typeof(value) === typeof(undefined) ||
      typeof(value) === typeof(null) || 
      value === ''
    ) { return true; }
    return false;
}

