require('./bootstrap');
require('./service/component.service');

window.Vue = require('vue');

const app = new Vue({
    el: '#app'
});
