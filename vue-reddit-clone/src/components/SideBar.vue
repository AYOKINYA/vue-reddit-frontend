<template>
    <div class="sidebar">
        <img src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png" alt='reddit-logo'/>
        <div style="text-align: center; font-size=1em">
            Welcome to Spring Reddit Clone home page.
            Come here to check in with your favorite subreddits.
        </div>
        <div style="text-align: center;">
            <button class="btnCreatePost" @click="$router.push('/create-post')">Create Post</button>
        </div>
        <div style="text-align: center;">
            <button class="btnCreateSubreddit" @click="$router.push('/create-subreddit')">Create Subreddit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style scoped>
.sidebar{
    width: 312px;
    height: 242px;
    --post-line-color: #ccc;    
    border: 1px solid #ccc;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: rgba(255,255,255,0.8);
    color: #878A8C;
    position: relative;
    border-radius: 4px;
    padding:5px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.btnCreatePost, .btnCreateSubreddit{
    background-color: #0079D3;
    border-color: #0079D3;
    color: aliceblue;
    fill: #0079D3;
    border: 1px solid;
    border-radius: 4px;
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
    width: 288px;
    height: 34px;
}

.btnCreateSubreddit{
    margin-top: 5px;
    color: #0079D3;
    background-color: transparent;
}

.sidebar>ul>li{
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #1c1c1c;
}
</style>