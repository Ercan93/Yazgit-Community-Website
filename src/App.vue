<template>
  <main>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </main>
</template>

<script>
import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";
export default {
  components: { AppHeader, AppFooter },
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
