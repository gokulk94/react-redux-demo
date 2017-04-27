'!use strict';
import request from 'superagent';
import store from '../reducer/login';

function authenticateAction(userAuth) {
  return {
    type: 'FETCH_USER_SUCCESS',
    response: userAuth 
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
