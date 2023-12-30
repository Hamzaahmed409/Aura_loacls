/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-constant-condition */
// @ts-nocheck 
import   { useEffect, useState } from 'react'
import * as Actions from '@/redux/actions/Actions'
import AppRouter from '@/route/appRoutes/AppRoute'
import { connect } from 'react-redux'
import AuthRouter from '@/route/AuthRoute'

function Route(props: { setUserAuth: (arg0: { user: any; isDashboard: any }) => void; userAuth: any }) {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const userAuthLocalStorage = localStorage.getItem('auth');
    const isDashboardLocalStorage = localStorage.getItem('isDashboard');

    if (userAuthLocalStorage && isDashboardLocalStorage) {
      props.setUserAuth({
        user: JSON.parse(userAuthLocalStorage),
        isDashboard: JSON.parse(isDashboardLocalStorage)
      })
    }
    setIsLoading(false);
  }, [])

  return (
    !isLoading ? 
    <>
      <div>
        {
          !props.userAuth ? <AuthRouter /> : <AppRouter />  
        }
        
      </div>
    </> : "Loading"
  )
}


const mapStateToProps = (state: any) => ({
  userAuth: state.AuthReducer.user,
  isDashboard: state.AuthReducer.isDashboard
});

const mapDispatchToProps = (dispatch: any) => ({
    setUserAuth: (userAuth: object) => dispatch({ type: Actions.SET_AUTH_USER, payload: userAuth })
});

export default connect(mapStateToProps, mapDispatchToProps)(Route);