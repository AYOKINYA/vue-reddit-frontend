<template>
    <div>
        <div class="sidebar-view-subreddit">
            <div style="color: black; font-weight: bold;">Browse Subreddits</div>
            <hr />
            <div v-for="subreddit in allSubreddits" :key="subreddit.id">
                <div class="subreddit-text">
                    <router-link :to="{ name: 'SubredditView' , params: {id: subreddit.id}}" >{{subreddit.name}}</router-link>
                <hr />
                </div>
            </div>
            <div v-if="this.displayViewAll">
            <div style="text-align: center;">
                <router-link to="/subreddits-list" style="font-weight: bold;" >View All</router-link>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'SubredditSideBar',
    methods: {
        ...mapActions(['getAllSubredditsToDisplay'])
    },
    computed: mapGetters(['allSubreddits', 'displayViewAll']),
    created() {
        this.getAllSubredditsToDisplay();
    }
}
</script>

<style scoped>
.sidebar-view-subreddit {
    width: 312px;
    height: 242px;
    --post-line-color: #ccc;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.8);
    color: #878A8C;
    position: relative;
    border-radius: 4px;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  .sidebar-view-subreddit {
    height: 280px;
  }
</style>