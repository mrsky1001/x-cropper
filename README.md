![x-cropper](assets/x-cropper-logo-64.png)

# XCropper

An image cropper and uploader component for VueJS with Vuetify

[X-Cropper Demo](https://mrsky1001.github.io/x-cropper/)

____

## Installation

### NPM

```bash
npm install x-cropper
```

### YARN

```bash
yarn add x-cropper
```


### UI

![x-cropper](assets/x-cropper-2.png)


## Usage

Most basic example. This is going to insert the cropper with default options:

```vue

<template>
  <div>
    <h1>XCropper - crop all!</h1>
    <x-cropper></x-cropper>
  </div>
</template>
<script>
import XCropper from 'x-cropper'
import 'x-cropper/dist/XCropper.css'

export default {
  components: {XCropper}
}
</script>
```

Example with all the options and events:

```vue

<template>
  <div>
    <h1>XCropper - crop all!</h1>
    <x-cropper
        :options="{
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
        }"
        
        @cropper-error="someAction(errorMessage)"
        @cropper-file-selected="someAction(file)"
        @cropper-preview="someAction(imageSource)"
        @cropper-saved="someAction(cropData)"
        @cropper-cancelled="someAction()"
        @cropper-uploaded="someAction(serverResponse)"
    ></x-cropper>
  </div>
</template>
<script>
import XCropper from 'x-cropper'
import 'x-cropper/dist/XCropper.css'

export default {
  name: 'XCropper',
  components: {XCropper}
}
</script> 
```
