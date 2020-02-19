import * as generalHelper from './general';

export function handleApiResponse (response, showMessage) {
    showMessage = typeof showMessage !== typeof undefined ? showMessage : true;
    if(response){
        var resStatus = response.status ? response.status : '',
            resData = response.data ? response.data : {},
            resMessage = response.message ? response.message : '',
            resMessageCode = response.message_code ? response.message_code : '';
            
        var returnObject = {
            status: resStatus,
            data: resData,
            message: resMessage,
            message_code: resMessageCode
        };
        // success response
        if (showMessage && resMessage){
            if (String(resStatus) === "ok") {
                // generalHelper.alert(resMessage, 'success');
            } else {
                generalHelper.alert(resMessage, 'error');
            }
        }
        return returnObject;
    } else {
        if(showMessage){
            generalHelper.alert('Opps something went wrong', 'error');
            return returnObject;
        }
    }
}
