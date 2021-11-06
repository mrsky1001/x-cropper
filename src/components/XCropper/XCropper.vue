<!--
  - Copyright (©) 06.11.2021, 18:08. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
  -->

<template>
    <div :class="'cropper ' + opts.cropperClasses">
        <input type="file" class="cropper-fileInput" ref="fileInput" v-show="false" @change="selectFile" />
        <div v-if="!file" class="cropper-droparea" @drop.prevent="dropFile" @dragover.prevent>
            <i>{{ opts.dropareaLabel }}</i>
            <v-btn color="primary" @click="triggerInput">
                <v-icon class="mr-1">mdi-image-plus</v-icon>
                {{ opts.selectBtnLabel }}
            </v-btn>
        </div>
        <div v-if="file" class="cropper-card">
            <v-toolbar :class="'cropper-toolbar ' + opts.toolbarClasses">
                <div v-if="opts.isShowToolbar">
                    <v-btn icon :title="opts.selectBtnLabel" @click="triggerInput">
                        <v-icon>mdi-image-plus</v-icon>
                    </v-btn>
                    <v-btn icon :title="opts.rotateLeftLabel" @click="rotate(-90)">
                        <v-icon>mdi-restore</v-icon>
                    </v-btn>
                    <v-btn icon :title="opts.rotateRightLabel" @click="rotate(90)">
                        <v-icon>mdi-reload</v-icon>
                    </v-btn>
                    <v-btn icon :title="opts.flipHorizontalLabel" @click="flip('h')">
                        <v-icon>mdi-axis-z-rotate-counterclockwise</v-icon>
                    </v-btn>
                    <v-btn icon :title="opts.flipVerticalLabel" @click="flip('v')">
                        <v-icon>mdi-horizontal-rotate-counterclockwise</v-icon>
                    </v-btn>
                    <v-btn icon :title="opts.clearLabel" @click="cancelCrop">
                        <v-icon>mdi-close-thick</v-icon>
                    </v-btn>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="primary" class="float-end" @click="doCrop">
                    <v-icon class="mr-1">mdi-content-save-outline</v-icon>
                    {{ opts.saveLabel }}
                </v-btn>
            </v-toolbar>

            <div v-if="opts.isShowFormParams" :class="'cropper-form-params ' + opts.formParamsClasses">
                <v-card class="cropper-form-toolbar">
                    <v-divider></v-divider>
                    <div>
                        <v-row>
                            <v-col sm="5">
                                <v-checkbox
                                    hide-details
                                    required
                                    dense
                                    outlined
                                    :label="opts.circleLabel"
                                    v-model="opts.isCircle"
                                ></v-checkbox>
                            </v-col>
                            <v-col sm="5">
                                <v-checkbox
                                    required
                                    dense
                                    hide-details
                                    outlined
                                    :label="opts.proportionalLabel"
                                    v-model="opts.isProportional"
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-select
                                    dense
                                    outlined
                                    hide-details
                                    item-text="text"
                                    item-value="val"
                                    v-model="opts.aspectRatio"
                                    :items="listAspectRatio"
                                    :label="opts.aspectRatioLabel"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    type="number"
                                    required
                                    autofocus
                                    outlined
                                    dense
                                    hide-details
                                    step="0.01"
                                    aria-valuemax="1"
                                    :label="opts.qualityLabel"
                                    v-model="opts.quality"
                                    @change="moveMouse()"
                                ></v-text-field>
                                <v-slider
                                    hide-details
                                    step="0.01"
                                    :max="1"
                                    v-model="opts.quality"
                                    @change="moveMouse()"
                                ></v-slider>
                            </v-col>
                        </v-row>
                        <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <v-icon>mdi-format-list-checks</v-icon>
                                    <v-card-subtitle> {{ opts.cropParamsLabel }}</v-card-subtitle>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                type="number"
                                                required
                                                autofocus
                                                dense
                                                outlined
                                                hide-details
                                                :label="opts.cropAreaWidthLabel"
                                                v-model="opts.cropArea.width"
                                                @change="updateCropperCord"
                                            ></v-text-field>
                                            <v-slider
                                                v-model="opts.cropArea.width"
                                                hide-details
                                                :max="maxCropAreaWidth"
                                                @change="updateCropperCord"
                                            ></v-slider>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                type="number"
                                                required
                                                dense
                                                autofocus
                                                outlined
                                                hide-details
                                                :label="opts.cropAreaHeightLabel"
                                                v-model="opts.cropArea.height"
                                                :disabled="opts.isProportional"
                                                @change="updateCropperCord"
                                            ></v-text-field>
                                            <v-slider
                                                v-model="opts.cropArea.height"
                                                hide-details
                                                :max="maxCropAreaHeight"
                                                :disabled="opts.isProportional"
                                                @input="updateCropperCord"
                                            ></v-slider>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                type="number"
                                                required
                                                autofocus
                                                dense
                                                outlined
                                                hide-details
                                                :label="opts.cropAreaXCoordLabel"
                                                v-model="opts.cropArea.x"
                                                @change="updateCropperCord"
                                            ></v-text-field>
                                            <v-slider
                                                v-model="opts.cropArea.x"
                                                hide-details
                                                :max="maxCropAreaWidth"
                                                @change="updateCropperCord"
                                            ></v-slider>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                type="number"
                                                required
                                                dense
                                                autofocus
                                                outlined
                                                hide-details
                                                :label="opts.cropAreaYCoordLabel"
                                                v-model="opts.cropArea.y"
                                                @change="updateCropperCord"
                                            ></v-text-field>
                                            <v-slider
                                                v-model="opts.cropArea.y"
                                                hide-details
                                                :max="maxCropAreaHeight"
                                                @input="updateCropperCord"
                                            ></v-slider>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <v-row>
                            <v-col sm="5">
                                <v-btn color="primary" hide-details dense @click="doubleClickCropper">
                                    <v-icon class="mr-1">mdi-crop-free</v-icon>
                                    {{ opts.fillCropAreaLabel }}
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
                <div :class="'crop-area ' + opts.cropAreaClasses">
                    <v-card class="cropper-preview-card">
                        <v-card-title style="place-content: center">{{ opts.cropAreaLabel }}</v-card-title>
                        <div
                            :style="{ width: maxCropAreaWidth + 'px', height: maxCropAreaHeight + 'px' }"
                            @dblclick="doubleClickCropper"
                        >
                            <canvas
                                ref="canvas"
                                :width="canvasWidth"
                                :height="canvasHeight"
                                style="background: #ccc"
                                @mousemove="moveMouse"
                                @mousedown="startDrag"
                                @mouseup="stopDrag"
                                @mouseleave="isDragged = false"
                            ></canvas>
                        </div>
                    </v-card>
                    <v-card class="cropper-preview-card">
                        <v-card-title style="place-content: center">{{ opts.previewLabel }}</v-card-title>
                        <div
                            v-if="opts.isShowPreview"
                            class="cropper-previewArea"
                            :style="{ width: prevDivWidth + 'px', height: prevDivHeight + 'px' }"
                        >
                            <img
                                :src="previewImage"
                                :style="{
                                    width: previewSize.w + 'px',
                                    height: previewSize.h + 'px',
                                    borderRadius: opts.isCircle ? '50%' : 0,
                                }"
                            />
                        </div>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="js">
