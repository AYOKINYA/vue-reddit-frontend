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

.btnCommments{
    border-radius: 2px solid;
    color: #878A8C;
    opacity: 1;
}

.btnCommments:hover{
    opacity: 0.65;
    cursor: pointer;
}

.post-title{
    font-size: 28px;
    font-weight: bold;
    opacity: 1;
}

.posturl, .postname{    
    color: black;
}

.subreddit-text{
    font-weight: bold;
}

.post-text{
    margin-top: 10px;
}
</style>