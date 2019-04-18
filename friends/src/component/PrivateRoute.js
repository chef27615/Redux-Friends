import React from 'react'
import  { Route, Redirect } from 'react-router-dom';


function PrivateRoute({component: Component, ...rest }) {
  return (
    <div>
      <Route {...rest} render={ () => {
          if (localStorage.getItem('token'))
                return <Component />
            return <Redirect to='/login'/>
      } } />
    </div>
  )
}

export default PrivateRoute
