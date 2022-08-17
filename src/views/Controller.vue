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
  <h1>Login</h1>
  <hr>
  <label>
    Username:
    <input type="text" :class="style.inputDefault">
  </label>
  <label>
    Password:
    <input type="text" :class="style.inputDefault">
  </label>
  <button :class="style.btnInfo">Login</button>
</div>
</template>

<script>
import {style} from '../methods/style.js'
export default {
    name: "Controller",
    data(){
      return {
        style: style,
        isSingIn: false,
        form: {login: false, register: false}
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