(function(t){function e(e){for(var o,r,p=e[0],h=e[1],n=e[2],c=0,d=[];c<p.length;c++)r=p[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(o in h)Object.prototype.hasOwnProperty.call(h,o)&&(t[o]=h[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,n||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],o=!0,p=1;p<i.length;p++){var h=i[p];0!==s[h]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var o={},s={app:0},a=[];function r(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=o,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(i,o,function(e){return t[e]}.bind(null,o));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/x-cropper/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],h=p.push.bind(p);p.push=e,p=p.slice();for(var n=0;n<p.length;n++)e(p[n]);var l=h;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"3eee":function(t,e,i){},"43e7":function(t,e,i){"use strict";i("3eee")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("div",{style:{margin:"20px 0 0 0",display:"flex",flexWrap:"wrap",flexDirection:"column",justifyContent:"space-around",alignContent:"center"}},[i("a",{attrs:{href:"https://www.foma-blog.ru",target:"_blank"}},[i("v-img",{staticStyle:{opacity:"0.7"},attrs:{"max-width":"100px",src:t.logo,title:"www.foma-blog.ru",alt:"www.foma-blog.ru"}})],1)]),i("v-row",{staticStyle:{margin:"20px 0 0 0"}},[i("v-col",[i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowToolbar"},model:{value:t.options.isShowToolbar,callback:function(e){t.$set(t.options,"isShowToolbar",e)},expression:"options.isShowToolbar"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowFormParams"},model:{value:t.options.isShowFormParams,callback:function(e){t.$set(t.options,"isShowFormParams",e)},expression:"options.isShowFormParams"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowExpansionPnl"},model:{value:t.options.isShowExpansionPnl,callback:function(e){t.$set(t.options,"isShowExpansionPnl",e)},expression:"options.isShowExpansionPnl"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowSaveBtn"},model:{value:t.options.isShowSaveBtn,callback:function(e){t.$set(t.options,"isShowSaveBtn",e)},expression:"options.isShowSaveBtn"}}),i("v-checkbox",{attrs:{"hide-details":"",required:"",dense:"",outlined:"",label:"isShowCircleChk"},model:{value:t.options.isShowCircleChk,callback:function(e){t.$set(t.options,"isShowCircleChk",e)},expression:"options.isShowCircleChk"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowProportionalChk"},model:{value:t.options.isShowProportionalChk,callback:function(e){t.$set(t.options,"isShowProportionalChk",e)},expression:"options.isShowProportionalChk"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowAspectRatioFld"},model:{value:t.options.isShowAspectRatioFld,callback:function(e){t.$set(t.options,"isShowAspectRatioFld",e)},expression:"options.isShowAspectRatioFld"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowQualityFld"},model:{value:t.options.isShowQualityFld,callback:function(e){t.$set(t.options,"isShowQualityFld",e)},expression:"options.isShowQualityFld"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowFullAreaBtn"},model:{value:t.options.isShowFullAreaBtn,callback:function(e){t.$set(t.options,"isShowFullAreaBtn",e)},expression:"options.isShowFullAreaBtn"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowSelectImgBtn"},model:{value:t.options.isShowSelectImgBtn,callback:function(e){t.$set(t.options,"isShowSelectImgBtn",e)},expression:"options.isShowSelectImgBtn"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowRotateLeftBtn"},model:{value:t.options.isShowRotateLeftBtn,callback:function(e){t.$set(t.options,"isShowRotateLeftBtn",e)},expression:"options.isShowRotateLeftBtn"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowRotateRightBtn"},model:{value:t.options.isShowRotateRightBtn,callback:function(e){t.$set(t.options,"isShowRotateRightBtn",e)},expression:"options.isShowRotateRightBtn"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowFlipHorizBtn"},model:{value:t.options.isShowFlipHorizBtn,callback:function(e){t.$set(t.options,"isShowFlipHorizBtn",e)},expression:"options.isShowFlipHorizBtn"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowFlipVertBtn"},model:{value:t.options.isShowFlipVertBtn,callback:function(e){t.$set(t.options,"isShowFlipVertBtn",e)},expression:"options.isShowFlipVertBtn"}}),i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:"isShowClearBtn"},model:{value:t.options.isShowClearBtn,callback:function(e){t.$set(t.options,"isShowClearBtn",e)},expression:"options.isShowClearBtn"}}),i("v-text-field",{staticStyle:{margin:"10px 0 0 0"},attrs:{type:"number",autofocus:"",dense:"",outlined:"","hide-details":"",label:"maxCropperHeight"},model:{value:t.options.maxCropperHeight,callback:function(e){t.$set(t.options,"maxCropperHeight",e)},expression:"options.maxCropperHeight"}}),i("v-slider",{attrs:{"hide-details":"",max:1e3},model:{value:t.options.maxCropperHeight,callback:function(e){t.$set(t.options,"maxCropperHeight",e)},expression:"options.maxCropperHeight"}})],1)],1)],1),i("v-app-bar",{attrs:{app:""}},[i("v-toolbar-title",{on:{click:function(e){t.drawer=!0}}},[i("v-icon",[t._v("mdi-crop")]),t._v(" X-Cropper ")],1),i("v-spacer"),i("v-btn",{attrs:{icon:"",color:"primary",href:"https://www.npmjs.com/package/x-cropper"}},[i("v-icon",{attrs:{large:""}},[t._v(" mdi-npm ")])],1),i("v-btn",{attrs:{icon:"",color:"primary",href:"https://github.com/mrsky1001/x-cropper"}},[i("v-icon",{attrs:{large:""}},[t._v(" mdi-github ")])],1),i("v-btn",{attrs:{icon:"",color:"primary",href:"https://foma-blog.ru/"}},[i("v-img",{style:{width:"95px",margin:"8px 0 0 9px"},attrs:{alt:"www.foma-blog.ru",title:"www.foma-blog.ru",src:"https://foma-blog.ru/assets/fb15.svg"}})],1)],1),i("v-main",[i("v-container",{attrs:{fluid:""}},[i("x-cropper",{attrs:{options:t.options}})],1)],1),i("v-footer",{attrs:{app:""}})],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"cropper "+t.opts.cropperClasses},[i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileInput",staticClass:"cropper-fileInput",attrs:{type:"file"},on:{change:t.selectFile}}),t.file?t._e():i("div",{staticClass:"cropper-droparea",on:{drop:function(e){return e.preventDefault(),t.dropFile.apply(null,arguments)},dragover:function(t){t.preventDefault()}}},[i("i",[t._v(t._s(t.opts.dropareaLabel))]),i("v-btn",{attrs:{color:"primary"},on:{click:t.triggerInput}},[i("v-icon",{staticClass:"mr-1"},[t._v(" mdi-image-plus")]),t._v(" "+t._s(t.opts.selectBtnLabel)+" ")],1)],1),t.file?i("div",{staticClass:"cropper-card"},[i("v-toolbar",{class:"cropper-toolbar "+t.opts.toolbarClasses},[t.opts.isShowToolbar?i("div",[t.opts.isShowSelectImgBtn?i("v-btn",{attrs:{icon:"",title:t.opts.selectBtnLabel},on:{click:t.triggerInput}},[i("v-icon",[t._v("mdi-image-plus")])],1):t._e(),t.opts.isShowRotateLeftBtn?i("v-btn",{attrs:{icon:"",title:t.opts.rotateLeftLabel},on:{click:function(e){return t.rotate(-90)}}},[i("v-icon",[t._v("mdi-restore")])],1):t._e(),t.opts.isShowRotateRightBtn?i("v-btn",{attrs:{icon:"",title:t.opts.rotateRightLabel},on:{click:function(e){return t.rotate(90)}}},[i("v-icon",[t._v("mdi-reload")])],1):t._e(),t.opts.isShowFlipHorizBtn?i("v-btn",{attrs:{icon:"",title:t.opts.flipHorizontalLabel},on:{click:function(e){return t.flip("h")}}},[i("v-icon",[t._v("mdi-axis-z-rotate-counterclockwise")])],1):t._e(),t.opts.isShowFlipVertBtn?i("v-btn",{attrs:{icon:"",title:t.opts.flipVerticalLabel},on:{click:function(e){return t.flip("v")}}},[i("v-icon",[t._v("mdi-horizontal-rotate-counterclockwise")])],1):t._e(),t.opts.isShowClearBtn?i("v-btn",{attrs:{icon:"",title:t.opts.clearLabel},on:{click:t.cancelCrop}},[i("v-icon",[t._v("mdi-close-thick")])],1):t._e()],1):t._e(),i("v-spacer"),t.opts.isShowSaveBtn?i("v-btn",{staticClass:"float-end",attrs:{color:"primary"},on:{click:t.doCrop}},[i("v-icon",{staticClass:"mr-1"},[t._v(" mdi-content-save-outline")]),t._v(" "+t._s(t.opts.saveLabel)+" ")],1):t._e()],1),i("div",{class:"cropper-form-params "+t.opts.formParamsClasses},[t.opts.isShowFormParams?i("v-card",{staticClass:"cropper-form-toolbar"},[i("v-divider"),i("div",[i("v-row",[t.opts.isShowCircleChk?i("v-col",{attrs:{sm:"5"}},[i("v-checkbox",{attrs:{"hide-details":"",required:"",dense:"",outlined:"",label:t.opts.circleLabel,value:t.opts.isCircle,"input-value":t.opts.isCircle},on:{change:t.setIsCircle}})],1):t._e(),t.opts.isShowProportionalChk?i("v-col",{attrs:{sm:"5"}},[i("v-checkbox",{attrs:{required:"",dense:"","hide-details":"",outlined:"",label:t.opts.proportionalLabel,value:t.opts.isProportional,"input-value":t.opts.isProportional},on:{change:t.setIsProportional}})],1):t._e()],1),t.opts.isShowAspectRatioFld?i("v-row",[i("v-col",[i("v-select",{attrs:{dense:"",outlined:"","hide-details":"","item-text":"text","item-value":"val",items:t.listAspectRatio,label:t.opts.aspectRatioLabel,value:t.opts.aspectRatio},on:{change:t.setAspectRatio}})],1)],1):t._e(),t.opts.isShowQualityFld?i("v-row",[i("v-col",[i("v-text-field",{attrs:{type:"number",required:"",autofocus:"",outlined:"",dense:"","hide-details":"",step:"0.01","aria-valuemax":"1",label:t.opts.qualityLabel},on:{change:function(e){return t.moveMouse()}},model:{value:t.opts.quality,callback:function(e){t.$set(t.opts,"quality",e)},expression:"opts.quality"}}),i("v-slider",{attrs:{"hide-details":"",step:"0.01",max:1},on:{change:function(e){return t.moveMouse()}},model:{value:t.opts.quality,callback:function(e){t.$set(t.opts,"quality",e)},expression:"opts.quality"}})],1)],1):t._e(),t.opts.isShowExpansionPnl?i("v-expansion-panels",[i("v-expansion-panel",[i("v-expansion-panel-header",[i("v-icon",[t._v("mdi-format-list-checks")]),i("v-card-subtitle",[t._v(" "+t._s(t.opts.cropParamsLabel))])],1),i("v-expansion-panel-content",[i("v-row",[i("v-col",[i("v-text-field",{attrs:{type:"number",required:"",autofocus:"",dense:"",outlined:"","hide-details":"",label:t.opts.cropAreaWidthLabel},on:{change:t.updateCropperCord},model:{value:t.opts.cropArea.width,callback:function(e){t.$set(t.opts.cropArea,"width",e)},expression:"opts.cropArea.width"}}),i("v-slider",{attrs:{"hide-details":"",max:t.maxCropAreaWidth},on:{change:t.updateCropperCord},model:{value:t.opts.cropArea.width,callback:function(e){t.$set(t.opts.cropArea,"width",e)},expression:"opts.cropArea.width"}})],1)],1),i("v-row",[i("v-col",[i("v-text-field",{attrs:{type:"number",required:"",dense:"",autofocus:"",outlined:"","hide-details":"",label:t.opts.cropAreaHeightLabel,disabled:t.opts.isProportional},on:{change:t.updateCropperCord},model:{value:t.opts.cropArea.height,callback:function(e){t.$set(t.opts.cropArea,"height",e)},expression:"opts.cropArea.height"}}),i("v-slider",{attrs:{"hide-details":"",max:t.maxCropAreaHeight,disabled:t.opts.isProportional},on:{input:t.updateCropperCord},model:{value:t.opts.cropArea.height,callback:function(e){t.$set(t.opts.cropArea,"height",e)},expression:"opts.cropArea.height"}})],1)],1),i("v-row",[i("v-col",[i("v-text-field",{attrs:{type:"number",required:"",autofocus:"",dense:"",outlined:"","hide-details":"",label:t.opts.cropAreaXCoordLabel},on:{change:t.updateCropperCord},model:{value:t.opts.cropArea.x,callback:function(e){t.$set(t.opts.cropArea,"x",e)},expression:"opts.cropArea.x"}}),i("v-slider",{attrs:{"hide-details":"",max:t.maxCropAreaWidth},on:{change:t.updateCropperCord},model:{value:t.opts.cropArea.x,callback:function(e){t.$set(t.opts.cropArea,"x",e)},expression:"opts.cropArea.x"}})],1)],1),i("v-row",[i("v-col",[i("v-text-field",{attrs:{type:"number",required:"",dense:"",autofocus:"",outlined:"","hide-details":"",label:t.opts.cropAreaYCoordLabel},on:{change:t.updateCropperCord},model:{value:t.opts.cropArea.y,callback:function(e){t.$set(t.opts.cropArea,"y",e)},expression:"opts.cropArea.y"}}),i("v-slider",{attrs:{"hide-details":"",max:t.maxCropAreaHeight},on:{input:t.updateCropperCord},model:{value:t.opts.cropArea.y,callback:function(e){t.$set(t.opts.cropArea,"y",e)},expression:"opts.cropArea.y"}})],1)],1)],1)],1)],1):t._e(),t.opts.isShowFullAreaBtn?i("v-row",[i("v-col",{attrs:{sm:"5"}},[i("v-btn",{attrs:{color:"primary","hide-details":"",dense:""},on:{click:t.doubleClickCropper}},[i("v-icon",{staticClass:"mr-1"},[t._v(" mdi-crop-free")]),t._v(" "+t._s(t.opts.fullCropAreaLabel)+" ")],1)],1)],1):t._e()],1)],1):t._e(),i("div",{class:"crop-area "+t.opts.cropAreaClasses},[i("v-card",{staticClass:"cropper-main-card"},[i("v-card-title",{staticStyle:{"place-content":"center"}},[t._v(" "+t._s(t.opts.cropAreaLabel)+" ")]),i("div",{style:{width:"auto",height:t.maxCropAreaHeight+"px"},on:{dblclick:t.doubleClickCropper}},[i("canvas",{ref:"canvas",staticStyle:{background:"#ccc"},attrs:{width:t.canvasWidth,height:t.canvasHeight},on:{mousemove:t.moveMouse,mousedown:t.startDrag,mouseup:t.stopDrag,mouseleave:function(e){t.isDragged=!1}}})])],1),t.opts.isShowPreview?i("v-card",{staticClass:"cropper-preview-card"},[i("v-card-title",{staticStyle:{"place-content":"center"}},[t._v(" "+t._s(t.opts.previewLabel)+" ")]),i("div",{staticClass:"cropper-previewArea",style:{width:t.prevDivWidth+"px",height:t.prevDivHeight+"px"}},[i("img",{style:{width:t.previewSize.w+"px",height:t.previewSize.h+"px",borderRadius:t.opts.isCircle?"50%":0},attrs:{src:t.previewImage}})])],1):t._e()],1)],1)],1):t._e()])},p=[],h=(i("b0c0"),i("cb29"),i("b680"),i("bc3a")),n=i.n(h),l={name:"XCropper",props:{options:{type:Object}},data:function(){return{ctx:null,file:null,over:null,image:null,fliph:null,flipv:null,canvas:null,previewImage:null,isDragged:!1,isLoading:!1,imageWidth:0,imageHeight:0,fullWidthUI:500,listAspectRatio:[{text:"1:1",val:1},{text:"3:4",val:.765},{text:"16:9",val:1.5}],cropArea:{mx:0,my:0},defaultProps:{inputMimeTypes:["image/jpeg","image/png","image/gif"],resultMimeType:"image/jpeg",maxFileSize:8e6,layoutBreakpoint:850,maxCropperHeight:600,croppedAreaHeight:400,croppedAreaWidth:400,maxCroppedAreaWidth:400,uploadData:{},isUploadTo:!1,isPreviewOnDrag:!0,isCloseOnSave:!0,isShowPreview:!0,isShowToolbar:!0,isShowSaveBtn:!0,isShowClearBtn:!0,isShowCircleChk:!0,isShowQualityFld:!0,isShowFormParams:!0,isShowFullAreaBtn:!0,isShowFlipVertBtn:!0,isShowFlipHorizBtn:!0,isShowSelectImgBtn:!0,isShowExpansionPnl:!0,isShowRotateLeftBtn:!0,isShowAspectRatioFld:!0,isShowRotateRightBtn:!0,isShowProportionalChk:!0,cropArea:{minWidth:8,minHeight:8,width:0,height:0,x:20,y:20},isCircle:!0,isProportional:!1,rotation:0,quality:.85,handleSize:10,aspectRatio:1,maxCropAreaHeight:0,frameLineDash:[5,3],overlayFill:"rgba(0, 0, 0, 0.5)",handleFillColor:"rgba(255, 255, 255, 0.2)",frameStrokeColor:"rgba(255, 255, 255, 0.8)",handleStrokeColor:"rgba(255, 255, 255, 0.8)",handleHoverFillColor:"rgba(255, 255, 255, 0.4)",handleHoverStrokeColor:"rgba(255, 255, 255, 1)",cropperClasses:"",toolbarClasses:"",cropAreaClasses:"",formParamsClasses:"",clearLabel:"Clear",circleLabel:"Circle",previewLabel:"Preview",qualityLabel:"Quality",saveLabel:"Save image",cropAreaWidthLabel:"Width",cropAreaHeightLabel:"Height",cropAreaLabel:"Cropper area",rotateLeftLabel:"Rotate left",fullCropAreaLabel:"Full area",selectBtnLabel:"Select image",aspectRatioLabel:"Aspect ratio",rotateRightLabel:"Rotate right",cropParamsLabel:"Cropper params",proportionalLabel:"Proportional",flipVerticalLabel:"Flip vertical",cropAreaYCoordLabel:"Y coordinate",cropAreaXCoordLabel:"X coordinate",flipHorizontalLabel:"Flip horizontal",dropareaLabel:"Select or drop image..."}}},computed:{opts:function(){return Object.assign(this.defaultProps,this.options)},canvasHeight:function(){return this.imageRatio<=this.cropperRatio?this.maxCropAreaHeight:Math.round(this.maxCropAreaWidth/this.imageRatio)},canvasWidth:function(){return this.imageRatio>=this.cropperRatio?this.maxCropAreaWidth:Math.round(this.imageRatio*this.canvasHeight)},cropData:function(){var t,e,i,o,s=this.imageWidth/this.canvasWidth+this.imageHeight/this.canvasHeight,a=Math.round(s/.002)/1e3,r=[this.opts.rotation,this.fliph,this.flipv],p=r[0],h=r[1],n=r[2],l=this.opts.cropArea.x*a,c=this.opts.cropArea.y*a,d=this.opts.cropArea.width*a,u=this.opts.cropArea.height*a,v=this.imageWidth-l-d,g=this.imageHeight-c-u;return(0===p&&!h&&!n||180===p&&h&&n)&&(t=l,e=c),(90===p&&!h&&!n||270===p&&h&&n)&&(t=c,e=v),(180===p&&!h&&!n||0===p&&h&&n)&&(t=v,e=g),(270===p&&!h&&!n||90===p&&h&&n)&&(t=g,e=l),(0===p&&h&&!n||180===p&&!h&&n)&&(t=v,e=c),(90===p&&h&&!n||270===p&&!h&&n)&&(t=c,e=l),(180===p&&h&&!n||0===p&&!h&&n)&&(t=l,e=g),(270===p&&h&&!n||90===p&&!h&&n)&&(t=g,e=v),0===p||180===p?(i=d,o=u):(i=u,o=d),{x:t,y:e,w:i,h:o}},maxCropAreaHeight:function(){if(this.opts.maxCropAreaHeight&&this.fullWidthUI>this.opts.layoutBreakpoint)return this.opts.maxCropAreaHeight-80;var t=Math.floor(this.maxCropAreaWidth/this.imageRatio),e=this.opts.maxCropperHeight;return e&&e>100&&e<t?e-80:t},cropperRatio:function(){return Math.round(this.maxCropAreaWidth/this.maxCropAreaHeight*1e3)/1e3},maxCropAreaWidth:function(){var t=this.fullWidthUI,e=Math.floor(.35*t),i=Math.floor(e/this.imageRatio);return(this.fullWidthUI<=this.opts.layoutBreakpoint||!this.opts.isShowPreview)&&(e=Math.floor(.9*t)),e/=i/this.opts.maxCropperHeight,e},cx:function(){var t=this.canvas.getBoundingClientRect();return this.cropArea.mx-t.left},cy:function(){var t=this.canvas.getBoundingClientRect();return this.cropArea.my-t.top},imageRatio:function(){return this.imageHeight?Math.round(this.imageWidth/this.imageHeight*1e3)/1e3:0},markers:function(){return{nw:{x:this.opts.cropArea.x-this.opts.handleSize,y:this.opts.cropArea.y-this.opts.handleSize},ne:{x:this.opts.cropArea.x+this.opts.cropArea.width-this.opts.handleSize,y:this.opts.cropArea.y-this.opts.handleSize},sw:{x:this.opts.cropArea.x-this.opts.handleSize,y:this.opts.cropArea.y+this.opts.cropArea.height-this.opts.handleSize},se:{x:this.opts.cropArea.x+this.opts.cropArea.width-this.opts.handleSize,y:this.opts.cropArea.y+this.opts.cropArea.height-this.opts.handleSize}}},prevDivHeight:function(){return this.fullWidthUI>this.opts.layoutBreakpoint?this.maxCropAreaHeight:300},prevDivWidth:function(){var t=this.fullWidthUI-24;if(this.fullWidthUI<=this.opts.layoutBreakpoint)return t;var e=Math.floor(.4*t);return e>this.opts.maxCroppedAreaWidth?this.opts.maxCroppedAreaWidth:e},previewCanvas:function(){if(!this.image||!this.resultCanvas)return!1;var t=document.createElement("canvas");t.width=this.previewSize.w,t.height=this.previewSize.h;var e=t.getContext("2d");return e.drawImage(this.resultCanvas,0,0,t.width,t.height),t},previewSize:function(){var t,e,i=this.prevDivWidth-20,o=this.prevDivHeight-20,s=Math.round(i/o*1e3)/1e3,a=Math.round(this.resultWidth/this.resultHeight*1e3)/1e3;return a>s?(t=i,e=i/a):(e=o,t=e*a),{w:Math.min(t,this.resultWidth),h:Math.min(e,this.resultHeight)}},resultCanvas:function(){if(!this.image)return!1;var t=document.createElement("canvas");t.width=this.resultWidth,t.height=this.resultHeight;var e=t.getContext("2d");e.save(),this.fliph&&(e.translate(this.resultWidth,0),e.scale(-1,1)),this.flipv&&(e.translate(0,this.resultHeight),e.scale(1,-1));var i=90===this.opts.rotation||270===this.opts.rotation,o=i?t.height:t.width,s=i?t.width:t.height;return e.translate(t.width/2,t.height/2),e.rotate(this.opts.rotation*Math.PI/180),e.drawImage(this.image,this.cropData.x,this.cropData.y,this.cropData.w,this.cropData.h,-o/2,-s/2,o,s),e.restore(),t},resultWidth:function(){var t=[this.opts.aspectRatio,this.opts.croppedAreaWidth,this.opts.croppedAreaHeight],e=t[0],i=t[1],o=t[2],s=Math.round(this.imageWidth/this.canvasWidth*1e3)/1e3,a=e||this.opts.cropArea.width/this.opts.cropArea.height;if(i&&!o)return i;if(!i&&!o)return Math.round(this.opts.cropArea.width*s);if(!i&&o)return Math.round(o*a);var r=i/o;return a>=r?i:Math.round(o*a)},resultHeight:function(){var t=[this.opts.aspectRatio,this.opts.croppedAreaWidth,this.opts.croppedAreaHeight],e=t[0],i=t[1],o=t[2],s=Math.round(this.imageHeight/this.canvasHeight*1e3)/1e3,a=e||this.opts.cropArea.width/this.opts.cropArea.height;if(o&&!i)return o;if(!i&&!o)return Math.round(this.opts.cropArea.height*s);if(!o&&i)return Math.round(i/a);var r=i/o;return a<=r?o:Math.round(i/a)}},mounted:function(){this.getFullWidth(),this.$emit("cropper-mounted"),window.addEventListener("resize",this.getFullWidth)},beforeDestroy:function(){this.$emit("cropper-before-destroy"),window.removeEventListener("resize",this.getFullWidth)},methods:{setIsCircle:function(t){t&&this.opts.isProportional&&(this.opts.isProportional=!1),t&&this.opts.aspectRatio&&(this.opts.aspectRatio=1),this.opts.isCircle=t},setAspectRatio:function(t){t&&this.opts.isCircle&&(this.opts.isCircle=!1),this.opts.isProportional=!!t,this.opts.aspectRatio=t,this.updateCropperCord()},setIsProportional:function(t){t&&this.opts.isCircle&&(this.opts.isCircle=!1),t&&!this.opts.aspectRatio?this.opts.aspectRatio=this.imageRatio:t||(this.opts.aspectRatio=void 0),this.opts.isProportional=t,this.updateCropperCord()},updateCropperCord:function(){this.isDragged=!0,this.moveMouse()},doubleClickCropper:function(){var t=[this.maxCropAreaHeight,this.maxCropAreaWidth],e=t[0],i=t[1];this.opts.isCircle?i>e?(this.opts.cropArea.height=e,this.opts.cropArea.width=e,this.opts.cropArea.y=0,this.opts.cropArea.x=(i-e)/2):(this.opts.cropArea.height=i,this.opts.cropArea.width=i,this.opts.cropArea.x=0,this.opts.cropArea.y=(e-i)/2):(this.setIsProportional(!1),this.opts.cropArea.height=e,this.opts.cropArea.width=i,this.opts.cropArea.y=0,this.opts.cropArea.x=0)},cancelCrop:function(){var t=this.$refs.fileInput;t.type="",t.type="file",this.file=!1,this.$emit("cropper-cancelled")},doCrop:function(){var t=this,e=this.resultCanvas.toDataURL(this.opts.resultMimeType,this.opts.quality),i=this.file.name.lastIndexOf("."),o=this.file.name.substring(0,i),s={originalFile:this.file,filename:o,rotation:this.opts.rotation,cropCoords:this.cropData,flippedH:this.fliph,flippedV:this.flipv,croppedImageURI:e};this.resultCanvas.toBlob((function(e){var i=new Date;if(e.lastModified=i.getTime(),e.lastModifiedDate=i,e.name=o,s.croppedFile=e,t.$emit("cropper-saved",s),t.opts.isUploadTo){var a=new FormData;for(var r in s)a.append(r,s[r]);for(var p in t.opts.uploadData)a.append(p,t.opts.uploadData[p]);n.a.post(t.opts.isUploadTo,a).then((function(e){t.$emit("cropper-uploaded",e),t.opts.closeOnSave&&(t.file=!1)}))}else t.opts.closeOnSave&&(t.file=!1)}),this.opts.resultMimeType,this.opts.quality)},drawCanvas:function(){this.ctx&&(this.drawImageOnCanvas(),this.drawOverlay(),this.drawMarkers(),this.opts.isShowPreview&&this.opts.isPreviewOnDrag&&this.previewCanvas&&(this.previewImage=this.previewCanvas.toDataURL("image/jpeg",this.opts.quality)))},drawImageOnCanvas:function(){if(this.image){this.ctx.save(),this.fliph&&(this.ctx.translate(this.canvasWidth,0),this.ctx.scale(-1,1)),this.flipv&&(this.ctx.translate(0,this.canvasHeight),this.ctx.scale(1,-1));var t=90===this.opts.rotation||270===this.opts.rotation,e=t?this.canvasHeight:this.canvasWidth,i=t?this.canvasWidth:this.canvasHeight;this.ctx.translate(this.canvasWidth/2,this.canvasHeight/2),this.ctx.rotate(this.opts.rotation*Math.PI/180),this.ctx.drawImage(this.image,-e/2,-i/2,e,i),this.ctx.restore()}},drawMarkers:function(){var t=[this.cx,this.cy],e=t[0],i=t[1],o=this.ctx;for(var s in this.canvas.style.cursor="default",this.over=!1,o.beginPath(),this.opts.isCircle?o.arc(this.opts.cropArea.x+this.opts.cropArea.width/2,this.opts.cropArea.y+this.opts.cropArea.height/2,this.opts.cropArea.width/2,0,2*Math.PI):o.rect(this.opts.cropArea.x,this.opts.cropArea.y,this.opts.cropArea.width,this.opts.cropArea.height),o.isPointInPath(e,i)&&(this.over="all",this.canvas.style.cursor="move"),o.setLineDash(this.opts.frameLineDash),o.strokeStyle=this.opts.frameStrokeColor,o.stroke(),o.setLineDash([]),this.markers){var a=this.markers[s];o.beginPath(),o.rect(a.x,a.y,2*this.opts.handleSize,2*this.opts.handleSize),o.fillStyle=this.opts.handleFillColor,o.strokeStyle=this.opts.handleStrokeColor,o.isPointInPath(e,i)&&(o.fillStyle=this.opts.handleHoverFillColor,o.strokeStyle=this.opts.handleHoverStrokeColor,this.canvas.style.cursor=s+"-resize",this.over=s),o.fill(),o.stroke()}},drawOverlay:function(){var t=this.ctx,e=[this.canvasWidth,this.canvasHeight,this.opts.cropArea.y,this.opts.cropArea.x,this.opts.cropArea.height,this.opts.cropArea.width],i=e[0],o=e[1],s=e[2],a=e[3],r=e[4],p=e[5];t.fillStyle=this.opts.overlayFill,t.fillRect(0,0,i,s),t.fillRect(0,s,a,r),t.fillRect(a+p,s,i-(a+p),r),t.fillRect(0,s+r,i,o-(s+r)),this.opts.isCircle&&(t.beginPath(),t.arc(a+p/2,s+r/2,p/2,Math.PI,1.5*Math.PI),t.lineTo(a,s),t.closePath(),t.fill(),t.beginPath(),t.arc(a+p/2,s+r/2,p/2,1.5*Math.PI,2*Math.PI),t.lineTo(a+p,s),t.closePath(),t.fill(),t.beginPath(),t.arc(a+p/2,s+r/2,p/2,0,.5*Math.PI),t.lineTo(a+p,s+r),t.closePath(),t.fill(),t.beginPath(),t.arc(a+p/2,s+r/2,p/2,.5*Math.PI,Math.PI),t.lineTo(a,s+r),t.closePath(),t.fill())},dropFile:function(t){var e=t.dataTransfer.files[0];this.useFile(e)},flip:function(t){"v"===t?(this.flipv=!this.flipv,this.opts.cropArea.y=this.canvasHeight-this.opts.cropArea.y-this.opts.cropArea.height):(this.fliph=!this.fliph,this.opts.cropArea.x=this.canvasWidth-this.opts.cropArea.x-this.opts.cropArea.width),this.drawCanvas(),this.opts.isShowPreview&&!this.opts.isPreviewOnDrag&&this.previewCanvas&&(this.previewImage=this.previewCanvas.toDataURL("image/jpeg",this.opts.quality))},getFullWidth:function(){var t=this.$el.getBoundingClientRect();this.fullWidthUI=t.width,this.$nextTick(this.drawCanvas)},humanFileSize:function(t,e){void 0===e&&(e=!0);var i=e?1e3:1024;if(Math.abs(t)<i)return t+" B";var o=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],s=-1;do{t/=i,++s}while(Math.abs(t)>=i&&s<o.length-1);return t.toFixed(1)+" "+o[s]},moveMouse:function(t){var e=0,i=0;if(t){var o=t.clientX||t.touches[0].clientX,s=t.clientY||t.touches[0].clientY;e=o-this.cropArea.mx,i=s-this.cropArea.my,this.cropArea.mx=o,this.cropArea.my=s}this.isDragged&&this.updateCoords(e,i),this.drawCanvas()},rotate:function(t){var e=this,i=[this.canvasWidth,this.canvasHeight];(this.fliph?!this.flipv:this.flipv)?this.opts.rotation-=t:this.opts.rotation+=t,this.opts.rotation>270&&(this.opts.rotation=0),this.opts.rotation<0&&(this.opts.rotation=270),this.imageWidth=this.imageHeight,this.imageHeight=this.imageWidth,this.$nextTick((function(){var t=e.canvasHeight/i[0],o=e.canvasWidth/i[1],s=e.canvasWidth-e.opts.cropArea.y*o-e.opts.cropArea.height*o,a=e.opts.cropArea.x*t,r=e.opts.cropArea.height*o*e.opts.aspectRatio,p=e.opts.cropArea.width*t*e.opts.aspectRatio;e.opts.cropArea.x=Math.round(s),e.opts.cropArea.y=Math.round(a),e.opts.cropArea.width=Math.round(r),e.opts.cropArea.height=Math.round(p),e.updateCoords(),e.drawCanvas(),e.opts.isShowPreview&&!e.opts.isPreviewOnDrag&&e.previewCanvas&&(e.previewImage=e.previewCanvas.toDataURL("image/jpeg",e.opts.quality))}))},selectFile:function(t){var e=t.currentTarget.files[0];e&&this.useFile(e),this.getFullWidth()},startCanvas:function(){var t=this;this.image?(this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.opts.aspectRatio?this.opts.aspectRatio>=this.imageRatio?(this.opts.cropArea.width=Math.round(this.canvasWidth),this.opts.cropArea.height=Math.round(this.opts.cropArea.width/this.opts.aspectRatio)):(this.opts.cropArea.height=Math.round(this.canvasHeight),this.opts.cropArea.width=Math.round(this.opts.cropArea.height*this.opts.aspectRatio)):(this.opts.cropArea.width=Math.round(this.canvasWidth),this.opts.cropArea.height=Math.round(this.canvasHeight)),this.opts.cropArea.x=Math.round((this.canvasWidth-this.opts.cropArea.width)/2),this.opts.cropArea.y=Math.round((this.canvasHeight-this.opts.cropArea.height)/2),this.drawCanvas()):(this.canvas=!1,this.ctx=!1),this.opts.isShowPreview&&this.previewCanvas&&(this.previewImage=this.previewCanvas.toDataURL("image/jpeg",this.opts.quality)),this.canvas.addEventListener("touchstart",(function(e){e.preventDefault(),t.startDrag(e)})),this.canvas.addEventListener("touchend",(function(e){e.preventDefault(),t.stopDrag(e)})),this.canvas.addEventListener("touchmove",(function(e){e.preventDefault(),t.moveMouse(e)}))},startDrag:function(t){void 0!==t.touches&&(this.cropArea.mx=t.touches[0].clientX,this.cropArea.my=t.touches[0].clientY,this.drawCanvas()),this.isDragged=this.over},stopDrag:function(){this.isDragged=!1;var t=this.resultCanvas.toDataURL("image/jpeg",this.opts.quality);this.$emit("cropper-preview",t),this.opts.isShowPreview&&this.previewCanvas&&(this.previewImage=this.previewCanvas.toDataURL("image/jpeg",this.opts.quality))},triggerInput:function(){var t=this.$refs.fileInput;t.click()},updateCoords:function(t,e){var i=this.opts.cropArea.x,o=this.opts.cropArea.y,s=this.opts.cropArea.width,a=this.opts.cropArea.height,r=this.opts.aspectRatio;switch(this.isDragged){case"all":i=this.opts.cropArea.x+t,o=this.opts.cropArea.y+e;break;case"nw":i=this.opts.cropArea.x+t,o=this.opts.cropArea.y+e,s=this.opts.cropArea.width-t,a=this.opts.cropArea.height-e;break;case"ne":o=this.opts.cropArea.y+e,s=this.opts.cropArea.width+t,a=this.opts.cropArea.height-e;break;case"sw":i=this.opts.cropArea.x+t,s=this.opts.cropArea.width-t,a=this.opts.cropArea.height+e;break;case"se":s=this.opts.cropArea.width+t,a=this.opts.cropArea.height+e;break}r&&(a=s/r),(s<this.opts.cropArea.minWidth||a<this.opts.cropArea.minHeight)&&(r&&r>1?(a=this.opts.cropArea.minHeight,s=a*r):r&&r<1?(s=this.opts.cropArea.minWidth,a=s/r):(s<this.opts.cropArea.minWidth&&(s=this.opts.cropArea.minWidth),a<this.opts.cropArea.minHeight&&(a=this.opts.cropArea.minHeight))),s+i>this.canvasWidth&&(s=this.canvasWidth-i,r&&(a=s/r),s/r<this.opts.cropArea.minHeight&&r&&r>1&&(a=this.opts.cropArea.minHeight,s=a*r,i=this.canvasWidth-s),s<this.opts.cropArea.minWidth&&(s=this.opts.cropArea.minWidth,i=this.canvasWidth-s)),a+o>this.canvasHeight&&(a=this.canvasHeight-o,r&&(s=a*r),a*r<this.opts.cropArea.minWidth&&r&&r<1&&(s=this.opts.cropArea.minWidth,a=s/r,o=this.canvasHeight-a),a<this.opts.cropArea.minHeight&&(a=this.opts.cropArea.minHeight,o=this.canvasHeight-a)),i<0&&(i=0),o<0&&(o=0),this.opts.cropArea.x=i,this.opts.cropArea.y=o,this.opts.cropArea.width=s,this.opts.cropArea.height=a},useFile:function(t){if(-1!==this.opts.inputMimeTypes.indexOf(t.type))if(this.opts.maxFileSize&&t.size>this.opts.maxFileSize){var e=this.humanFileSize(t.size);this.$emit("cropper-error","File too large ("+e+")! Max file size is "+this.humanFileSize(this.opts.maxFileSize))}else this.file=t,this.$emit("cropper-file-selected",t);else this.$emit("cropper-error","Wrong file type: "+t.type)}},watch:{"opts.cropArea.width":function(){this.drawCanvas()},"opts.cropArea.x":function(){this.drawCanvas()},file:function(t){var e=this;this.opts.rotation=0,this.fliph=!1,this.flipv=!1;var i=new FileReader;i.onload=function(t){var i=new Image;i.onload=function(){e.imageWidth=i.width,e.imageHeight=i.height,e.image=i,e.loadingImage=!1,e.$nextTick(e.startCanvas)},i.onerror=function(t){e.loadingImage=!1,e.imageWidth=0,e.imageHeight=0,e.image=!1,e.file=!1,e.$emit("cropper-error","Image reading error"+t)};var o=e.$refs.fileInput;o.val="",i.src=t.target.result},i.onerror=function(t){e.file=!1,e.$emit("cropper-error","File reading error"+t)},t?i.readAsDataURL(this.file):(this.imageWidth=0,this.imageHeight=0,this.image=!1)}}},c=l,d=(i("43e7"),i("2877")),u=Object(d["a"])(c,r,p,!1,null,null,null),v=u.exports,g=i("6328"),m=i.n(g),f={data:function(){return{drawer:!0,logo:m.a,options:{inputMimeTypes:["image/jpeg","image/png","image/gif"],resultMimeType:"image/jpeg",maxFileSize:8e6,layoutBreakpoint:850,maxCropperHeight:600,croppedAreaHeight:400,croppedAreaWidth:400,maxCroppedAreaWidth:400,uploadData:{},isUploadTo:!1,isPreviewOnDrag:!0,isCloseOnSave:!0,isShowPreview:!0,isShowToolbar:!0,isShowSaveBtn:!0,isShowClearBtn:!0,isShowCircleChk:!0,isShowQualityFld:!0,isShowFormParams:!0,isShowFullAreaBtn:!0,isShowFlipVertBtn:!0,isShowFlipHorizBtn:!0,isShowSelectImgBtn:!0,isShowExpansionPnl:!0,isShowRotateLeftBtn:!0,isShowAspectRatioFld:!0,isShowRotateRightBtn:!0,isShowProportionalChk:!0,cropArea:{minWidth:8,minHeight:8,width:0,height:0,x:20,y:20},isCircle:!0,isProportional:!1,rotation:0,quality:.85,handleSize:10,aspectRatio:1,maxCropAreaHeight:0,frameLineDash:[5,3],overlayFill:"rgba(0, 0, 0, 0.5)",handleFillColor:"rgba(255, 255, 255, 0.2)",frameStrokeColor:"rgba(255, 255, 255, 0.8)",handleStrokeColor:"rgba(255, 255, 255, 0.8)",handleHoverFillColor:"rgba(255, 255, 255, 0.4)",handleHoverStrokeColor:"rgba(255, 255, 255, 1)",cropperClasses:"",toolbarClasses:"",cropAreaClasses:"",formParamsClasses:"",clearLabel:"Clear",circleLabel:"Circle",previewLabel:"Preview",qualityLabel:"Quality",saveLabel:"Save image",cropAreaWidthLabel:"Width",cropAreaHeightLabel:"Height",cropAreaLabel:"Cropper area",rotateLeftLabel:"Rotate left",fullCropAreaLabel:"Full area",selectBtnLabel:"Select image",aspectRatioLabel:"Aspect ratio",rotateRightLabel:"Rotate right",cropParamsLabel:"Cropper params",proportionalLabel:"Proportional",flipVerticalLabel:"Flip vertical",cropAreaYCoordLabel:"Y coordinate",cropAreaXCoordLabel:"X coordinate",flipHorizontalLabel:"Flip horizontal",dropareaLabel:"Select or drop image..."}}},components:{XCropper:v}},w=f,b=(i("5c0b"),Object(d["a"])(w,s,a,!1,null,null,null)),A=b.exports,x=(i("bf40"),i("41e6"),i("ce5b")),C=i.n(x);o["default"].config.productionTip=!1,o["default"].use(C.a),new o["default"]({vuetify:new C.a,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},6328:function(t,e,i){t.exports=i.p+"img/x-cropper-logo-64.4a2d2dc4.png"},"9c0c":function(t,e,i){}});
//# sourceMappingURL=app.9dd0fd92.js.map