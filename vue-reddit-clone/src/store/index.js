import Vuex from 'vuex'
import Vue from 'vue'

import user from './modules/User'
import subreddits from './modules/Subreddits'
import posts from './modules/Posts'
import comments from './modules/Comments'

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        user,
        subreddits,
        posts,
        comments
    }
});