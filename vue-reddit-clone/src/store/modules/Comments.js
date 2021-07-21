import CommentService from "../../services/CommentService";

const state = {
    comments: []
}

const getters = {
    comments: (state) => state.comments
}

const actions = {
    createComment({commit}, comment) {
        CommentService.createComment(comment).then(res => {
            console.log(res.data);
            CommentService.getAllCommentsForPost(comment.postId).then((res) => {
                commit('setComments', res.data);
            });
        });
    },
    
    getCommentsForPost({commit}, id) {
        CommentService.getAllCommentsForPost(id).then((res) => {
            commit('setComments', res.data);
        });
    }
}

const mutations = {
    setComments: (state, comments) => state.comments = comments
}

export default {
    state,
    getters,
    actions,
    mutations
}