<template>
  <div id="card">
    <div v-for="speaker in speakersData" class="card">
      <div class="speaker">
        <a :href="`${speaker.address}`" target="blank"></a>
        <img class="speaker-img" :src="`${speaker.imgSrc}`" />
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
<style scoped>
.card {
  border-radius: 20px;
  width: 75vw;
  height: 12rem;
  margin-top: 60px;
  margin-bottom: 40px;
  padding: 20px;
  display: flex;
  align-items: stretch;
}
.speaker {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-left: 10px;
}
.speaker-name {
  font-size: 30px;
  font-family: "Teko";
}
.speaker-profession {
  font-size: 19px;
  font-family: "Merriweather";
}
.speaker-img {
  margin-right: 50px;
  width: 160px;
  height: auto;
  border-radius: 15px;
  border: 4px solid #004257;
}
.title {
  width: 50vw;
  font-size: 4vw;
  font-family: "Teko";
  font-weight: bold;
  text-align: center;
  margin-right: auto;
  margin-left: 20px;
}
</style>