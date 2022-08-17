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
          <button v-if="!isSingIn" :class="style.btnWarningLight">Register</button>
          <button v-if="!isSingIn" :class="style.btnPrimaryLight" @click="form.login = !form.login">Login</button>
        </div>
      </div>
    </div>
</nav>

<div :class="style.loginForm" v-if="form.login">
  <button :class="style.btnCloseLight" @click="form.login = !form.login"><ion-icon name="close-circle-outline" size="large"></ion-icon></button>
  <h1>Login</h1>
  <hr>
  <label>
    Username:
    <input type="text" ref="username" :class="style.inputDefault">
  </label>
  <label>
    Password:
    <input type="text" ref="password" :class="style.inputDefault">
  </label>
  <button :class="style.btnInfo" @click="login(this.$refs.username.value ,this.$refs.password.value)">Login</button>
</div>
</template>

<script>
import {style} from '../methods/style.js'
import {url} from '../methods/url.js'
export default {
    name: "Controller",
    data(){
      return {
        style: style,
        isSingIn: false,
        form: {login: false, register: false}
      }
    },
    methods:{
      async login(name, pass){
        const response = await fetch(url+'/login/', {
          method: 'POST',
          body: JSON.stringify({
            username: name,
            password: pass
          })
        })
        const data = await response.json()
        
      }
    }
}
</script>

<style lang="scss" scoped>
 @import '../scss/style.scss';
 .card button{
  margin-bottom: 10px;
 }
</style>