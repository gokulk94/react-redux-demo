
export function userLoginSuccess() {
  /**
   * Response should contain user details to be stored in state and
   * set token to sessionStorage or localStorage?(need to decide)
   */
  return {
    type: 'FETCH_USER_SUCCESS',
    response: {token: 'sakjdhsakhjdhiuiqewdsagdfa'}
  }
}

export function userLoginError() {
  return {
    type: 'FETCH_USER_ERROR',
    response: ''
  }
}

export function logoutAction() {
  return {
    type: 'LOGOUT_USER',
    response: ''
  }
}
