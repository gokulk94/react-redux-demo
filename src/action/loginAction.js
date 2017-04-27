export const AUTHENTICATE = 'AUTHENTICATE';

function authenticateAction(userAuth) {
  return {
    type: AUTHENTICATE,
    userAuth
  }
}

export function authenticateUser(userAuth) {
  return dispatch => {
    request
      .post('/login/authenticate')
      .send({
        username: userAuth.username,
        password: userAuth.password
      })
      .set('Accept','application/json')
      .end((err, res) => {
        if(err) return;
        store.dispatch(authenticateAction(userAuth));
      });
  }
}
