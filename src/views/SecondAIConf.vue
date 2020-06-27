<template>
  <section class="container">
    <!-- Date component -->
    <Date></Date>
    <!-- End of Date component -->
    <article class="glitch">
      <VueTextGlitch class="heading" text="2. YAPAY ZEKA"></VueTextGlitch>
      <br />
      <VueTextGlitch class="heading" text=" BULUŞMALARI"></VueTextGlitch>
    </article>
    <!-- Session content -->
    <article v-for="session in sessionsData" class="session">
      <h2 class="session-heading">
        {{session.number}}
        <br />
        {{session.title}}
      </h2>
      <!-- Card Component -->
      <Card class="cards" :speakersData="session.speakersData"></Card>
      <!-- End of Card Component -->
    </article>
    <!-- End of Session content -->

    <!-- Conference sessions flow Component -->
    <ConferenceFlow></ConferenceFlow>
    <!-- End of Conference sessions flow Component -->

    <!-- Sponsors Content -->
    <div class="sponsors">
      <h2>Sponsorlarımız</h2>
      <img class="sponsor-img" src="../assets/logos/aivision.png" alt="Aivision sirketi logo" />
      <img width="200px" src="../assets/logos/kso.png" alt="Konya sanayi odasi logo" />
      <img width="200px" src="../assets/logos/elfatek.jpg" alt="Elfatek sirket logo" />
      <img width="140px" src="../assets/logos/kto.png" alt="Konya ticaret odasi logo" />
      <img width="140px" src="../assets/logos/ktun.png" alt="Konya teknik üniversitesi logo" />
    </div>
    <!-- End of Sponsors Content -->
  </section>
</template>

<script>
import { mapState } from "vuex";
import VueTextGlitch from "vue-text-glitch";
import ConferenceFlow from "../components/ConferenceFlow";
import Card from "../components/Card";
import Date from "../components/Date";
export default {
  components: {
    VueTextGlitch,
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
  font-size: 10vw;
  margin-bottom: -35px;
}
.session-heading {
  font-size: 40px;
  margin-top: 150px;
  font-family: "Righteous";
  text-align: center;
  color: rgb(95, 11, 11);
}
.cards {
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sponsors {
  background-color: rgb(255, 255, 255);
  text-align: center;
  font-family: "Teko";
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: 3px 3px 10px hsla(221, 100%, 50%, 0.356);
  padding: 0 30px;
  width: calc(75vw - 30px);
}
.sponsors > * {
  padding: 10px 15px;
}
.sponsor-img {
  width: 100px;
  height: auto;
}
</style>