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
                            <v-col v-for="(file, index) in files" :key="index" cols="12" sm="6" md="12" lg="3">
                                <div v-if="file.url" class="d-flex justify-space-between align-center pa-4" style="max-width: 100%">
                                    <span class="text-body-1">・ ファイル名： {{ file.dlName }} </span>
                                    <v-btn size="small" color="primary" @click="download(file.url, file.dlName)">ダウンロード</v-btn>
                                </div>
                            </v-col>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </template>
    </div>
</template>
<script setup>
const { t } = useI18n();
const route = useRoute();
const topicsDetail = ref(null);
const files = ref(null);
const loading = ref(true);
const snackbar = useSnackbar();

const formatDate = (str) => {
    const [year, month, day] = str.slice(0, 10).split('-');
    return `${year}年${month}月${day}日`;
};
const getfilename = (url, name) => {
    if (url) {
        const pathname = new URL(url).pathname;
        const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
        const match = filename.match(/(\.[^.]+)$/);
        return name ? name + match[1] : filename;
    }
};

const download = async (dl_link, name) => {
    const token = useCookie('access_token');
    console.log('dl_token:', token.value);
    const res = await fetch(`/api/download?url=${encodeURIComponent(dl_link)}`, {
        headers: { 'x-access-token': token.value }
    });

    const blob = await res.blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
};

try {
    const response = await useApi(`/rcms-api/1/content/details/${route.params.slug}`);
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
            dlName: getfilename(d?.ext_2?.url, d?.ext_2?.desc)
        },
        file2: {
            url: d?.ext_3?.url,
            fileDownload: d?.ext_3?.dl_link,
            fileName: d?.ext_3?.desc,
            dlName: getfilename(d?.ext_3?.url, d?.ext_3?.desc)
        },
        file3: {
            url: d?.ext_4?.url,
            fileDownload: d?.ext_4?.dl_link,
            fileName: d?.ext_4?.desc,
            dlName: getfilename(d?.ext_4?.url, d?.ext_4?.desc)
        },
        file4: {
            url: d?.ext_5?.url,
            fileDownload: d?.ext_5?.dl_link,
            fileName: d?.ext_5?.desc,
            dlName: getfilename(d?.ext_5?.url, d?.ext_5?.desc)
        },
        file5: {
            url: d?.ext_6?.url,
            fileDownload: d?.ext_6?.dl_link,
            fileName: d?.ext_6?.desc,
            dlName: getfilename(d?.ext_6?.url, d?.ext_6?.desc)
        }
    };

    console.log('file.value:', files);
    loading.value = false;
} catch (error) {
    snackbar.add({
        type: 'error',
        text: error?.response?._data?.errors?.[0]?.message || t('common.error')
    });
}
</script>
