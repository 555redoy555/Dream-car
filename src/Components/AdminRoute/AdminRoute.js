import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hook/useAuth';


const AdminRoute = ({ children, ...rest }) => {
     const { user, admin, loading } = useAuth();
     if (loading) { return <CircularProgress /> }
     return (
          <Route
               {...rest}
               render={({ location }) =>
                    user.email && admin ? (
                         children
                    ) : (
                         <Redirect
                              to={{
                                   pathname: "/",
                                   state: { from: location }
                              }}
                         />
                    )
               }
          />
     );
};

export default AdminRoute;