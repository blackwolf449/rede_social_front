<template>
    <div :class="style.card">
        <label>
            Title:
            <input type="text" ref="title" :class="style.inputPrimary">
        </label>
        <label>
            Text:
            <textarea :class="style.textareaWarning"></textarea>
        </label>
        <button :class="style.btnPrimaryLight">Postar</button>
    </div>
    <div :class="style.card" v-for="post in posts" :key="post">
        <div>
            <ion-icon name="person-circle-outline"></ion-icon>
            <p>{{post.username}}</p>
        </div>
        <h1 :class="style.title4">{{post.title}}</h1>
        <hr>
        <p>{{post.description}}</p>
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
    .card{
        hr{
            width: 100px;
            margin: 0;
        }
        div{
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .title{
            margin: 0;
        }
        padding: 20px;
        text-align: left;
        width: 400px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    button{
        display: flex;
        margin: 0 auto;
        margin-bottom: 10px;
        margin-top: 10px;
    }
</style>