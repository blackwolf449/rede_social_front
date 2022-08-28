<template>
    
</template>

<script>
import {searchPosts} from '../methods/posts.js'
import {style} from '../methods/style.js'
export default{
    name: 'Posts',
    data(){
        return{
            style: style
        }
    },
    async mounted(){
        // this.posts = await searchPosts()
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/style.scss';
</style>