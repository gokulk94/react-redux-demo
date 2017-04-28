
export function authenticateAction() {
  return {
    type: 'FETCH_USER_SUCCESS',
    response: {user: 'name'}
  }
}
