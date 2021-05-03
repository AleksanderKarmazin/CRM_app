let user = JSON.parse(localStorage.getItem('user'));
export const config = {
    headers: {
        'Content-Type': 'application/json',
        'authorization': user && user.token ? 'Bearer ' + user.token: null
    }
}