<template>
  <div class="container">
    <!-- Date component -->
    <Date></Date>
    <!-- End of Date component -->
    <div class="glitch">
      <VueTextGlitch class="heading" text="2. YAPAY ZEKA"></VueTextGlitch>
      <br />
      <VueTextGlitch class="heading" text=" BULUŞMALARI"></VueTextGlitch>
    </div>
    <!-- Session content -->
    <div v-for="session in sessionsData" class="session">
      <h2 class="session-heading">
        {{session.number}}
        <br />
        {{session.title}}
      </h2>
      <div class="cards">
        <!-- Card Component -->
        <Card :speakersData="session.speakersData"></Card>
        <!-- End of Card Component -->
      </div>
    </div>
    <!-- End of Session content -->

    <!-- Conference sessions flow Component -->
    <ConferenceFlow></ConferenceFlow>
    <!-- End of Conference sessions flow Component -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueTextGlitch from "vue-text-glitch";
import FlipCountdown from "vue2-flip-countdown";
import ConferenceFlow from "../components/ConferenceFlow";
import Card from "../components/Card";
import Date from "../components/Date";
export default {
  components: {
    VueTextGlitch,
    FlipCountdown,
    ConferenceFlow,
    Card,
    Date
  },
  computed: {
    ...mapState(["sessionsData"])
  }
};
</script>
<style scoped>
* {
  font-size: 22px;
}
a {
  text-decoration: none;
  color: black;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/background.svg");
  background-size: 100vw;
}
.glitch {
  font-family: Righteous;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.heading {
  margin-top: 30px;
  font-size: 80px;
  margin-bottom: -35px;
}
.session-heading {
  font-size: 40px;
  margin-top: 100px;
  font-family: "Teko";
  text-align: center;
}
</style>