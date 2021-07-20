import PostService from "../../services/PostService";
import router from '../../router/router';

const state = {
    posts: []
}

const getters = {
    allPosts: (state) => state.posts
}

const actions = {
    createPost({commit}, post) {
        
        PostService.createPost(post)
        .then(res => {
            commit('newPost', res.data);
            
            router.push({ path: '/' });

        })
    }
}

const mutations = {
    setPosts: (state, posts) => state.posts = posts,
    newPost: (state, post) => state.posts.push(post)
}

export default {
    state,
    getters,
    actions,
    mutations
}