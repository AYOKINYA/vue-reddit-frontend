import SubredditService from "../../services/SubredditService"
import router from '../../router/router';

const state = {
    subreddits: [],
    subreddit: {},
    displayViewAll: false
}

const getters = {
    allSubreddits: (state) => state.subreddits,
    subreddit: (state) => state.subreddit,
    displayViewAll: (state) => state.displayViewAll
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
            commit('setSubreddits', res.data);
        });
    },

    getSubreddit({commit}, id) {
        SubredditService.getSubreddit(id).then((res) => {
            commit('setSubreddit', res.data);
        });
    },

    getAllSubredditsToDisplay({commit}) {
        SubredditService.getAllSubreddits().then((res) => {
            if (res.data.length >= 4) {
                commit('setSubreddits', res.data.splice(0 ,3));
                commit('setDisplayViewAll', true);
            } else {
                commit('setSubreddits', res.data);
            }
        });
    },
}

const mutations = {
    setSubreddits: (state, subreddits) => state.subreddits = subreddits,
    newSubreddit: (state, subreddit) => state.subreddits.push(subreddit),
    setSubreddit: (state, subreddit) => state.subreddit = subreddit,
    setDisplayViewAll: (state, displayViewAll) => state.displayViewAll = displayViewAll
}

export default {
    state,
    getters,
    actions,
    mutations
}