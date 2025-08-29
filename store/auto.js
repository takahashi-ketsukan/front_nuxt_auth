export const state = () => ({
    accessToken: ''
});

export const mutations = {
    // トークンを保存
    setAccessToken(state, token) {
        state.accessToken = token;
        if (typeof window !== 'undefined') {
            localStorage.setItem('accessToken', token);
        }
    },

    // ページロード時に localStorage から読み込む
    loadAccessToken(state) {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('accessToken');
            state.accessToken = token || '';
        }
    },

    // ログアウト時にクリア
    clearAccessToken(state) {
        state.accessToken = '';
        if (typeof window !== 'undefined') {
            localStorage.removeItem('accessToken');
        }
    }
};

export const getters = {
    getAccessToken: (state) => state.accessToken
};
