<template>
    <div>
        <v-progress-linear :active="loading" :indeterminate="loading" absolute top color="orange white-4" />
        <template v-if="topicsDetail">
            <v-container class="pa-4" max-width="800">
                <!-- タイトル -->
                <v-row>
                    <v-col>
                        <span class="c-btn c-btn_main c-btn_sm c-btn_disable white--text">
                            {{ topicsDetail.contents_type_nm }}
                        </span>
                        <h1 class="text-h4 font-weight-bold mb-1">{{ topicsDetail.subject }}</h1>
                        <p class="text-caption grey--text mb-3">{{ topicsDetail.ymd ? formatDate(topicsDetail.ymd) : '' }}</p>
                        <v-divider class="mb-4"></v-divider>
                    </v-col>
                </v-row>

                <!-- 詳細内容 -->
                <v-row>
                    <v-col>
                        <v-card outlined class="pa-3">
                            <h2 class="text-h6 font-weight-medium mb-2">詳細内容：</h2>
                            <div class="mb-4">
                                <v-textarea :value="topicsDetail.ext_1" outlined dense readonly rows="3" />
                            </div>

                            <h2 class="text-h6 font-weight-medium mb-2">添付ファイル：</h2>
                            <v-col v-for="(file, index) in files" :key="index" cols="12" sm="6" md="4" lg="3">
                                <v-btn v-if="file.url" color="primary" @click="downloadFiles(file.url, file.dlName)">
                                    {{ file.fileName }}
                                </v-btn>
                                <a v-if="file.fileDownload" :href="file.url" :download="file.dlName" target="_blank" class="file-card">・{{ file.fileName }}</a>
                            </v-col>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </template>
    </div>
</template>
<script setup>
import { useToken } from '@/composables/useToken';
const { authUser } = useAuth();
const { downloadFile } = useKurocoContent();
const { t } = useI18n();
const route = useRoute();
const topicsDetail = ref(null);
const files = ref(null);
const loading = ref(true);
const favoriteResponse = ref(null);
const favoriteColor = ref('grey');
const snackbar = useSnackbar();
const localePath = useLocalePath();
const { accessToken, loadToken } = useToken();

loadToken();
console.log('accessToken:', accessToken.value);

const items = computed(() => {
    const { texts, positionPatterns, imageUrls, subtitles } = topicsDetail.value;

    return positionPatterns.map(({ key }, i) => ({
        text: texts[i] || '',
        positionPatternKey: key,
        imageUrl: imageUrls?.[i]?.url ? `${imageUrls?.[i]?.url}?width=800` : null,
        subtitle: subtitles[i] || ''
    }));
});

const formatDate = (str) => {
    const [year, month, day] = str.slice(0, 10).split('-');
    return `${year}年${month}月${day}日`;
};
const getfilename = (url) => {
    const pathname = new URL(url).pathname;
    const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
    return filename;
};
const downloadFiles = async (url, name) => {
    const path = url.replace('https://ucdgovtest.g.kuroco-img.app/', '');
    const apiUrl = `/api/download/${path}`;
    console.log('apiUrl:', apiUrl);

    const link = document.createElement('a');
    link.href = apiUrl;
    link.rel = 'noopener'; // 念のため
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

try {
    const response = await $fetch(`${apiDomain.baseURL}/rcms-api/1/content/details/${route.params.slug}`, {
        credentials: 'include',
        server: false
    });
    console.log('API response:', response);
    console.log('details:', response.details);
    const d = response.details;
    topicsDetail.value = {
        ...d,
        fileType: d?.ext_1?.key,
        file1Url: d?.ext_2?.url,
        file1Download: d?.ext_2?.dl_link,
        file1Name: d?.ext_2?.desc,
        file2Url: d?.ext_3?.url,
        file2Download: d?.ext_3?.dl_link,

        // for TopicsDetail
        positionPatterns: d?.ext_4,
        texts: d?.ext_7,
        imageUrls: d?.ext_5,
        subtitles: d?.ext_9
    };

    files.value = {
        file1: {
            url: d?.ext_2?.url,
            fileDownload: d?.ext_2?.dl_link,
            fileName: d?.ext_2?.desc,
            dlName: getfilename(d?.ext_2?.url)
        },
        file2: {
            url: d?.ext_3?.url,
            fileDownload: d?.ext_3?.dl_link,
            fileName: d?.ext_3?.desc,
            dlName: getfilename(d?.ext_3?.url)
        },
        file3: {
            url: d?.ext_4?.url,
            fileDownload: d?.ext_4?.dl_link,
            fileName: d?.ext_4?.desc,
            dlName: getfilename(d?.ext_4?.url)
        },
        file4: {
            url: d?.ext_5?.url,
            fileDownload: d?.ext_5?.dl_link,
            fileName: d?.ext_5?.desc,
            dlName: getfilename(d?.ext_5?.url)
        },
        file5: {
            url: d?.ext_6?.url,
            fileDownload: d?.ext_6?.dl_link,
            fileName: d?.ext_6?.desc,
            dlName: getfilename(d?.ext_6?.url)
        }
    };

    console.log(files);
    console.log(topicsDetail);
    const fav = await $fetch(`${apiDomain.baseURL}/rcms-api/1/favorite/list`, {
        credentials: 'include',
        server: false,
        params: {
            member_id: parseInt(authUser.value.member_id),
            module_id: parseInt(route.params.slug),
            module_type: 'topics'
        }
    });
    favoriteResponse.value = fav;
    favoriteColor.value = favoriteResponse.value?.pageInfo?.totalCnt > 0 ? 'red' : 'grey';
    loading.value = false;
} catch (error) {
    snackbar.add({
        type: 'error',
        text: error?.response?._data?.errors?.[0]?.message || t('common.error')
    });
}
</script>
