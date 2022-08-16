<template>
    <nav :class="style.navbar" role="navigation" aria-label="main navigation">
  <div :class="style.navbarBrand">
    <a :class="style.navbarItem">
      <span><ion-icon name="alarm-outline" size="large"></ion-icon>TacToc</span>
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

<style lang="scss" scoped>
 @import '../scss/style.scss';
</style>