import PostService from "../../services/PostService";
import router from '../../router/router';

const state = {
    posts: [],
    post: {},
    postsLength: 0
}

const getters = {
    allPosts: (state) => state.posts,
    post: (state) => state.post,
    postsLength: (state) => state.postsLength
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
    },
    getPostsByUser({commit}, username) {
        PostService.getAllPostsByUser(username).then((res) => {
            commit("setPosts", res.data);
            commit("setPostsLength", res.data.length);
        });
    },
    getAllPosts({commit}) {
        PostService.getAllPosts().then((res) => {
            commit("setPosts", res.data);
        })
    }
}

const mutations = {
    setPosts: (state, posts) => state.posts = posts,
    newPost: (state, post) => state.posts.push(post),
    setPost: (state, post) => state.post = post,
    setPostsLength: (state, length) => state.postsLength = length
}

export default {
    state,
    getters,
    actions,
    mutations
}