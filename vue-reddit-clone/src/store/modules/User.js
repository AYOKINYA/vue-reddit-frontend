// import axios from 'axios';

import AuthService from '../../services/AuthService';

const state = {
    isLoggedIn: (localStorage.getItem("refreshToken") != null),
    username: localStorage.getItem("username")
}

const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    username: (state) => state.username
}

const actions = {
    logout({ commit }) {
        let logoutInfo = {
            username: localStorage.getItem('username'),
            refreshToken: localStorage.getItem('refreshToken')
        }

        console.log("inputs : " + JSON.stringify(logoutInfo));

        AuthService.logout(logoutInfo)
        .then(res => {

            console.log(res.data);

            localStorage.removeItem('authenticationToken');
            localStorage.removeItem('username');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('expiresAt');

            commit('setLoggedIn', (localStorage.getItem("refreshToken") != null));
            commit('setUsername', localStorage.getItem("username"))

            this.$router.push('/');
        });
    },

    login({commit}, userName, password) {
        let loginInfo = {
            username: userName,
            password: password
        }

        console.log("inputs : " + JSON.stringify(loginInfo));

        AuthService.login(loginInfo)
        .then(res => {

            localStorage.setItem('authenticationToken', res.data.authenticationToken);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            localStorage.setItem('expiresAt', res.data.expiresAt);

            commit('setLoggedIn', (localStorage.getItem("refreshToken") != null));
            commit('setUsername', localStorage.getItem("username"))

            this.$router.push('/home');
        })
    }
}

const mutations = {
    setUsername: (state, username) => state.username = username,
    setLoggedIn: (state, isLoggedin) => state.isLoggedIn = isLoggedin
}

export default {
    state,
    getters,
    actions,
    mutations
}