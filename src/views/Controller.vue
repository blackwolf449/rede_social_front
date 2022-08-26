<template>
<nav :class="style.navbar">
  <div :class="style.navbarBrand">
    <a :class="style.navbarItem" href="#">
      <span><ion-icon name="alarm-outline" size="large"></ion-icon>TacToc</span>
    </a>
  </div>

  
    <div :class="style.navbarEnd">
      <div :class="style.navbarItem">
        <div :class="style.fieldIsGrouped">
          <button v-if="!isSingIn" :class="style.btnWarningLight" @click="form.register = !form.register">Register</button>
          <button v-if="!isSingIn" :class="style.btnPrimaryLight" @click="form.login = !form.login">Login</button>
          <div v-if="isSingIn" :class="usertag"><ion-icon name="person-circle-outline" size="large"></ion-icon><h1>{{username}}</h1></div>
        </div>
      </div>
    </div>
</nav>

<div :class="style.loginForm" v-if="form.login">
  <button :class="style.btnCloseLight" @click="form.login = !form.login"><ion-icon name="close-circle-outline" size="large"></ion-icon></button>
  <h1>Login</h1>
  <hr>
  <p :class="classErro">{{error}}</p>
  <label>
    Username:
    <input type="text" ref="username" :class="style.inputDefault">
  </label>
  <label>
    Password:
    <input type="password" ref="password" :class="style.inputDefault">
  </label>
  <button :class="style.btnInfo" @click="login(this.$refs.username.value ,this.$refs.password.value)">Login</button>
</div>

<div :class="style.loginForm" v-if="form.register">
  <button :class="style.btnCloseLight" @click="form.register = !form.register"><ion-icon name="close-circle-outline" size="large"></ion-icon></button>
  <h1>Register</h1>
  <hr>
  <label>
    Username:
    <input type="text" ref="usernameCad" :class="style.inputDefault" disabled>
  </label>
  <label>
    Password:
    <input type="text" ref="passwordCad" :class="style.inputDefault" disabled>
  </label>
  <label>
    Email:
    <input type="text" ref="emailCad" :class="style.inputDefault" disabled>
  </label>
  <button :class="style.btnInfo" disabled>Registrar</button>
</div>

<router-view v-if="isSingIn"/>
</template>

<script>
import {style} from '../methods/style.js'
import {url} from '../methods/url.js'
export default {
    name: "Controller",
    data(){
      return {
        style: style,
        usertag: 'usertag',
        classErro: 'error',
        isSingIn: false,
        form: {login: false, register: false},
        username: '',
        error: '',
      }
    },
    methods:{
      async login(name, pass){
        const response = await fetch(url+'/oauth/access-token', {
          method: 'POST',
          headers:{
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            username: name,
            password: pass
          })
        })
        const data = await response.json()
        if(response.status != 200) return this.error = data.message
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.accessToken)
        localStorage.setItem('username', this.$refs.username.value)
        this.username = localStorage.getItem('username')
        this.form.login = !this.form.login
        this.isSingIn = !this.isSingIn
      }
    },
    async mounted(){
      const response = await fetch(url+'/oauth', {
        method: 'GET',
        headers:{
          'authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
      })
      if(response.status == 200) {
        this.isSingIn = !this.isSingIn
        this.username = localStorage.getItem('username')
        return this.$router.push('/post')
      }
    }
}
</script>

<style lang="scss" scoped>
 @import '../scss/style.scss';
 .card button{
  margin-bottom: 10px;
 }
 .usertag{
  font-size: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
 }
 .error{
  color: red;
 }
</style>