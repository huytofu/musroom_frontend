import React from 'react';
import $ from 'jquery';
import * as authHelper from './auth';
import * as generalHelper from './general';

export class HttpInterceptors extends React.Component {
    componentDidMount () {
        var self = this;
        $.ajaxSetup({
            beforeSend: function (xhr, settings) {
                var accessToken = authHelper.getAccessToken();
                if (accessToken && accessToken !== '') {
                    xhr.setRequestHeader("x-access-token", accessToken);
                }
            },
            complete: function (xhr, type) {
                var responseJson = xhr.responseJSON || {};
                // check for error response from server side
                if (type === 'success' && !generalHelper.isEmpty(xhr.responseText)) {
                    var jsonResponse = JSON.parse(xhr.responseText);
                    // check that there are new access token for storing
                    if (jsonResponse.data && jsonResponse.data.access_token) {
                        authHelper.setAccessToken(responseJson.data.access_token);
                    }
                    if (jsonResponse.message_code) {
                        // redirects user to login page if user is not authenticated
                        if (jsonResponse.message_code === '2-user-013') {
                            self.props.isAuthenticated(false);
                        }
                        // redirects user to dashboard if user has no permission
                        else if (jsonResponse.message_code === '2-generic-010') {
                            self.props.noPermission(false);
                        }
                    }
                } else {
                    self.props.isAuthenticated(true);
                    self.props.noPermission(true);
                }
            }
        });
    }
    render () {
        return (
            <div></div>
        );
    }
}

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
                generalHelper.alert(resMessage, 'success');
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
