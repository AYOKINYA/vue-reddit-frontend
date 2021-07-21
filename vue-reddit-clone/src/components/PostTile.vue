<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <div class="row post">
                <div class="col-md-1">
                    hi
                </div>
                <div class="col-md-11">
                    <span class="subreddit-info">
                        <span class="subreddit-text">
                            <router-link to="/" class="posturl">{{post.subredditName}}</router-link>
                        </span>
                        <span>
                            . Posted by <router-link :to="{ name: 'UserProfile', params: {username: post.userName }}">{{post.userName}}</router-link>
                        </span>
                        <span> . {{post.duration}} </span>
                    </span>
                    <hr />
                    <div class="post-title">
                        <a class="postname" :href="post.url">{{post.postName}}</a>
                    </div>
                    <div>
                        <p class="post-text">{{post.description}}</p>
                    </div>
                    <hr />
                    <span>
                        <i class="btnComments fas fa-comments"></i>Comments({{post.commentCount}})
                        <button class="login" @click="$router.push({ name: 'PostView', params: {id: post.id }})">Read Post</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostTile',
    props: ['posts']
}
</script>

<style scoped>

</style>