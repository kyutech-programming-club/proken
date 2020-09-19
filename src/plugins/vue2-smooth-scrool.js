import Vue from 'vue';
import Vue2SmoothScroll from 'vue2-smooth-scroll'

Vue.use(Vue2SmoothScroll,{
    duration: 100, // animation duration in ms
    offset: -50 // offset in px from scroll element, can be positive or negative
});