<template>
  <div class="home">
    <div class="reddit-body">
        <div class="container">
            <div class="row">
                <hr/>
                <div class="col-md-9">

                </div>
                <div class="col-md-3">
                    <SideBar/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import SideBar from './SideBar.vue';

export default {
  name: 'Home',
  components: {
    SideBar
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
