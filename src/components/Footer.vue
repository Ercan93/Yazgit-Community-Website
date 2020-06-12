<template>
  <footer>
    <div class="footer-left">
      <router-link class="nav-button" to="/FirstAIConf">
        <a>1.Yapay Zeka Buluşmaları</a>
      </router-link>
      <router-link class="nav-button" to="/Activities">
        <a>Etkinliklerimiz</a>
      </router-link>
      <router-link class="nav-button" to="About">
        <a>Hakkımızda</a>
      </router-link>
    </div>
    <div class="footer-center">
      <div class="social-media">
        <a href="https://twitter.com/yaz_git" target="_blank">
          <img src="../assets/icons/Twitter.svg" width="50px" alt />
          <p>Yaz_git</p>
        </a>
        <a href="https://www.instagram.com/yaz_git/" target="_blank">
          <img src="../assets/icons/Instagram.svg" width="50px" alt />
          <p>Yaz_git</p>
        </a>
        <a>
          <img src="../assets/icons/Mail.svg" width="50px" alt />
          <p>yazgit2018@gmail.com</p>
        </a>
      </div>
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
export default {
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