<template>
  <div class="container">
    <h1 class="about-heading">Hakkımızda</h1>
    <p class="about-text">{{about_data}}</p>
    <social-media></social-media>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import socialMedia from "../components/common/SocialMedia";
export default {
  components: { socialMedia },
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
.about-text {
  padding: 44px 100px 50px 100px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}
</style>