import * as Actions from "@/redux/actions/Actions";


const initialState = {
  user:null,
  isDashboard:false,
};

const AuthReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case Actions.SET_AUTH_USER:
      return {
        user: action.payload.user,
        isDashboard: action.payload.isDashboard
      };
    case Actions.LOGOUT:
      localStorage.removeItem('auth')
      return {
        user: null,
      };
    default:
      return state;  
  }
};

export default AuthReducer;
