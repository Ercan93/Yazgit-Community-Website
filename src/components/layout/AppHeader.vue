<template>
  <header class="wrapper">
    <router-link to="/">
      <div class="header-left">
        <img
          width="70"
          class="logo"
          src="static/logos/yazgit_logo.svg"
          alt="Konya yapay zeka ve görüntü isleme toplulugu logo"
        />
        <a class="logoName">YAZGİT</a>
      </div>
    </router-link>

    <div class="header-right">
      <nav-router-link class="buttons"></nav-router-link>
    </div>
  </header>
</template>
<script>
import NavRouterLink from "../common/NavRouterLink";
export default {
  components: { NavRouterLink }
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
  margin-left: 30px;
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
@media screen and (max-width: 720px) {
  .wrapper {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .header-left {
    padding-top: 20px;
    margin-left: 0;
  }
}
</style>