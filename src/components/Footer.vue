<template>
  <footer>
    <div class="footer-left">
      <nav-router-link></nav-router-link>
    </div>
    <div class="footer-center">
      <img width="20px" src="../assets/icons/Code.svg" />
      &nbsp;
      {{author}}
    </div>
    <!--Yazgit tweets content -->
    <div class="footer-right">
      <a
        class="twitter-timeline"
        data-height="300"
        data-width="320"
        data-dnt="true"
        href="https://twitter.com/yaz_git?ref_src=twsrc%5Etfw"
      >Tweets by yaz_git</a>
    </div>
  </footer>
</template>
<script>
import navRouterLink from "../components/common/NavRouterLink";
export default {
  components: { navRouterLink },
  data() {
    return {
      author: "by Ercan Uzunsakal"
    };
  }
};
</script>
<style scoped>
footer {
  font-family: "Merriweather";
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>