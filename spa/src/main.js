import Vue from 'vue';
import './filters';
import AppComponent from './components/App.vue';
import store from './store';
import router from './router';

require('popper.js/dist/umd/popper');
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

let meuVue = new Vue({
    router,
    el: '#app',
    components: {
        'app': AppComponent
    },
    store
});