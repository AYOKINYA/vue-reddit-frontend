<template>
    <div>
        <hr/>
        <div v-if="$route.query.name">
            User : {{ $route.query.name }}
        </div>
        <div v-else>
            <h1>User Not Found</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchResult"
}
</script>

<style scoped>

</style>