<template>
  <div id="card">
    <div v-for="speaker in speakersData" class="card">
      <div class="speaker">
        <a :href="`${speaker.address}`" target="blank"></a>
        <img :src="`${speaker.imgSrc}`" />
        <p class="speaker-name">{{speaker.name}}</p>
        <p class="speaker-profession">{{speaker.profession}}</p>
      </div>
      <p class="title">{{speaker.headline}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: { speakersData: Array },
  data() {
    return {};
  }
};
</script>