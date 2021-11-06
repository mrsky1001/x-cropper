/*
 * Copyright (©) 06.11.2021, 16:55. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
    vuetify: new Vuetify(),
    render: (h) => h(App),
}).$mount('#app')
