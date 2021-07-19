<template>
  <div id="app">
    <Header :msg="welcomeMessage"></Header>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>

</style>
