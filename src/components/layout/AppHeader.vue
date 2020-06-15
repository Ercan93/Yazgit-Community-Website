<template>
  <header class="wrapper">
    <router-link to="/">
      <div class="header-left">
        <img
          width="70"
          class="logo"
          src="../../assets/logos/yazgit_logo.svg"
          alt="Konya yapay zeka ve görüntü isleme toplulugu logo"
        />
        <a class="logoName">YAZGİT</a>
      </div>
    </router-link>

    <Slide right :closeOnNavigation="true">
      <div class="header-right">
        <nav-router-link class="buttons"></nav-router-link>
      </div>
    </Slide>
  </header>
</template>
<script>
import NavRouterLink from "../common/NavRouterLink";
import { Slide } from "vue-burger-menu";
export default {
  components: { NavRouterLink, Slide }
};
</script>
<style scoped>
.wrapper {
  background: #004257;
  height: 19vh;
  color: white;
  line-height: 25px;
  display: flex;
  align-items: center;
  font-family: "Merriweather";
}
a {
  text-decoration: none;
}
.buttons {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
.header-left {
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.logoName {
  font-size: 60px;
  margin-left: 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
}
.bm-burger-bars {
  background-color: #ffffff;
}
</style>