import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, LogOut, User, LayoutDashboard, ShieldCheck } from 'lucide-react';

const Navbar = () => {
    const { userInfo, logout } = useAuth();

    return (
        <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2 text-primary-light font-bold text-xl">
                            <BookOpen className="w-8 h-8" />
                            <span>E-STUDY ZONE</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
                        {userInfo ? (
                            <>
                                <Link to="/dashboard" className="text-slate-300 hover:text-white transition flex items-center space-x-1">
                                    <LayoutDashboard className="w-4 h-4" />
                                    <span>Dashboard</span>
                                </Link>
                                <Link to="/profile" className="text-slate-300 hover:text-white transition flex items-center space-x-1">
                                    <User className="w-4 h-4" />
                                    <span>Profile</span>
                                </Link>
                                {userInfo.role === 'admin' && (
                                    <Link to="/admin" className="text-slate-300 hover:text-white transition flex items-center space-x-1">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span>Admin</span>
                                    </Link>
                                )}
                                <button 
                                    onClick={logout}
                                    className="bg-red-600/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-600/30 transition flex items-center space-x-2"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span>Logout</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-slate-300 hover:text-white transition">Login</Link>
                                <Link to="/register" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition shadow-lg shadow-primary/25">
                                    Join Now
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
