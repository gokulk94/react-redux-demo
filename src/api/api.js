import request from 'superagent';

export function verifyUserDetails(userAuth) {
  return request
      .post('/login/authenticate')
      .send({
        username: userAuth.username,
        password: userAuth.password
      })
      .set('Accept','application/json');
}