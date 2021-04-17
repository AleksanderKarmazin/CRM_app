export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
    
        // console.log("userA from authHeader", userA );
        return { 'authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}