// Reducers for login module

const login = (state = {isloggedIn: false}, action) => {

    switch (action.type) {
      case 'FETCH_USER_SUCCESS':
        return {
          isloggedIn: !state.isloggedIn
        }
      case 'FETCH_USER_ERROR': 
        return state
      default:
        return state
    }
}

export default login;
