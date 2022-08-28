<template>
    <div :class="style.card" v-for="post in posts" :key="post">
        <h1>{{posts}}</h1>
    </div>
</template>

<script>
import {searchPosts} from '../methods/posts.js'
import {style} from '../methods/style.js'
export default{
    name: 'Posts',
    data(){
        return{
            style: style,
            posts: [],
        }
    },
    async mounted(){
        this.posts = await searchPosts()
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/style.scss';
</style>