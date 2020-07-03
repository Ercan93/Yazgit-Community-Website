<template>
  <main>
    <app-header v-show="this.$route.name!='PageNotFound'"></app-header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <app-footer v-show="this.$route.name!='PageNotFound'"></app-footer>
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
@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");

* {
  margin: 0;
  padding: 0;
}
.header {
  z-index: 2;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
