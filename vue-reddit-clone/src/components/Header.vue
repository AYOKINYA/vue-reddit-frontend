<template>
    <div>
        <header>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="navbar-brand">
                    <router-link to="/" aria-label="Home" class="logo" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="reddit-icon-svg">
                        <g>
                            <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
                            <path fill="#FFF"
                            d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z">
                            </path>
                        </g>
                        </svg>
                        <span class="reddit-text">
                            Spring Reddit Clone
                        </span>
                    </router-link>
                </div>

                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <form class="d-flex me-3">
                    <input name="name" v-model="keyword" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit" @click="searchUser">Search</button>
                </form>
                
                <div v-if="isLoggedIn">

                    <b-dropdown>
                        <div class="userdetails">
                        {{username}}
                        </div>

                        <b-dropdown-item @click.native="$router.push({ name: 'UserProfile', params: {username: username }})">Profile</b-dropdown-item>
                        <b-dropdown-item @click="userLogout">Logout</b-dropdown-item>

                    </b-dropdown>

                </div>

                <div v-else>
                    <router-link to="/signup" class="float-right signup mr-2">Sign up</router-link>
                    <router-link to="/login" class="float-right login mr-2">Login</router-link>
                </div>
            </ul>
            </nav>
        </header>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SearchService from '../services/SearchService';

export default {
    name: 'Header',
    data() {
        return {
            keyword: ''
        }
    },
    computed: mapGetters(['isLoggedIn', 'username']),
    methods: {
        ...mapActions(['logout']),
        userLogout(e) {
            e.preventDefault();
            this.logout();
        },
        searchUser(e) {
            e.preventDefault();
            SearchService.searchUser(this.keyword).then(res => {
                this.$router.push({name: 'SearchResult', query: {name: res.data.username}})
            })
        }
    }
}
</script>

<style scoped>
header{
    border-radius: 1px solid;
}
.reddit-icon-svg{
    height: 50px;
    padding: 8px 8px 8px 0;
    width: 50px;
}
.reddit-text{        
    font-weight: 700;
    height: 50px;
    width: 50px;    
}
.logo{
    text-decoration: none;
}
.login, .signup{    
    background-color: transparent;
    border-color: #0079D3;
    color: #0079D3;
    fill: #0079D3;
    border: 1px solid;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    letter-spacing: 1px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 24px;
    text-transform: uppercase;
    padding: 3px 16px;
    opacity: 1;  
}
.signup{
    background-color: #0079D3;
    border-color: #0079D3;
    color: aliceblue;
}
.signup:hover{
    opacity: 0.6;
}
.account-icon{
    border-radius: 4px;
    margin-right: 5px;
    max-height: 24px;
    max-width: 24px;
}
.userdetails{    
    background-color: transparent;
    border-color: #0079D3;
    color: #0079D3;
    fill: #0079D3;
    border: 1px solid;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    letter-spacing: 1px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 24px;
    text-transform: uppercase;
    padding: 3px 16px;
    opacity: 1;
    border: 0px;
}
.userdetails:hover{
    border: 1px solid;
}
.dropdown-item{
    background-color: #f8f9fa;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
}
.dropdown-item:hover{
    background-color: #0079D3;
}
.dropdown-menu{
    background-color: #f8f9fa;
}
</style>