export const useApi = async (path, options = {}) => {
    const token = useCookie('access_token');
    const headers = options.headers || {};
    console.log('api_token:', token);
    console.log('api_headers:', headers);
    if (token.value) {
        headers['X-RCMS-API-ACCESS-TOKEN'] = token.value;
    }

    return await $fetch(`https://ucdgovtest.g.kuroco.app${path}`, {
        ...options,
        headers
    });
};
