

export function getAccessToken () {
    return this.getCookie(this.cookieAccessToken);
}

export function setAccessToken (accessToken) {
    this.deleteAccessToken();
    this.setCookie(this.cookieAccessToken, accessToken);
}

export function deleteAccessToken () {
    this.deleteCookie(this.cookieAccessToken);
}