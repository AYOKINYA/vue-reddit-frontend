import Vuex from 'vuex'
import Vue from 'vue'
import posts from './modules/Posts'
import user from './modules/User'

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        posts,
        user
    }
});