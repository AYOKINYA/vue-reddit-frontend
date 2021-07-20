import PostService from "../../services/PostService"

const state = {
    posts: []
}

const getters = {
    allPosts: (state) => state.posts
}

const actions = {
    createPost({commit}, title, description, subredditName, url) {
        let post = {
            postName: title,
            description: description,
            subredditName: subredditName,
            url: url
        }

        PostService.createPost(post)
        .then(res => {
            commit('newPost', res.data);
            this.$router.push('/');
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