<template>
    <div>
        <div class="container">
            <div class="row">
                <hr />
                <div class="col-md-9">
                    <h3>Subreddit : {{this.subreddit.name}}</h3>
                    <span>{{this.subreddit.description}}</span>
                    <PostTile :posts="this.allPosts"/>
                </div>
                <div class="col-md-3">
                    <SideBar/>
                    <SubredditSideBar/>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PostTile from './PostTile.vue';
import SideBar from './SideBar.vue';
import SubredditSideBar from './SubredditSideBar.vue';

export default {
    name: 'SubredditView',
    components: {
        PostTile,
        SideBar,
        SubredditSideBar
    },
    methods: {
        ...mapActions(['getSubreddit', 'getPostsBySubreddit']),
    },
    computed: mapGetters(['subreddit', 'allPosts']),
    
    created() {
        this.getSubreddit(this.$route.params.id);
        this.getPostsBySubreddit(this.$route.params.id);
    }
}
</script>

<style scoped>

</style>