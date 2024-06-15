import axios from 'axios';
import { getToken } from './user';
import { useRouter } from 'next/navigation';

const API_URL = 'http://192.168.1.13:8000/api';

export const login = async (username, password) => {
    console.log(username, password);
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password
        }, {
            withCredentials: true
        });

        const token = response.data.token;

        localStorage.setItem('jwtToken', token);    
        console.log('ex[iry', response.data);

        return response.data;
    } catch (error) {
        console.error("Login failed", error);
        throw error;
    }
};

export const expiry = async (router) => {
    const token = getToken();
    if (!token) {
        router.push('/');
        return;
    }
    try {
        const response = await axios.get(`${API_URL}/get-expire`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Failed to get user data", error);
        if (error.response && error.response.status === 401) {
            router.push('/');
        }
        throw error;
    }
}



// export const login = async (username, password) => {
//     console.log(username, password);
//     try {
//         const response = await axios.post(API_URL, {
//             username,
//             password
//         },{
//             withCredentials: true
//         });

//         const token = response.data.token;

//         setItemWithExpiry('jwtToken', token, 500);

//         return response.data;
//     } catch (error) {
//         console.error("Login failed", error);
//         throw error;
//     }
// };


// export const login = async (username, password) => {
//     console.log(username, password);
//     try {
//         const response = await axios.post(API_URL, {
//             username,
//             password
//         },{
//             withCredentials: true
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Login failed", error);
//         throw error;
//     }
// };


// const setItemWithExpiry = (key, value, ttl) => {
//     const now = new Date();

//     const item = {
//         value: value,
//         expiry: now.getTime() + ttl,
//     };

//     localStorage.setItem(key, JSON.stringify(item));
// };

// export const getItemWithExpiry = (key) => {
//     const item = localStorage.getItem(key);

//     if (!item) {
//         return null;
//     }

//     const now = new Date();

//     if (now.getTime() > item.expiry) {
//         localStorage.removeItem(key);
//         return null;
//     }

//     return item;
// };
