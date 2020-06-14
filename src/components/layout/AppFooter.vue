<template>
  <footer>
    <div class="footer-left">
      <!-- Community Logo and Name -->
      <div class="logo">
        <img width="130" class="logo" src="../../assets/logos/yazgit_logo.svg" alt />
        <p id="logo-name">
          Yapay Zeka ve Görüntü
          <br />İşleme Topluluğu Konya
        </p>
      </div>
      <!-- Router buttons -->
      <nav-router-link class="nav-buttons"></nav-router-link>
    </div>
    <!-- Author Name -->
    <div class="footer-center">
      <img width="20px" src="../../assets/icons/Code.svg" />
      &nbsp;
      <a href="https://github.com/Ercan93" target="_blank">{{author}}</a>
    </div>
    <!--Yazgit tweets content -->
    <div class="footer-right">
      <a
        class="twitter-timeline"
        data-height="360"
        data-width="320"
        data-theme="dark"
        href="https://twitter.com/yaz_git?ref_src=twsrc%5Etfw"
      >Tweets by yaz_git</a>
    </div>
  </footer>
</template>
<script>
import navRouterLink from "../common/NavRouterLink";
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
  height: 60vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #00203b;
  color: white;
}
.footer-center {
  display: flex;
}
.footer-center > a {
  text-decoration: none;
  color: white;
}
.footer-left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.logo {
  display: flex;
  justify-content: baseline;
  align-items: center;
  opacity: 0.8;
}
#logo-name {
  font-size: 30px;
  margin-left: 30px;
}
</style>