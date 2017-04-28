// Reducers for login module

const login = (state = {isloggedIn: false}, action) => {

    switch (action.type) {
      case 'FETCH_USER_SUCCESS':
        return {
          isloggedIn: true
        }
      default:
        return state
    }
}

export default login;
