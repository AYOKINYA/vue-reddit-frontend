import SubredditService from "../../services/SubredditService"
import router from '../../router/router';

const state = {
    subreddits: []
}

const getters = {
    allSubreddits: (state) => state.subreddits
}

const actions = {
    createSubreddit({commit}, subreddit) {

        SubredditService.createSubreddit(subreddit)
        .then(res => {

            commit('newSubreddits', res.data);

            router.push('/subreddits-list');
        });
    },

    getAllSubreddits({commit}) {
        SubredditService.getAllSubreddits().then((res) => {
            console.log(res.data);
            commit('setSubreddits', res.data);
        });
    }
}

const mutations = {
    setSubreddits: (state, subreddits) => state.subreddits = subreddits,
    newSubreddit: (state, subreddit) => state.subreddits.push(subreddit),
}

export default {
    state,
    getters,
    actions,
    mutations
}