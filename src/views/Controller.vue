<template>
    <nav :class="style.navbar" role="navigation" aria-label="main navigation">
  <div :class="style.navbarBrand">
    <a :class="style.navbarItem">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" :class="style.navbarBurger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
</template>

<script>
import {style} from '../methods/style.js'
export default {
    name: "Controller",
    data(){
      return {
        style: style
      }
    }
}
</script>