<template>
  <div class="container">
    <h1 class="about-heading">Hakkımızda</h1>
    <p class="about-text">{{about_data}}</p>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      about_data: null
    };
  },
  computed() {
    this.about_data = this.$store.getters("aboutDataGetters");
  }
};
</script>
<style scoped>
.container {
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Merriweather";
  font-weight: bold;
}
.about-heading {
  margin-top: 40px;
}
.social-media {
  display: flex;
  margin-bottom: 20px;
}
.social-media > a {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.social-media > a > p {
  margin-left: 10px;
}
.about-text {
  padding: 44px 100px 50px 100px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}
</style>