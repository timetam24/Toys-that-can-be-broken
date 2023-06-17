function handleCredentialResponse(response) {
    const responsePayload = parseJwt(response.credential);
    window.location.href = 'http://localhost:5500/login_function/google_login_success.html?id=' + responsePayload.sub + '&fullName=' + responsePayload.name + '&profileImgUrl=' + responsePayload.picture;
};

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};