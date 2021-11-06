<!--
  - Copyright (©) 06.11.2021, 18:08. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
    <v-app>
        <v-navigation-drawer
            app
            v-model="drawer"
            :style="{
                margin: '20px 0 0 0',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignContent: 'center',
            }"
        >
            <a href="https://www.foma-blog.ru" target="_blank">
                <v-img max-width="100px" :src="logo" title="www.foma-blog.ru" alt="www.foma-blog.ru"></v-img>
            </a>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-toolbar-title @click="drawer = true"> <v-icon>mdi-crop</v-icon> X-Cropper </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon color="primary" href="https://www.npmjs.com/package/x-cropper">
                <v-icon large>mdi-npm</v-icon>
            </v-btn>
            <v-btn icon color="primary" href="https://github.com/mrsky1001/x-cropper">
                <v-icon large>mdi-github</v-icon>
            </v-btn>
            <v-btn icon color="primary" href="https://foma-blog.ru/">
                <v-img
                    alt="www.foma-blog.ru"
                    title="www.foma-blog.ru"
                    src="https://foma-blog.ru/assets/fb15.svg"
                    :style="{ width: '95px', margin: '8px 0 0 9px' }"
                ></v-img>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <x-cropper></x-cropper>
            </v-container>
        </v-main>

        <v-footer app> </v-footer>
    </v-app>
</template>
<script>
import XCropper from './components/XCropper/XCropper'
import logo from '../assets/x-cropper-logo-64.png'

export default {
    data: () => ({
        drawer: true,
        logo: logo,
    }),
    components: { XCropper },
}
</script>

<style lang="scss">
* {
    font-family: monospace;
}
</style>
