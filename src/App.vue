<!--
  - Copyright (©) 06.11.2021, 18:08. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer">
            <a href="https://www.foma-blog.ru" target="_blank">
                <v-img
                    src="https://foma-blog.ru/assets/fb15.svg"
                    title="www.foma-blog.ru"
                    alt="www.foma-blog.ru"
                ></v-img
            ></a>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-toolbar-title @click="drawer = true"> <v-icon>mdi-crop</v-icon> X-Cropper </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon color="primary" href="https://github.com/mrsky1001"> <v-icon large>mdi-npm</v-icon></v-btn>
            <v-btn icon color="primary" href="https://github.com/mrsky1001"> <v-icon large>mdi-github</v-icon></v-btn>
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
export default {
    data: () => ({
        drawer: true,
    }),
    components: { XCropper },
}
</script>

<style lang="scss">
* {
    font-family: monospace;
}
</style>
