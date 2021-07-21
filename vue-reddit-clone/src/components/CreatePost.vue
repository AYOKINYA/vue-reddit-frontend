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

</style>