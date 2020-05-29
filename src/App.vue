<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import navHeader from "./components/Header";
export default {
  components: { navHeader },
  data() {
    return {};
  }
};
</script>
