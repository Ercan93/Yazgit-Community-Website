<template>
  <footer class="footer">
    <div class="footer-left">
      <!-- Community Logo and Name -->
      <div class="logo">
        <img
          width="130"
          class="logo"
          src="static/logos/yazgit_logo.svg"
          alt="Konya yapay zeka ve görüntü isleme toplulugu logo"
        />
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
      <img width="20px" src="static/icons/Code.svg" />
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
.footer {
  font-family: "Merriweather";
  width: 100%;
  height: 100%;
  padding: 20px 0;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logo {
  display: flex;
  justify-content: first baseline;
  align-items: center;
  opacity: 0.8;
  margin-bottom: 30px;
}
#logo-name {
  font-size: 1.5rem;
  margin-left: 30px;
}
@media only screen and (max-width: 790px) {
  .footer {
    flex-flow: column-reverse wrap;
    align-items: center;
  }
  .footer > * {
    margin-top: 40px;
  }
  .footer-left {
    align-items: center;
  }
  .footer-left > * {
    margin-top: 20px;
  }
  .logo {
    margin-bottom: 10px;
  }
}
</style>