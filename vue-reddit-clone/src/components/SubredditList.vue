<template>
    <div>
        <div class="container">
            <div class="row">
                <hr />
                <div class="col-md-9">
                <h2>List of Subreddits</h2>
                <ul>
                    <div class="subreddit" v-for="subreddit in allSubreddits" :key="subreddit.id">
                    <li>
                        <router-link to="/view-subreddit/" + subreddit.id>{{subreddit.name}}</router-link>
                    </li>
                    </div>
                </ul>
                </div>
                <div class="col-md-3">
                    <SideBar/>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SideBar from './SideBar.vue';

export default {
    name: 'SubredditList',
    components: {
        SideBar
    },
    methods: {
        ...mapActions(['getAllSubreddits'])
    },
    computed: mapGetters(['allSubreddits']),
    created() {
        this.getAllSubreddits();
    }
}
</script>

<style scoped>

</style>