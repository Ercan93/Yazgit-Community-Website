<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "./components/layout/AppHeader";
import appFooter from "./components/layout/AppFooter";
export default {
  components: { appHeader, appFooter },
  data() {
    return {};
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Teko:700&display=swap&subset=latin-ext");
@import url("https://fonts.googleapis.com/css?family=Barlow+Condensed|Righteous&display=swap");
@import url("https://fonts.googleapis.com/css?family=Racing+Sans+One&display=swap&subset=latin-ext");
@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
@font-face {
  font-family: azonix;
  src: local("azonix"), url(/assets/fonts/azonix.otf) format("otf");
}

* {
  margin: 0;
  padding: 0;
}
.header {
  z-index: 2;
}
</style>
