<template>
    <div :class="style.card">
        <label>
            Title:
            <input type="text" ref="title" :class="style.inputPrimary">
        </label>
        <label>
            Text:
            <textarea :class="style.textareaWarning" ref="text"></textarea>
        </label>
        <button :class="style.btnPrimaryLight" @click="postCreate()">Postar</button>
    </div>
    <div :class="style.card" v-for="post in posts" :key="post">
        <div>
            <ion-icon name="person-circle-outline"></ion-icon>
            <p>{{post.username}}</p>
        </div>
        <h1 :class="style.title4">{{post.title}}</h1>
        <hr>
        <p>{{post.description}}</p>
        <div>
            <button :class="style.btnDangerLight" @click="like(post.title)"><ion-icon name="heart-outline"></ion-icon></button>
            <p>{{post.likes.length}} like(s)</p>
        </div>
    </div>

    <article :class="style.messageDanger" v-if="erro.status">
        <div :class="style.messageHeader">
          <p>Erro</p>
        </div>
        <div :class="style.messageBody">
          {{erro.message}}
        </div>
    </article>
</template>

<script>
import {searchPosts, createPost, addLike} from '../methods/posts.js'
import {style} from '../methods/style.js'
export default{
    name: 'Posts',
    data(){
        return{
            style: style,
            posts: [],
            erro:{
                status: false,
                message: ''
            }
        }
    },
    methods:{
        async postCreate(){
            const data = await createPost(this.$refs.title.value, this.$refs.text.value)
            if(data.message){ 
                this.erro.status = !this.erro.status
                setTimeout(() =>{
                    this.erro.status = !this.erro.status
                }, 3000)
                return this.erro.message = data.message
            }
            this.$refs.title.value = ''
            this.$refs.text.value = ''
            this.posts = data
            this.posts.reverse()
        },
        async like(title){
            const data = await addLike(title)
            this.posts = data
            this.posts.reverse()
        }
    }, 
    async mounted(){
        this.posts = await searchPosts()
        this.posts.reverse()
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
        margin: 0;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .message{
        position: absolute;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        top: 50%;
        left: 0;
        right: 0;
        width: 500px;
    }
</style>