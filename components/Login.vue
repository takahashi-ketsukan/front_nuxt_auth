<template>
    <section class="p-login_content elevation-7">
        <v-row>
            <v-col class="pa-0 col-sm-6 col-12">
                <v-card outlined>
                    <div class="p-login_form">
                        <form @submit.prevent="handleLogin">
                            <div class="login-screen lgn-left">
                                <v-card-title>
                                    <h2 class="pb-4 c-text_blue">
                                        {{ $t('common.sign_in') }}
                                    </h2>
                                </v-card-title>
                                <v-card-text class="inner">
                                    <form @submit.prevent="handleLogin">
                                        <v-text-field v-model="sitekey" :label="ucdgovtest" type="text" disabled />
                                        <v-text-field v-model="formData.email" :label="$t('login.email')" type="email" outlined />
                                        <v-text-field
                                            v-model="formData.password"
                                            :label="$t('common.password')"
                                            :type="showsPassword ? 'text' : 'password'"
                                            :append-icon="showsPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                            outlined
                                            @click:append="() => (showsPassword = !showsPassword)"
                                        />
                                        <p class="pb-3">
                                            <NuxtLink :to="localePath('/reminder/')">
                                                {{ $t('login.forget_password') }}
                                            </NuxtLink>
                                        </p>
                                        <div class="text-center">
                                            <button type="submit" block x-large :loading="loading" class="c-btn_dark c-btn submit-btn text-white">
                                                {{ $t('common.sign_in') }}
                                            </button>
                                            <span v-html="$t('login.note')" />
                                        </div>
                                    </form>
                                </v-card-text>
                            </div>
                        </form>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>
<script setup>
import { useToken } from '@/composables/useToken';

const { t } = useI18n();
const snackbar = useSnackbar();
const { login } = useAuth();
const sitekey = ref('ucdgovtest');
const formData = reactive({
    email: '',
    password: ''
});
const error = ref(null);

const loading = ref(false);
const showsPassword = ref(false);
console.log('1');
const { setToken } = useToken();
console.log('2');
const handleLogin = async () => {
    try {
        loading.value = true;
        setSitekey(sitekey.value);
        console.log('3');
        const res = await login({ ...formData });
        console.log('4');
        if (res?.access_token) {
            console.log('5');
            setToken(res.access_token); // Vuex / Composable に保存
            console.log('6');
            console.log('ログインレスポンス:', res.access_token);
        }
    } catch (e) {
        error.value = e?.data?.errors || [];
        snackbar.add({
            type: 'error',
            text: e?.response?._data?.errors?.[0]?.message || t('slackbar.login_fail')
        });
    }
    loading.value = false;
};
</script>
