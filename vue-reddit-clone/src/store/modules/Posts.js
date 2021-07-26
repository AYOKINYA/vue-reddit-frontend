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
    getPostsBySubreddit({commit}, subredditId) {
        PostService.getAllPostsBySubreddit(subredditId).then((res) => {
            commit("setPosts", res.data);

        });
    },
    getAllPosts({commit}) {
        PostService.getAllPosts().then((res) => {
            commit("setPosts", res.data);
        })
    },
    deletePost({commit}, id) {
         PostService.deletePost(id).then((res) => {
            console.log(res.data);
            commit("removePost", res.data);
            router.push({ path: '/' });
        });
    },
    updatePost({commit}, info) {
        PostService.editPost(info.id, info.post).then(res => {
            commit('updatePost', res.data);
            alert("The post is updated.");
            router.push({ path: '/' });
        })
    }
}

const mutations = {
    setPosts: (state, posts) => state.posts = posts,
    newPost: (state, post) => state.posts.push(post),
    setPost: (state, post) => state.post = post,
    setPostsLength: (state, length) => state.postsLength = length,
    removePost: (state, id) => state.posts = state.posts.filter(post => post.id !== id),
    updatePost: (state, updatedPost) => {
        const index = state.posts.findIndex(post => post.id === updatedPost.id);
        if (index !== -1) {
            state.posts.splice(index, 1, updatedPost);
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}