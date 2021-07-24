<template>
  <div class="home">
    <div class="reddit-body">
        <div class="container">
            <div class="row">
                <hr/>
                <div class="col-md-9">
                  <PostTile :posts="this.allPosts" />
                </div>
                <div class="col-md-3">
                    <SideBar/>
                    <SubredditSideBar />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SideBar from './SideBar.vue';
import PostTile from './PostTile.vue';
import SubredditSideBar from './SubredditSideBar.vue';

export default {
  name: 'Home',
  components: {
    SideBar,
    PostTile,
    SubredditSideBar
  },
  methods: {
    ...mapActions(['getAllPosts']),

  },
  computed: mapGetters(['allPosts']),
  created() {
    this.getAllPosts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
