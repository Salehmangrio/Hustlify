import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();

    // Initialize users (only once)
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        if (!storedUsers) {
            localStorage.setItem('users', JSON.stringify([
                {
                    username: 'Saleh',
                    email: 'saleh@gmail.com',
                    password: '123456',
                }
            ]));
        }

        const loggedIn = JSON.parse(localStorage.getItem('isLogged'));
        setIsLogged(loggedIn === true);
    }, []);

    const handleRegister = (values, setLoading) => {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.some(
            (user) =>
                (user?.email?.toLowerCase() || '') === (values?.email?.toLowerCase() || '') ||
                (user?.username?.toLowerCase() || '') === (values?.username?.toLowerCase() || '')
        );

        if (userExists) {
            alert('User with this email or username already exists!');
            localStorage.setItem('isLogged', JSON.stringify(false));
            return;
        }

        const newUser = {
            username: values.username,
            email: values.email,
            password: values.password,
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        setLoading(true);
        setTimeout(() => {
            alert('User registered successfully!');
            localStorage.setItem('isLogged', JSON.stringify(true));
            setIsLogged(true);
            setLoading(false);
            navigate('/');
        }, 1500);
    };

    const handleLogin = (values, setLoading) => {
        setLoading(true);
        const username = values?.username || '';
        const password = values?.password || '';
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const exists = users.some(
            (user) =>
                (user?.username?.toLowerCase() || '') === username.toLowerCase() &&
                user?.password === password
        );

        setTimeout(() => {
            if (exists) {
                localStorage.setItem('isLogged', JSON.stringify(true));
                setIsLogged(true);
                console.log('✅ Logged in');
                navigate('/');
            } else {
                localStorage.setItem('isLogged', JSON.stringify(false));
                setIsLogged(false);
                alert('❌ Invalid username or password');
            }
            setLoading(false);
        }, 1000);
    };

    const handleLogout = () => {
        localStorage.setItem('isLogged', JSON.stringify(false));
        setIsLogged(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ isLogged, handleLogin, handleRegister, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
