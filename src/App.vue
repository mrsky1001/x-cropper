<!--
  - Copyright (©) 06.11.2021, 18:08. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer">
            <div
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
                    <v-img
                        style="opacity: 0.7"
                        max-width="100px"
                        :src="logo"
                        title="www.foma-blog.ru"
                        alt="www.foma-blog.ru"
                    />
                </a>
            </div>
            <v-row style="margin: 20px 0 0 0">
                <v-col>
                    <v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowToolbar"
                        v-model="options.isShowToolbar"
                    />
                    <v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowFormParams"
                        v-model="options.isShowFormParams"
                    />
                    <v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowExpansionPnl"
                        v-model="options.isShowExpansionPnl"
                    />
                    <v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowSaveBtn"
                        v-model="options.isShowSaveBtn"
                    />
                    <v-checkbox
                        hide-details
                        required
                        dense
                        outlined
                        label="isShowCircleChk"
                        v-model="options.isShowCircleChk"
                    />

                    <v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowProportionalChk"
                        v-model="options.isShowProportionalChk"
                    />
                    <v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowAspectRatioFld"
                        v-model="options.isShowAspectRatioFld"
                    />
                    <v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowQualityFld"
                        v-model="options.isShowQualityFld"
                    /><v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowFullAreaBtn"
                        v-model="options.isShowFullAreaBtn"
                    /><v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowSelectImgBtn"
                        v-model="options.isShowSelectImgBtn"
                    /><v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowRotateLeftBtn"
                        v-model="options.isShowRotateLeftBtn"
                    /><v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowRotateRightBtn"
                        v-model="options.isShowRotateRightBtn"
                    /><v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowFlipHorizBtn"
                        v-model="options.isShowFlipHorizBtn"
                    /><v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowFlipVertBtn"
                        v-model="options.isShowFlipVertBtn"
                    /><v-checkbox
                        required
                        dense
                        hide-details
                        outlined
                        label="isShowClearBtn"
                        v-model="options.isShowClearBtn"
                    />
                    <v-text-field
                        type="number"
                        autofocus
                        dense
                        outlined
                        hide-details
                        style="margin: 10px 0 0 0"
                        label="maxCropperHeight"
                        v-model="options.maxCropperHeight"
                    />
                    <v-slider v-model="options.maxCropperHeight" hide-details :max="1000" />
                </v-col>
            </v-row>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-toolbar-title @click="drawer = true"> <v-icon>mdi-crop</v-icon> X-Cropper </v-toolbar-title>
            <v-spacer />
            <v-btn icon color="primary" href="https://www.npmjs.com/package/x-cropper">
                <v-icon large> mdi-npm </v-icon>
            </v-btn>
            <v-btn icon color="primary" href="https://github.com/mrsky1001/x-cropper">
                <v-icon large> mdi-github </v-icon>
            </v-btn>
            <v-btn icon color="primary" href="https://foma-blog.ru/">
                <v-img
                    alt="www.foma-blog.ru"
                    title="www.foma-blog.ru"
                    src="https://foma-blog.ru/assets/fb15.svg"
                    :style="{ width: '95px', margin: '8px 0 0 9px' }"
                />
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <x-cropper :options="options" />
            </v-container>
        </v-main>

        <v-footer app />
    </v-app>
</template>
<script>
import XCropper from './components/XCropper/XCropper'
import logo from '../assets/x-cropper-logo-64.png'

export default {
    data: () => ({
        drawer: true,
        logo: logo,
        options: {
            // system
            inputMimeTypes: ['image/jpeg', 'image/png', 'image/gif'],
            resultMimeType: 'image/jpeg',
            maxFileSize: 8000000, // 8MB
            layoutBreakpoint: 850,
            maxCropperHeight: 600,
            croppedAreaHeight: 400,
            croppedAreaWidth: 400,
            maxCroppedAreaWidth: 400,
            uploadData: {},

            isUploadTo: false,
            isPreviewOnDrag: true,
            isCloseOnSave: true,

            // show flags
            isShowPreview: true,
            isShowToolbar: true,
            isShowSaveBtn: true,
            isShowClearBtn: true,
            isShowCircleChk: true,
            isShowQualityFld: true,
            isShowFormParams: true,
            isShowFullAreaBtn: true,
            isShowFlipVertBtn: true,
            isShowFlipHorizBtn: true,
            isShowSelectImgBtn: true,
            isShowExpansionPnl: true,
            isShowRotateLeftBtn: true,
            isShowAspectRatioFld: true,
            isShowRotateRightBtn: true,
            isShowProportionalChk: true,

            cropArea: {
                minWidth: 8,
                minHeight: 8,

                // user changeable fields
                width: 0,
                height: 0,
                x: 20,
                y: 20,
            },

            // user changeable checks
            isCircle: true,
            isProportional: false,

            // user changeable fields
            rotation: 0,
            quality: 0.85,
            handleSize: 10,
            aspectRatio: 1,
            maxCropAreaHeight: 0,
            frameLineDash: [5, 3],

            // colors
            overlayFill: 'rgba(0, 0, 0, 0.5)',
            handleFillColor: 'rgba(255, 255, 255, 0.2)',
            frameStrokeColor: 'rgba(255, 255, 255, 0.8)',
            handleStrokeColor: 'rgba(255, 255, 255, 0.8)',
            handleHoverFillColor: 'rgba(255, 255, 255, 0.4)',
            handleHoverStrokeColor: 'rgba(255, 255, 255, 1)',

            // style classes
            cropperClasses: '',
            toolbarClasses: '',
            cropAreaClasses: '',
            formParamsClasses: '',

            // labels

            clearLabel: 'Clear',
            circleLabel: 'Circle',
            previewLabel: 'Preview',
            qualityLabel: 'Quality',
            saveLabel: 'Save image',
            cropAreaWidthLabel: 'Width',
            cropAreaHeightLabel: 'Height',
            cropAreaLabel: 'Cropper area',
            rotateLeftLabel: 'Rotate left',
            fullCropAreaLabel: 'Full area',
            selectBtnLabel: 'Select image',
            aspectRatioLabel: 'Aspect ratio',
            rotateRightLabel: 'Rotate right',
            cropParamsLabel: 'Cropper params',
            proportionalLabel: 'Proportional',
            flipVerticalLabel: 'Flip vertical',
            cropAreaYCoordLabel: 'Y coordinate',
            cropAreaXCoordLabel: 'X coordinate',
            flipHorizontalLabel: 'Flip horizontal',
            dropareaLabel: 'Select or drop image...',
        },
    }),
    components: { XCropper },
}
</script>

<style lang="scss">
* {
    font-family: monospace;
}
</style>
