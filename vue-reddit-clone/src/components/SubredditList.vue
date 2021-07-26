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
                        <router-link :to="{ name: 'SubredditView' , params: {id: subreddit.id}}">{{subreddit.name}}</router-link>
                        <div v-if="isAdmin">
                            <button className="btn btn-danger" @click="this.removeSubreddit(subreddit.id)" style="margin-left: 15px;">DELETE</button>
                        </div>
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
        ...mapActions(['getAllSubreddits', 'deleteSubreddit', 'getUserRoles']),
        removeSubreddit(id) {
            if (window.confirm("Are you sure?")) {
                this.deleteSubreddit(id);
            }
        }
    },
    computed: mapGetters(['allSubreddits', 'isAdmin']),
    created() {
        this.getAllSubreddits();
        this.getUserRoles();
    }
}
</script>

<style scoped>

</style>