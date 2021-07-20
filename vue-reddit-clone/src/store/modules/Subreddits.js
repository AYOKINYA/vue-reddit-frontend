import SubredditService from "../../services/SubredditService"

const state = {
    subreddits: []
}

const getters = {
    allSubreddits: (state) => state.subreddits
}

const actions = {
    createSubreddit({commit}, title, description) {
        let subreddit = {
            name: title,
            description: description
        }

        console.log("inputs : " + JSON.stringify(subreddit));

        SubredditService.createSubreddit(subreddit)
        .then(res => {

            commit('newSubreddits', res.data);

            this.$router.push('/subreddits-list');
        });
    },

    getAllSubreddits({commit}) {
        SubredditService.getAllSubreddits().then((res) => {
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