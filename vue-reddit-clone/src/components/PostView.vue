<template>
    <div>
        <div class="container">
            <div class="row">
                <hr />
                <div class="col-md-9">
                    <div class="row post" key={{this.post.id}}>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-11">
                            <span class="subreddit-info">
                                <span class="subreddit-text">
                                    <router-link to="/home" class="post-url">{{this.post.subredditName}}</router-link>
                                </span>
                                <span>
                                . Posted
                                    <span> . {{this.post.duration}} </span>
                                    by 
                                    <div v-if="this.post.userName">
                                        <router-link to="/" className="username">{{this.post.userName}}</router-link>
                                    </div>
                                    <div v-else>
                                        <router-link to="/" className="username">Anonymous</router-link>
                                    </div>
                                </span>
                                <div v-if="this.isEligible()">
                                    <button class="btn btn-danger float-right">DELETE</button>
                                </div>
                                <div v-if="this.isOwner()">
                                    <button class="btn btn-info float-right" style="padding-right: 15px;">Edit</button>
                                </div>
                            </span>
                            <hr />
                            <div class="post-title">
                                <a class="post-title" href="this.post.url">{{this.post.postName}}</a>
                            </div>
                            <div>
                                <p class="post-text">{{this.post.description}}</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SideBar from './SideBar.vue';
import AuthService from '../services/AuthService'

export default {
    name: "PostView",
    components: {
        SideBar
    },
    data() {
        return {
            comments: [],
            text: ''
        }
    },
    methods: {
        ...mapActions(['getPost']),
        isOwner() {
            if (this.post.userName === localStorage.getItem("username")) {
                return true;
            }
            return false;
        },
        isEligible() {
            if (AuthService.isAdmin() || this.isOwner()) {
                return true;
            }
            return false;
        },
    },
    computed: mapGetters(['post']),
    created() {
        this.getPost(this.$route.params.id);
    }
}
</script>

<style scoped>
.post-title {
    font-size: 28px;
    font-weight: bold;
    opacity: 1;
  }
  
  .post-title:hover {
    opacity: 0.6;
  }
  
  .subreddit-text {
    font-weight: bold;
  }
  
  .post-url {
    color: black;
  }
  
  .username{
      color: gray;
  }
  
  .post-text{
      margin-top: 10px;
  }
  
  .post{
      --post-line-color: #ccc;    
      border: 1px solid #ccc;
      margin-top: 10px;
      margin-bottom: 10px;
      overflow: hidden;
      background-color: rgba(255,255,255,0.8);
      color: #878A8C;
      position: relative;
      border-radius: 4px;
      padding:5px;
  }
  
  .comment{    
      --post-line-color: #ccc;    
      border: 1px solid #ccc;    
      margin-bottom: 10px;
      overflow: hidden;
      background-color: rgba(255,255,255,0.8);
      color: #878A8C;
      position: relative;
      border-radius: 4px;
      padding:5px;
  }
</style>