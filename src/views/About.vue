<template>
  <div class="container">
    <h1 class="about-heading">Hakkımızda</h1>
    <p class="about-text">{{about_data}}</p>
    <social-media></social-media>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SocialMedia from "../components/common/SocialMedia";
export default {
  components: { SocialMedia },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      about_data: "aboutDataGetters"
    })
  }
};
</script>
<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Merriweather";
  font-weight: bold;
}
.about-heading {
  margin-top: 40px;
}
.about-text {
  padding: 50px 50px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}
@media only screen and (max-width: 720px) {
  .about-text {
    font-size: 15px;
    line-height: 25px;
  }
}
</style>