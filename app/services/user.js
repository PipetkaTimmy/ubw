import axios from 'axios';

const API_URL = 'http://192.168.1.13:8000/api';

export const getToken = () => {
    return localStorage.getItem('jwtToken');

}

export const getUserData = async () => {
    const token = getToken();
    if (!token) {
        throw new Error('No token found');
    }
    try {
        const response = await axios.get(`${API_URL}/user`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Failed to get user data", error);
        throw error;
    }
};

export const getQueue = async () => {
    const token = getToken();
    if (!token) {
        throw new Error('No token found');
    }
    try {
        const response = await axios.get(`${API_URL}/get-queue`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Failed to get user data", error);
        throw error;
    }
}

export const updateUserData = async (userData) => {
    const token = getToken();
    if (!token) {
        throw new Error('No token found');
    }
    try {
        const response = await axios.put(`${API_URL}/user/self-update`, userData, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Failed to update user data", error);
        throw error;
    }
}