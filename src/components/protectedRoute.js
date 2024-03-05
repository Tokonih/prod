import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../common/config';

const ProtectedRoute = ({ element: Component, allowedRoles, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // Verify the token on the server
          const response = await axios.post(`${BASEURL}/verify-token`, { token });
          if (response.data && response.data.isValid) {
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error('Error during token verification:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    // You can render a loading spinner or any other loading indicator here
    return null;
  }

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  // Check if the user's role is allowed for this route
  if (allowedRoles && !allowedRoles.includes(localStorage.getItem('user-details').role)) {
    // Redirect to unauthorized page or handle accordingly
    return <Navigate to="/unauthorized" />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;
