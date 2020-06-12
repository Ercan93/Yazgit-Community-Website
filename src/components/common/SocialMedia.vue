<template>
  <div class="social-media">
    <a v-for="Account in socialMediaAcc" v-bind:href="`${Account.href}`" target="_blank">
      <img v-bind:src="`${iconPath}${Account.title}.svg`" width="50px" alt />
      <p>{{Account.AccName}}</p>
    </a>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      iconPath: "../src/assets/icons/"
    };
  },
  computed: {
    ...mapGetters({
      socialMediaAcc: "socialMediaAccGetters"
    })
  }
};
</script>
<style scoped>
.social-media {
  display: flex;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
p {
  margin-left: 10px;
}
</style>