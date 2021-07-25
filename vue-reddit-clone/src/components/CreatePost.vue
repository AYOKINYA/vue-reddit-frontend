<template>
    <div>
        <div class="container">
            <div class="row">
                <hr />
                <div class="create-post-container col-md-9">
                <form class="post-form" >
                    <div class="form-group">
                    <div class="create-post-heading">Create Post</div>
                    <hr />
                    <input type="text" v-model="title" class="form-control" style="margin-top: 5px;" placeholder="Title"/>
                    <input type="text" v-model="url"  class="form-control"  style="margin-top: 5px;" placeholder="URL"/>

                    <select v-model="subredditName" class="form-control" style="margin-top: 10px;">
                        <option defaultValue="" disabled>Select Subreddit</option>
                        <option v-for="subreddit in allSubreddits" :key="subreddit.id">
                            {{subreddit.name}}</option>
                    </select>

                    <textarea type="text" v-model="description" style="width: 100%; margin-top: 5px;"
                            placeholder="Description"></textarea>

                    <span>
                        <div style="margin-top: 5px;" class="float-right">
                        <button class="btnDiscard" @click="$router.push('/')">Discard</button>
                        <button class="btnCreatePost" @click="newPost">Post</button>
                        </div>
                    </span>
                    </div>
                </form>
                </div>
                <div class="col-md-3">
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'CreatePost',
    data() {
        return {
            title: '',
            description: '',
            subredditName: '',
            url: '',
        }
    },
    methods: {
        ...mapActions(['getAllSubreddits', 'createPost']),
        newPost(e) {
            e.preventDefault();
            let post = {
                postName: this.title,
                description: this.description,
                subredditName: this.subredditName,
                url: this.url
            }
            this.createPost(post);
        }
    },
    computed: mapGetters(['allSubreddits']),
    created() {
        this.getAllSubreddits();
    }
}
</script>

<style scoped>
.btnCreatePost,
.btnCreateSubreddit {
  margin-top: 5px;
}

.post-form {
  margin: 2px;
}

.comment-notification {
  margin-top: 5px;
}

.create-post-container {
  margin-top: 10px;
  --post-line-color: #ccc;
  border: 1px solid #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
  color: #878A8C;
  position: relative;
  border-radius: 4px;
  padding: 5px;
}

.btnDiscard {
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
    margin-top: 5px;
    color: #0079D3;
    background-color: transparent;
  }

.create-post-heading {
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: #1c1c1c;
  -ms-flex: 1;
  flex: 1;
}

.btnCreatePost {
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
</style>