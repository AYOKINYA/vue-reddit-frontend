<template>
    <div>
        <div class="container">
            <div class="row">
                <hr />
                <div class="col-md-9">
                    <div class="row post">
                        <div class="col-md-1">
                            <VoteButton :post="this.post" @updatePost="updateVote"/>
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
                                        <router-link to="/" class="username">{{this.post.userName}}</router-link>
                                    </div>
                                    <div v-else>
                                        <router-link to="/" class="username">Anonymous</router-link>
                                    </div>
                                </span>
                                <div v-if="this.isEligible()">
                                    <button class="btn btn-danger float-right" @click="removePost()">DELETE</button>
                                </div>
                                <div v-if="this.isOwner()">
                                    <button class="btn btn-info float-right" style="padding-right: 15px;">Edit</button>
                                </div>
                            </span>
                            <hr />
                            <div class="post-title">
                                <a class="post-title" :href="this.post.url">{{this.post.postName}}</a>
                            </div>
                            <div>
                                <p class="post-text">{{this.post.description}}</p>
                            </div>
                            <div class="post-comment">
                                <form>
                                <div class="form-group">
                                    <textarea v-model="text" class="form-control" placeholder="Your Thoughts?"></textarea>
                                </div>
                                <button type="submit" @click="newComment" class="login float-right">Comment</button>
                                </form>
                            </div>
                            <div style="margin-top: 60px;" v-for="comment in comments" :key="comment.id">
                                    <div class="comment" key={{comment.id}}>
                                    <div class="username">
                                        <router-link :to="{ name: 'UserProfile', params: {username: comment.userName }}">{{comment.userName}}</router-link>
                                    </div>
                                    <div>
                                        <p>{{comment.duration}}</p>
                                    </div>
                                    <b>{{comment.text}}</b>
                                    </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <SideBar />
                        <SubredditSideBar/>
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
import VoteButton from './VoteButton.vue'
import SubredditSideBar from './SubredditSideBar.vue'

export default {
    name: "PostView",
    components: {
        SideBar,
        VoteButton,
        SubredditSideBar
    },
    data() {
        return {
            text: ''
        }
    },
    methods: {
        ...mapActions(['getPost', 'createComment', 'getCommentsForPost', 'removePost']),
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
        newComment(e) {
            e.preventDefault();
            let comment = {
                postId: this.post.id,
                text: this.text
            }
            this.createComment(comment);
        },
        updateVote() {
            this.getPost(this.$route.params.id);
        },
        deletePost() {
            if (confirm("Are you sure?")) {
                this.deletePost(this.$route.params.id);
            }
        }
    },
    computed: mapGetters(['post', 'comments']),
    created() {
        this.getPost(this.$route.params.id);
        this.getCommentsForPost(this.$route.params.id);
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