import axios from 'axios'

export default {
    name: 'XCropper',
    props: {
        opts: {
            type: Object,
            default() {
                return {
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
                    isShowPreview: true,
                    isShowToolbar: true,
                    isShowFormParams: true,
                    isCloseOnSave: true,

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
                    isProportional: true,
                    isCircle: false,

                    // user changeable fields
                    aspectRatio: undefined,
                    rotation: 0,
                    maxCropAreaHeight: 0,
                    frameLineDash: [5, 3],
                    handleSize: 10,
                    quality: 0.65,

                    // colors
                    frameStrokeColor: 'rgba(255, 255, 255, 0.8)',
                    handleFillColor: 'rgba(255, 255, 255, 0.2)',
                    handleHoverFillColor: 'rgba(255, 255, 255, 0.4)',
                    handleHoverStrokeColor: 'rgba(255, 255, 255, 1)',
                    handleStrokeColor: 'rgba(255, 255, 255, 0.8)',
                    overlayFill: 'rgba(0, 0, 0, 0.5)',

                    // classes
                    cropperClasses: '',
                    toolbarClasses: '',
                    cropAreaClasses: '',
                    formParamsClasses: '',

                    // labels
                    dropareaLabel: 'Select or drop image...',
                    selectBtnLabel: 'Select image',
                    rotateLeftLabel: 'Rotate left',
                    rotateRightLabel: 'Rotate right',
                    flipHorizontalLabel: 'Flip horizontal',
                    flipVerticalLabel: 'Flip vertical',
                    clearLabel: 'Clear',
                    saveLabel: 'Save image',
                    circleLabel: 'Circle',
                    proportionalLabel: 'Proportional',
                    aspectRatioLabel: 'Aspect ratio',
                    previewLabel: 'Preview',
                    cropAreaLabel: 'Cropper area',
                    cropParamsLabel: 'Cropper params',
                    cropAreaWidthLabel: 'Width',
                    cropAreaHeightLabel: 'Height',
                    cropAreaXCoordLabel: 'X coordinate',
                    cropAreaYCoordLabel: 'Y coordinate',
                    fillCropAreaLabel: 'Full area',
                    qualityLabel: 'Quality',
                }
            }
        }
    },
    data() {
        return {
            ctx: null,
            file: null,
            over: null,
            image: null,
            fliph: null,
            flipv: null,
            canvas: null,
            previewImage: null,

            isDragged: false,
            isLoading: false,

            imageWidth: 0,
            imageHeight: 0,
            fullWidthUI: 500,
            listAspectRatio: [{ text: '1:1', val: 1 }, { text: '3:4', val: 0.765 }, { text: '16:9', val: 1.5 }],
            cropArea: {
                mx: 0,
                my: 0,
            },
        }
    },

    computed: {
        canvasHeight() {
            if (this.imageRatio <= this.cropperRatio) {
                return this.maxCropAreaHeight
            }

            return Math.round(this.maxCropAreaWidth / this.imageRatio)
        },
        canvasWidth() {
            if (this.imageRatio >= this.cropperRatio) {
                return this.maxCropAreaWidth
            }


            return Math.round(this.imageRatio * this.canvasHeight)
        },
        cropData() {
            const xParam = (this.imageWidth / this.canvasWidth + this.imageHeight / this.canvasHeight)
            const scale = Math.round(xParam / 0.002) / 1000
            const [rot, fh, fv] = [this.opts.rotation, this.fliph, this.flipv]

            const x = this.opts.cropArea.x * scale
            const y = this.opts.cropArea.y * scale
            const w = this.opts.cropArea.width * scale
            const h = this.opts.cropArea.height * scale
            const a = this.imageWidth - x - w
            const b = this.imageHeight - y - h

            let nx, ny, nw, nh

            if ((rot === 0 && !fh && !fv) || (rot === 180 && fh && fv)) {
                nx = x
                ny = y
            }

            if ((rot === 90 && !fh && !fv) || (rot === 270 && fh && fv)) {
                nx = y
                ny = a
            }

            if ((rot === 180 && !fh && !fv) || (rot === 0 && fh && fv)) {
                nx = a
                ny = b
            }

            if ((rot === 270 && !fh && !fv) || (rot === 90 && fh && fv)) {
                nx = b
                ny = x
            }

            if ((rot === 0 && fh && !fv) || (rot === 180 && !fh && fv)) {
                nx = a
                ny = y
            }

            if ((rot === 90 && fh && !fv) || (rot === 270 && !fh && fv)) {
                nx = y
                ny = x
            }

            if ((rot === 180 && fh && !fv) || (rot === 0 && !fh && fv)) {
                nx = x
                ny = b
            }

            if ((rot === 270 && fh && !fv) || (rot === 90 && !fh && fv)) {
                nx = b
                ny = a
            }

            if (rot === 0 || rot === 180) {
                nw = w
                nh = h
            } else {
                nw = h
                nh = w
            }

            return { x: nx, y: ny, w: nw, h: nh }
        },
        maxCropAreaHeight() {
            if (this.opts.maxCropAreaHeight && this.fullWidthUI > this.opts.layoutBreakpoint) {
                return this.opts.maxCropAreaHeight - 80
            }

            const calculatedHeight = Math.floor(this.maxCropAreaWidth / this.imageRatio)
            const maxHeight = this.opts.maxCropperHeight

            if (maxHeight && maxHeight > 100 && maxHeight < calculatedHeight) {
                return maxHeight - 80
            }

            return calculatedHeight
        },
        cropperRatio() {
            return Math.round((this.maxCropAreaWidth / this.maxCropAreaHeight) * 1000) / 1000
        },
        maxCropAreaWidth() {
            const mw = this.fullWidthUI

            if (this.fullWidthUI <= this.opts.layoutBreakpoint || !this.opts.isShowPreview) {
                return Math.floor(0.9 * mw)
            }

            return Math.floor(0.35 * mw)
        },
        cx() {
            const box = this.canvas.getBoundingClientRect()
            return this.cropArea.mx - box.left
        },
        cy() {
            const box = this.canvas.getBoundingClientRect()
            return this.cropArea.my - box.top
        },
        imageRatio() {
            if (this.imageHeight) {
                return Math.round((this.imageWidth / this.imageHeight) * 1000) / 1000
            }

            return 0
        },
        markers() {
            return {
                nw: { x: this.opts.cropArea.x - this.opts.handleSize, y: this.opts.cropArea.y - this.opts.handleSize },
                ne: {
                    x: this.opts.cropArea.x + this.opts.cropArea.width - this.opts.handleSize,
                    y: this.opts.cropArea.y - this.opts.handleSize
                },
                sw: {
                    x: this.opts.cropArea.x - this.opts.handleSize,
                    y: this.opts.cropArea.y + this.opts.cropArea.height - this.opts.handleSize
                },
                se: {
                    x: this.opts.cropArea.x + this.opts.cropArea.width - this.opts.handleSize,
                    y: this.opts.cropArea.y + this.opts.cropArea.height - this.opts.handleSize
                }
            }
        },
        prevDivHeight() {
            if (this.fullWidthUI > this.opts.layoutBreakpoint) {
                return this.maxCropAreaHeight
            }
            return 300
        },
        prevDivWidth() {
            const mw = this.fullWidthUI - 24

            if (this.fullWidthUI <= this.opts.layoutBreakpoint) {
                return mw
            }

            const w = Math.floor(0.4 * mw)

            return w > this.opts.maxCroppedAreaWidth ? this.opts.maxCroppedAreaWidth : w
        },
        previewCanvas() {
            if (!this.image || !this.resultCanvas) {
                return false
            }

            const canvas = document.createElement('canvas')

            canvas.width = this.previewSize.w
            canvas.height = this.previewSize.h

            const ctx = canvas.getContext('2d')
            ctx.drawImage(this.resultCanvas, 0, 0, canvas.width, canvas.height)

            return canvas
        },
        previewSize() {
            const [dw, dh] = [this.prevDivWidth - 20, this.prevDivHeight - 20]
            const pdratio = Math.round((dw / dh) * 1000) / 1000
            const resratio = Math.round((this.resultWidth / this.resultHeight) * 1000) / 1000

            let pw, ph

            if (resratio > pdratio) {
                pw = dw
                ph = dw / resratio
            } else {
                ph = dh
                pw = ph * resratio
            }
            return { w: Math.min(pw, this.resultWidth), h: Math.min(ph, this.resultHeight) }
        },
        resultCanvas() {
            if (!this.image) {
                return false
            }

            const canvas = document.createElement('canvas')

            canvas.width = this.resultWidth
            canvas.height = this.resultHeight

            const ctx = canvas.getContext('2d')
            ctx.save()

            if (this.fliph) {
                ctx.translate(this.resultWidth, 0)
                ctx.scale(-1, 1)
            }

            if (this.flipv) {
                ctx.translate(0, this.resultHeight)
                ctx.scale(1, -1)
            }

            const rotated = this.opts.rotation === 90 || this.opts.rotation === 270
            const w = rotated ? canvas.height : canvas.width
            const h = rotated ? canvas.width : canvas.height

            ctx.translate(canvas.width / 2, canvas.height / 2)
            ctx.rotate((this.opts.rotation * Math.PI) / 180)
            ctx.drawImage(
                this.image,
                this.cropData.x,
                this.cropData.y,
                this.cropData.w,
                this.cropData.h,
                -w / 2,
                -h / 2,
                w,
                h
            )

            ctx.restore()
            return canvas
        },
        resultWidth() {
            const [ar, cw, ch] = [this.opts.aspectRatio, this.opts.croppedAreaWidth, this.opts.croppedAreaHeight]
            const imageFactor = Math.round((this.imageWidth / this.canvasWidth) * 1000) / 1000
            const ratio = ar ? ar : this.opts.cropArea.width / this.opts.cropArea.height

            if (cw && !ch) {
                return cw
            }

            if (!cw && !ch) {
                return Math.round(this.opts.cropArea.width * imageFactor)
            }

            if (!cw && ch) {
                return Math.round(ch * ratio)
            }

            const resultRatio = cw / ch

            if (ratio >= resultRatio) {
                return cw
            }

            return Math.round(ch * ratio)
        },
        resultHeight() {
            const [ar, cw, ch] = [this.opts.aspectRatio, this.opts.croppedAreaWidth, this.opts.croppedAreaHeight]
            const imageFactor = Math.round((this.imageHeight / this.canvasHeight) * 1000) / 1000
            const ratio = ar ? ar : this.opts.cropArea.width / this.opts.cropArea.height

            if (ch && !cw) {
                return ch
            }

            if (!cw && !ch) {
                return Math.round(this.opts.cropArea.height * imageFactor)
            }

            if (!ch && cw) {
                return Math.round(cw / ratio)
            }

            const resultRatio = cw / ch

            if (ratio <= resultRatio) {
                return ch
            }

            return Math.round(cw / ratio)
        }
    },
    mounted() {
        this.getFullWidth()
        this.$emit('cropper-mounted')
        window.addEventListener('resize', this.getFullWidth)
    },
    beforeDestroy() {
        this.$emit('cropper-before-destroy')
        window.removeEventListener('resize', this.getFullWidth)
    },
    methods: {
        updateCropperCord() {
            this.isDragged = true
            this.moveMouse()
        },
        doubleClickCropper() {
            this.opts.cropArea.width = this.maxCropAreaWidth
            this.opts.cropArea.height = this.maxCropAreaHeight
            this.opts.cropArea.x = 0
            this.opts.cropArea.y = 0
        },
        cancelCrop() {
            const input = this.$refs.fileInput

            input.type = ''
            input.type = 'file'

            this.file = false
            this.$emit('cropper-cancelled')
        },
        doCrop() {
            const resultImage = this.resultCanvas.toDataURL(this.opts.resultMimeType, this.opts.quality)
            const n = this.file.name.lastIndexOf('.')
            const fname = this.file.name.substring(0, n)
            const finalData = {
                originalFile: this.file,
                filename: fname,
                rotation: this.opts.rotation,
                cropCoords: this.cropData,
                flippedH: this.fliph,
                flippedV: this.flipv,
                croppedImageURI: resultImage
            }

            this.resultCanvas.toBlob(
                (blob) => {
                    const nd = new Date()

                    blob.lastModified = nd.getTime()
                    blob.lastModifiedDate = nd
                    blob.name = fname
                    finalData.croppedFile = blob

                    this.$emit('cropper-saved', finalData)

                    if (this.opts.isUploadTo) {
                        const formData = new FormData()

                        for (let p in finalData) {
                            formData.append(p, finalData[p])
                        }

                        for (let m in this.opts.uploadData) {
                            formData.append(m, this.opts.uploadData[m])
                        }

                        axios.post(this.opts.isUploadTo, formData).then((response) => {
                            this.$emit('cropper-uploaded', response)

                            if (this.opts.closeOnSave) {
                                this.file = false
                            }
                        })
                    } else if (this.opts.closeOnSave) {
                        this.file = false
                    }
                },
                this.opts.resultMimeType,
                this.opts.quality
            )
        },
        drawCanvas() {
            if (!this.ctx) {
                return
            }

            this.drawImageOnCanvas()
            this.drawOverlay()
            this.drawMarkers()

            if (this.opts.isShowPreview && this.opts.isPreviewOnDrag && this.previewCanvas) {
                this.previewImage = this.previewCanvas.toDataURL('image/jpeg', this.opts.quality)
            }
        },
        drawImageOnCanvas() {
            if (!this.image) {
                return
            }

            this.ctx.save()

            if (this.fliph) {
                this.ctx.translate(this.canvasWidth, 0)
                this.ctx.scale(-1, 1)
            }

            if (this.flipv) {
                this.ctx.translate(0, this.canvasHeight)
                this.ctx.scale(1, -1)
            }

            const rotated = this.opts.rotation === 90 || this.opts.rotation === 270
            const w = rotated ? this.canvasHeight : this.canvasWidth
            const h = rotated ? this.canvasWidth : this.canvasHeight

            this.ctx.translate(this.canvasWidth / 2, this.canvasHeight / 2)
            this.ctx.rotate((this.opts.rotation * Math.PI) / 180)
            this.ctx.drawImage(this.image, -w / 2, -h / 2, w, h)
            this.ctx.restore()
        },
        drawMarkers() {
            const [mouseX, mouseY] = [this.cx, this.cy]
            const ctx = this.ctx

            this.canvas.style.cursor = 'default'
            this.over = false

            // draw selection border
            ctx.beginPath()
            if (!this.opts.isCircle) {
                ctx.rect(this.opts.cropArea.x, this.opts.cropArea.y, this.opts.cropArea.width, this.opts.cropArea.height)
            } else {
                ctx.arc(
                    this.opts.cropArea.x + this.opts.cropArea.width / 2,
                    this.opts.cropArea.y + this.opts.cropArea.height / 2,
                    this.opts.cropArea.width / 2,
                    0,
                    2 * Math.PI
                )
            }

            if (ctx.isPointInPath(mouseX, mouseY)) {
                this.over = 'all'
                this.canvas.style.cursor = 'move'
            }

            ctx.setLineDash(this.opts.frameLineDash)
            ctx.strokeStyle = this.opts.frameStrokeColor
            ctx.stroke()

            // clear dash
            ctx.setLineDash([])

            // draw markers
            for (let p in this.markers) {
                const marker = this.markers[p]

                ctx.beginPath()
                ctx.rect(marker.x, marker.y, this.opts.handleSize * 2, this.opts.handleSize * 2)
                ctx.fillStyle = this.opts.handleFillColor
                ctx.strokeStyle = this.opts.handleStrokeColor

                if (ctx.isPointInPath(mouseX, mouseY)) {
                    ctx.fillStyle = this.opts.handleHoverFillColor
                    ctx.strokeStyle = this.opts.handleHoverStrokeColor
                    this.canvas.style.cursor = p + '-resize'
                    this.over = p
                }

                ctx.fill()
                ctx.stroke()
            }
        },
        drawOverlay() {
            const ctx = this.ctx
            const [cnW, cnH, crY, crX, crH, crW] = [
                this.canvasWidth,
                this.canvasHeight,
                this.opts.cropArea.y,
                this.opts.cropArea.x,
                this.opts.cropArea.height,
                this.opts.cropArea.width
            ]

            ctx.fillStyle = this.opts.overlayFill

            ctx.fillRect(0, 0, cnW, crY)
            ctx.fillRect(0, crY, crX, crH)
            ctx.fillRect(crX + crW, crY, cnW - (crX + crW), crH)
            ctx.fillRect(
                0,
                crY + crH,
                cnW,
                cnH - (crY + crH)
            )

            if (this.opts.isCircle) {
                ctx.beginPath()
                ctx.arc(crX + crW / 2, crY + crH / 2, crW / 2, Math.PI, 1.5 * Math.PI)
                ctx.lineTo(crX, crY)
                ctx.closePath()
                ctx.fill()

                ctx.beginPath()
                ctx.arc(crX + crW / 2, crY + crH / 2, crW / 2, 1.5 * Math.PI, 2 * Math.PI)
                ctx.lineTo(crX + crW, crY)
                ctx.closePath()
                ctx.fill()

                ctx.beginPath()
                ctx.arc(crX + crW / 2, crY + crH / 2, crW / 2, 0, 0.5 * Math.PI)
                ctx.lineTo(crX + crW, crY + crH)
                ctx.closePath()
                ctx.fill()

                ctx.beginPath()
                ctx.arc(crX + crW / 2, crY + crH / 2, crW / 2, 0.5 * Math.PI, Math.PI)
                ctx.lineTo(crX, crY + crH)
                ctx.closePath()
                ctx.fill()
            }
        },
        dropFile(evt) {
            const file = evt.dataTransfer.files[0]
            this.useFile(file)
        },
        flip(direction) {
            if (direction === 'v') {
                this.flipv = !this.flipv
                this.opts.cropArea.y = this.canvasHeight - this.opts.cropArea.y - this.opts.cropArea.height
            } else {
                this.fliph = !this.fliph
                this.opts.cropArea.x = this.canvasWidth - this.opts.cropArea.x - this.opts.cropArea.width
            }

            this.drawCanvas()

            if (this.opts.isShowPreview && !this.opts.isPreviewOnDrag && this.previewCanvas) {
                this.previewImage = this.previewCanvas.toDataURL('image/jpeg', this.opts.quality)
            }
        },
        getFullWidth() {
            const elSize = this.$el.getBoundingClientRect()
            this.fullWidthUI = elSize.width
            this.$nextTick(this.drawCanvas)
        },
        humanFileSize(bytes, si) {
            si === undefined &&  (si = true)

            const  thresh = si ? 1000 : 1024

            if (Math.abs(bytes) < thresh) {
                return bytes + ' B'
            }

            const  units = si
                ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
                : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

            let u = -1

            do {
                bytes /= thresh
                ++u
            } while (Math.abs(bytes) >= thresh && u < units.length - 1)

            return bytes.toFixed(1) + ' ' + units[u]
        },
        moveMouse(evt) {
            let dx = 0
            let dy = 0

            if (evt) {
                const mx = evt.clientX || evt.touches[0].clientX
                const my = evt.clientY || evt.touches[0].clientY

                dx = mx - this.cropArea.mx
                dy = my - this.cropArea.my

                this.cropArea.mx = mx
                this.cropArea.my = my
            }

            if (this.isDragged) {
                this.updateCoords(dx, dy)
            }

            this.drawCanvas()
        },
        rotate: (delta) => {
            const canvasSize = [this.canvasWidth, this.canvasHeight]

            if (this.fliph ? !this.flipv : this.flipv) {
                this.opts.rotation -= delta
            } else {
                this.opts.rotation += delta
            }

            if (this.opts.rotation > 270) {
                this.opts.rotation = 0
            }

            if (this.opts.rotation < 0) {
                this.opts.rotation = 270
            }

            this.imageWidth = this.imageHeight
            this.imageHeight = this.imageWidth

            this.$nextTick(() => {
                const scaleX = this.canvasHeight / canvasSize[0]
                const scaleY = this.canvasWidth / canvasSize[1]

                const nx = this.canvasWidth - this.opts.cropArea.y * scaleY - this.opts.cropArea.height * scaleY
                const ny = this.opts.cropArea.x * scaleX
                const nw = this.opts.cropArea.height * scaleY * this.opts.aspectRatio
                const nh = this.opts.cropArea.width * scaleX * this.opts.aspectRatio

                this.opts.cropArea.x = Math.round(nx)
                this.opts.cropArea.y = Math.round(ny)
                this.opts.cropArea.width = Math.round(nw)
                this.opts.cropArea.height = Math.round(nh)

                this.updateCoords()
                this.drawCanvas()

                if (this.opts.isShowPreview && !this.opts.isPreviewOnDrag && this.previewCanvas) {
                    this.previewImage = this.previewCanvas.toDataURL('image/jpeg', this.opts.quality)
                }
            })
        },
        selectFile(evt) {
            const file = evt.currentTarget.files[0]

            if (file) {
                this.useFile(file)
            }

            this.getFullWidth()
        },
        startCanvas() {
            if (this.image) {
                this.canvas = this.$refs.canvas
                this.ctx = this.canvas.getContext('2d')

                if (!this.opts.aspectRatio) {
                    this.opts.cropArea.width = Math.round(this.canvasWidth)
                    this.opts.cropArea.height = Math.round(this.canvasHeight)
                    this.opts.aspectRatio = this.imageRatio
                } else if (this.opts.aspectRatio >= this.imageRatio) {
                    this.opts.cropArea.width = Math.round(this.canvasWidth)
                    this.opts.cropArea.height = Math.round(this.opts.cropArea.width / this.opts.aspectRatio)
                } else {
                    this.opts.cropArea.height = Math.round(this.canvasHeight)
                    this.opts.cropArea.width = Math.round(this.opts.cropArea.height * this.opts.aspectRatio)
                }

                this.opts.cropArea.x = Math.round((this.canvasWidth - this.opts.cropArea.width) / 2)
                this.opts.cropArea.y = Math.round((this.canvasHeight - this.opts.cropArea.height) / 2)

                this.drawCanvas()
            } else {
                this.canvas = false
                this.ctx = false
            }

            if (this.opts.isShowPreview && this.previewCanvas) {
                this.previewImage = this.previewCanvas.toDataURL('image/jpeg', this.opts.quality)
            }

            this.canvas.addEventListener('touchstart', (e) => {
                e.preventDefault()
                this.startDrag(e)
            })

            this.canvas.addEventListener('touchend', (e) => {
                e.preventDefault()
                this.stopDrag(e)
            })

            this.canvas.addEventListener('touchmove', (e) => {
                e.preventDefault()
                this.moveMouse(e)
            })
        },
        startDrag(e) {
            if (e.touches !== undefined) {
                this.cropArea.mx = e.touches[0].clientX
                this.cropArea.my = e.touches[0].clientY
                this.drawCanvas()
            }

            this.isDragged = this.over
        },
        stopDrag() {
            this.isDragged = false

            const preview = this.resultCanvas.toDataURL('image/jpeg', this.opts.quality)

            this.$emit('cropper-preview', preview)

            if (this.opts.isShowPreview && this.previewCanvas) {
                this.previewImage = this.previewCanvas.toDataURL('image/jpeg', this.opts.quality)
            }
        },
        triggerInput() {
            const input = this.$refs.fileInput
            input.click()
        },
        updateCoords(dx, dy) {
            let nx = this.opts.cropArea.x
            let ny = this.opts.cropArea.y
            let nw = this.opts.cropArea.width
            let nh = this.opts.cropArea.height
            const ar = this.opts.aspectRatio

            switch (this.isDragged) {
                case 'all':
                    nx = this.opts.cropArea.x + dx
                    ny = this.opts.cropArea.y + dy
                    break
                case 'nw':
                    nx = this.opts.cropArea.x + dx
                    ny = this.opts.cropArea.y + dy
                    nw = this.opts.cropArea.width - dx
                    nh = this.opts.cropArea.height - dy
                    break
                case 'ne':
                    ny = this.opts.cropArea.y + dy
                    nw = this.opts.cropArea.width + dx
                    nh = this.opts.cropArea.height - dy
                    break
                case 'sw':
                    nx = this.opts.cropArea.x + dx
                    nw = this.opts.cropArea.width - dx
                    nh = this.opts.cropArea.height + dy
                    break
                case 'se':
                    nw = this.opts.cropArea.width + dx
                    nh = this.opts.cropArea.height + dy
                    break
            }

            // keep aspect ratio
            if (ar) {
                nh = nw / ar
            }

            // keep minimal dimensions
            if (nw < this.opts.cropArea.minWidth || nh < this.opts.cropArea.minHeight) {
                if (ar && ar > 1) {
                    nh = this.opts.cropArea.minHeight
                    nw = nh * ar
                } else if (ar && ar < 1) {
                    nw = this.opts.cropArea.minWidth
                    nh = nw / ar
                } else {

                    if (nw < this.opts.cropArea.minWidth) {
                        nw = this.opts.cropArea.minWidth
                    }

                    if (nh < this.opts.cropArea.minHeight) {
                        nh = this.opts.cropArea.minHeight
                    }
                }
            }

            // don't expand over canvas width
            if (nw + nx > this.canvasWidth) {
                nw = this.canvasWidth - nx

                if (ar) {
                    nh = nw / ar
                }

                if (nw / ar < this.opts.cropArea.minHeight && ar && ar > 1) {
                    nh = this.opts.cropArea.minHeight
                    nw = nh * ar
                    nx = this.canvasWidth - nw
                }

                if (nw < this.opts.cropArea.minWidth) {
                    nw = this.opts.cropArea.minWidth
                    nx = this.canvasWidth - nw
                }
            }

            // don't expand over canvas height
            if (nh + ny > this.canvasHeight) {
                nh = this.canvasHeight - ny

                if (ar) {
                    nw = nh * ar
                }

                if (nh * ar < this.opts.cropArea.minWidth && ar && ar < 1) {
                    nw = this.opts.cropArea.minWidth
                    nh = nw / ar
                    ny = this.canvasHeight - nh
                }

                if (nh < this.opts.cropArea.minHeight) {
                    nh = this.opts.cropArea.minHeight
                    ny = this.canvasHeight - nh
                }
            }

            // dont cross 0 borders
            if (nx < 0) {
                nx = 0
            }

            if (ny < 0) {
                ny = 0
            }

            this.opts.cropArea.x = nx
            this.opts.cropArea.y = ny
            this.opts.cropArea.width = nw
            this.opts.cropArea.height = nh
        },
        useFile(file) {
            if (this.opts.inputMimeTypes.indexOf(file.type) === -1) {
                this.$emit('cropper-error', 'Wrong file type: ' + file.type)
                return
            }
            if (this.opts.maxFileSize && file.size > this.opts.maxFileSize) {
                const fileSize = this.humanFileSize(file.size)

                this.$emit(
                    'cropper-error',
                    'File too large (' + fileSize + ')! Max file size is ' + this.humanFileSize(this.opts.maxFileSize)
                )

                return
            }

            this.file = file
            this.$emit('cropper-file-selected', file)
        }
    },
    watch: {
        isProportional(val) {
            this.aspectRatio = val ? this.aspectRatio : undefined
        },
        'opts.cropArea.width'() {
            this.drawCanvas()
        },
        'opts.cropArea.x'() {
            this.drawCanvas()
        },
        file(nf) {
            this.opts.rotation = 0
            this.fliph = false
            this.flipv = false

            const reader = new FileReader()

            reader.onload = (evt) => {
                const img = new Image()

                img.onload = () => {
                    this.imageWidth = img.width
                    this.imageHeight = img.height
                    this.image = img
                    this.loadingImage = false
                    this.$nextTick(this.startCanvas)
                }

                img.onerror = (error) => {
                    this.loadingImage = false
                    this.imageWidth = 0
                    this.imageHeight = 0
                    this.image = false
                    this.file = false
                    this.$emit('cropper-error', 'Image reading error' + error)
                }

                const input = this.$refs.fileInput

                input.val = ''
                img.src = evt.target.result
            }

            reader.onerror = (error) => {
                this.file = false
                this.$emit('cropper-error', 'File reading error' + error)
            }

            if (nf) {
                reader.readAsDataURL(this.file)
            } else {
                this.imageWidth = 0
                this.imageHeight = 0
                this.image = false
            }
        }
    }
}
</script>
<style lang="scss">
.cropper {
    .row {
        margin: 0;
    }

    .v-expansion-panel-header {
        padding: 0 !important;

        &:hover {
            background: #eeeeee;
        }
    }

    .v-expansion-panel-header--active {
        background: #eeeeee;
    }

    .cropper-form-toolbar {
        border-radius: 0 !important;
        box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.2), 0 5px 24px 0 rgba(0, 0, 0, 0.14), 0 rgba(0, 0, 0, 0.12) !important;
    }

    .cropper-form-params {
        display: flex;
        flex-wrap: wrap;
    }

    .cropper-toolbar {
        height: unset !important;

        div {
            height: unset !important;
            display: flex;
            flex-wrap: wrap !important;
            justify-content: space-around;

            div {
                .v-btn {
                    &:hover {
                        color: #2b81d6 !important;
                    }
                }
            }
        }
    }

    .cropper-card {
        background: #ececec;
        border-radius: 3px;
        position: relative;
        overflow: hidden;
        font-family: Avenir, Helvetica, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;

        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;

        a {
            text-decoration: none;
        }

        .crop-area {
            display: flex;
            flex-direction: row;

            .cropper-preview-card {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                align-items: center;
            }

            > * {
                margin: 20px;
            }
        }
    }

    .cropper-droparea {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border: dashed 2px #367bb7;
        text-align: center;
        margin: 2em;
        padding: 2em;

        > * {
            margin: 5px;
        }
    }

    .cropper-selectButton {
        min-width: 50px;
        min-height: 30px;
        padding: 5px 20px;
        background: #334f90;
        color: #fff;
        border: none;
        margin: 10px;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .cropper-navigation {
        padding: 12px;
        border-radius: 3px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    }

    .cropper-navButton {
        min-width: 30px;
        min-height: 30px;
        padding: 5px 8px;
        background: white;
        border-radius: 3px;
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 10px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.15), 1px 1px 2px rgba(0, 0, 0, 0.25);
    }

    .cropper-saveButton {
        min-width: 50px;
        min-height: 30px;
        padding: 4px 15px;
        border-radius: 3px;
        float: right;
        display: inline-block;
        height: 16px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.15), 1px 1px 2px rgba(0, 0, 0, 0.25);
        font-size: 14px;

        svg {
            vertical-align: bottom;
        }
    }

    .cropper-mainArea {
        margin: 12px;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
    }

    .cropper-previewArea {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media screen and (max-width: 1000px) {
    .cropper-card {
        .crop-area {
            .cropper-preview-card {
                margin: 0 !important;
            }

            width: 100% !important;
        }
    }
    .cropper-form-params {
        .cropper-form-toolbar {
            width: 100% !important;
        }
    }
}

@media screen and (max-width: 1300px) {
    .cropper-card {
        .crop-area {
            flex-direction: column;
        }
    }
}
</style>
