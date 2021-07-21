<template>
    <div>
        <div class="container">
            <div>
                Welcome <b>{{this.username}}</b>.<br /> You have posted <b>{{this.postsLength}}</b> time(s) and commented
                <b>{{this.commentsLength}}</b> time(s).
                You can check your post and comment history below.
            </div>
            <hr />
            <div>
                Your Posts:
            </div>
            <PostTile :posts="this.allPosts" />
            <hr />
            <div>
                Your Comments:
            </div>
            <div v-for="comment in comments" :key="comment.id">
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PostTile from './PostTile.vue';

export default {
    name: 'UserProfile',
    components: {
        PostTile
    },
    methods: {
        ...mapActions(['getPostsByUser', 'getCommentsByUser'])
    },
    data() {
        return {
            username: this.$route.params.username,
        }
    },
    computed: mapGetters(['allPosts', 'postsLength', 'comments', 'commentsLength']),
    created() {
        this.getPostsByUser(this.$route.params.username);
        this.getCommentsByUser(this.$route.params.username);
    }

}
</script>

<style scoped>

</style>