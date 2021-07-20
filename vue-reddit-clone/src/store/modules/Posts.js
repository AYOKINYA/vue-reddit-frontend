import PostService from "../../services/PostService";
import router from '../../router/router';

const state = {
    posts: [],
    post: {}
}

const getters = {
    allPosts: (state) => state.posts,
    post: (state) => state.post
}

const actions = {
    createPost({commit}, post) {
        
        PostService.createPost(post)
        .then(res => {
            commit('newPost', res.data);
            router.push({ path: '/' });
        })
    },
    getPost({commit}, id) {
        PostService.getPost(id).then((res) => {
            commit("setPost", res.data);
        });
    }
}

const mutations = {
    setPosts: (state, posts) => state.posts = posts,
    newPost: (state, post) => state.posts.push(post),
    setPost: (state, post) => state.post = post
}

export default {
    state,
    getters,
    actions,
    mutations
}