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
    <div class="header-right">
      <nav-router-link></nav-router-link>
    </div>
  </header>
</template>
<script>
import navRouterLink from "../common/NavRouterLink";
export default {
  components: { navRouterLink }
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
.header-right {
  margin-left: auto;
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
</style>