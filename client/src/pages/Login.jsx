import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { LogIn, Mail, Lock, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password);
            toast.success('Login Successful!');
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login Failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh]">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 w-full max-w-md backdrop-blur-xl shadow-2xl"
            >
                <div className="flex flex-col items-center mb-8 text-center">
                    <div className="bg-primary/20 p-4 rounded-full mb-4">
                        <LogIn className="w-8 h-8 text-primary-light" />
                    </div>
                    <h2 className="text-3xl font-bold">Welcome Back</h2>
                    <p className="text-slate-400 mt-2">Log in to your E-STUDY ZONE account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                <Mail className="w-5 h-5" />
                            </span>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-slate-900 border border-slate-700 text-white rounded-xl block w-full pl-10 p-3 focus:ring-primary focus:border-primary transition outline-none"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                <Lock className="w-5 h-5" />
                            </span>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-slate-900 border border-slate-700 text-white rounded-xl block w-full pl-10 p-3 focus:ring-primary focus:border-primary transition outline-none"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl transition flex justify-center items-center space-x-2"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Sign In</span>}
                    </button>
                </form>

                <p className="text-center text-slate-400 mt-8">
                    Don't have an account? <Link to="/register" className="text-primary-light hover:underline">Sign up</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
