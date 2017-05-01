import request from 'axios';

export function verifyUserDetails(userAuth) {
  return request
      .post('/login/authenticate', {
        username: userAuth.username,
        password: userAuth.password
      });
}