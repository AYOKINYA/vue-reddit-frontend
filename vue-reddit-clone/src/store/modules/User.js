import AuthService from '../../services/AuthService';
import router from '../../router/router';

const state = {
    isLoggedIn: (localStorage.getItem("refreshToken") != null),
    username: localStorage.getItem("username"),
    isAdmin: false
}

const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
    username: (state) => state.username,
    isAdmin: (state) => state.isAdmin
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

            router.push({ path: '/' });
        })
    },

    login({commit}, loginInfo) {
        
        AuthService.login(loginInfo)
        .then(res => {

            localStorage.setItem('authenticationToken', res.data.authenticationToken);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            localStorage.setItem('expiresAt', res.data.expiresAt);

            commit('setLoggedIn', (localStorage.getItem("refreshToken") != null));
            commit('setUsername', localStorage.getItem("username"))

            router.push({ path: '/' });
        })
    },

    getUserRoles({commit}) {
        let token = localStorage.getItem("authenticationToken");
        let roles = null;
        if (token)
            roles = JSON.parse(atob(token.split('.')[1])).scopes;
        if (token && roles && roles[0] == 'ROLE_ADMIN')
            commit('setIsAdmin', true);
        else
            commit('setIsAdmin', false);
    },

    beAdmin({commit}, adminRequest) {
        AuthService.beAdmin(adminRequest).then(res => {
            if (res.status === 200) {
                localStorage.setItem("authenticationToken", res.data.authenticationToken);
                localStorage.setItem('expiresAt', res.data.expiresAt);
                console.log("Access token refreshed with New Role!");
            }
            console.log("You are now Admin!");
            commit('setIsAdmin', true);
            router.push({ path: '/' });
        })
        .catch(error => {
            console.log(error.response)
        });
    }
}

const mutations = {
    setUsername: (state, username) => state.username = username,
    setLoggedIn: (state, isLoggedin) => state.isLoggedIn = isLoggedin,
    setIsAdmin: (state, isAdmin) => state.isAdmin = isAdmin
}

export default {
    state,
    getters,
    actions,
    mutations
}