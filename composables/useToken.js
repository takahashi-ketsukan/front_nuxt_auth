import { ref } from 'vue';

export const useToken = () => {
    const accessToken = ref('');

    const setToken = (token) => {
        accessToken.value = token;
        if (typeof window !== 'undefined') {
            localStorage.setItem('accessToken', token);
        }
    };

    const loadToken = () => {
        if (typeof window !== 'undefined') {
            accessToken.value = localStorage.getItem('accessToken') || '';
        }
    };

    const clearToken = () => {
        accessToken.value = '';
        if (typeof window !== 'undefined') {
            localStorage.removeItem('accessToken');
        }
    };

    return { accessToken, setToken, loadToken, clearToken };
};
