import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
    const { userInfo } = useAuth();

    if (!userInfo) {
        return <Navigate to="/login" />;
    }

    if (role && userInfo.role !== role && userInfo.role !== 'admin') {
        return <Navigate to="/dashboard" />;
    }

    return children;
};

export default ProtectedRoute;
 