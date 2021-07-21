import CommentService from "../../services/CommentService";

const state = {
    comments: [],
    commentsLength: 0
}

const getters = {
    comments: (state) => state.comments,
    commentsLength: (state) => state.commentsLength
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
    },
    getCommentsByUser({commit}, username) {
        CommentService.getAllCommentsByUser(username).then((res) => {
            commit('setComments', res.data);
            commit('setCommentsLength', res.data.length);
        });
    }
    
}

const mutations = {
    setComments: (state, comments) => state.comments = comments,
    setCommentsLength: (state, length) => state.commentsLength = length
}

export default {
    state,
    getters,
    actions,
    mutations
}