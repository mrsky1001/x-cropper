/*
 * Copyright (©) 06.11.2021, 19:01. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

// vue.config.js
module.exports = {
    devServer: {
        proxy: 'http://localhost/x-cropper/',
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/x-cropper/' : '/',
}
