<template>
  <div class="container">
    <!-- Date component -->
    <div class="date">
      <img class="date" src="../assets/icons/tarih.svg" width="200" alt />
      <p>MART</p>
      <div class="time">
        <no-ssr>
          <flip-countdown class="count" deadline="2020-03-19 00:00:00"></flip-countdown>
        </no-ssr>
      </div>
      <p class="free">
        Konferansımız
        <br />Ücretsizdir
      </p>
      <div class="glitch">
        <VueTextGlitch class="heading" text="2. YAPAY ZEKA"></VueTextGlitch>
        <br />
        <VueTextGlitch class="heading" text=" BULUŞMALARI"></VueTextGlitch>
      </div>
    </div>
    <!-- End of Date component -->

    <!-- Session content -->
    <div v-for="session in sessionsData" class="session">
      <h2 class="session-heading">
        {{session.number}}
        <br />
        {{session.title}}
      </h2>
      <div class="cards">
        <!-- Card Component -->
        <div v-for="speaker in session.speakersData" class="card">
          <div class="speaker">
            <a :href="`${speaker.address}`" target="blank"></a>
            <img :src="`${speaker.imgSrc}`" />
            <p class="speaker-name">{{speaker.name}}</p>
            <p class="speaker-profession">{{speaker.profession}}</p>
          </div>
          <p class="title">{{session.title}}</p>
        </div>
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
export default {
  components: {
    VueTextGlitch,
    FlipCountdown,
    ConferenceFlow
  },
  computed: {
    ...mapState(["sessionsData"])
  }
};
</script>
