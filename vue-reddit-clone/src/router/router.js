import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import SignUp from "../components/SignUp.vue"
import CreateSubreddit from "../components/CreateSubreddit.vue"
import SubredditList from "../components/SubredditList.vue"
import CreatePost from "../components/CreatePost.vue"
import PostView from "../components/PostView.vue"
import UserProfile from "../components/UserProfile.vue"
import SubredditView from "../components/SubredditView.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/signup",
            name: "SignUp",
            component: SignUp
        },
        {
            path: "/create-subreddit",
            name: "CreateSubreddit",
            component: CreateSubreddit
        },
        {
            path: "/subreddit-list",
            name: "SubredditList",
            component: SubredditList
        },
        {
            path: "/create-post",
            name: "CreatePost",
            component: CreatePost
        },
        {
            path: "/view-post/:id",
            name: "PostView",
            component: PostView
        },
        {
            path: "/user-profile/:username",
            name: "UserProfile",
            component: UserProfile
        },
        {
            path: "/view-subreddit/:id",
            name: "SubredditView",
            component: SubredditView
        }
    ]
})