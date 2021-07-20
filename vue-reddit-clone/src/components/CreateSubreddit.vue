<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="create-subreddit-container">
                <form class="post-form">
                    <div class="form-group">
                    <div class="create-subreddit-heading">Create Subreddit</div>
                    <hr />
                    <input type="text" v-model="title" class="form-control" style="margin-top: 5px;"
                        placeholder="Title"/>
                    <textarea type="text" v-model="description" style="width: 100%; margin-top: 5px;"
                        placeholder="Description"></textarea>
                    <div>
                        <div style="margin-top: 5px;" class="float-right">
                        <button class="btnDiscard" @click="$router.push('/')">Discard</button>
                        <button class="btnCreateSubreddit" @click="newSubreddit">Create</button>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
                <div class="col-md-3">
                <div class="sidebar">
                    <h5 class="guidelines">Posting to Spring Reddit</h5>
                    <hr />
                    <ul>
                    <li>Remember the human</li>
                    <hr />
                    <li>Behave like you would in real life</li>
                    <hr />
                    <li>Don't spam</li>
                    <hr />
                    </ul>
                </div>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "CreateSubreddit",
    data() {
        return {
            title: '',
            description: ''
        }
    },
    methods: {
        ...mapActions(['createSubreddit']),
        newSubreddit(e) {
            e.preventDefault();
            let subreddit = {
                name: this.title,
                description: this.description
            }

            console.log("inputs : " + JSON.stringify(subreddit));

            this.createSubreddit(subreddit);
        }
    }
    
}
</script>

<style scoped>
.create-subreddit-container {
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
  
  .create-subreddit-heading {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    color: #1c1c1c;
    -ms-flex: 1;
    flex: 1;
  }
  
  .btnCreateSubreddit {
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
  
  .guidelines {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #1c1c1c;
  }
  
  .sidebar {
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
</style>