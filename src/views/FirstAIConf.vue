<template>
  <div class="container">
    <h1>1.Yapay Zeka Buluşmalarından Görüntüler</h1>
    <img
      v-for="number in 13"
      v-bind:src="`${photos_path}${number}).jpg`"
      alt="Birinci yapay zeka bulusmalari konya 2018"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      photos_path: "../src/assets/photos/Birinci_yapay_zeka_bulusmalari_konya_("
    };
  }
};
</script>
<style scoped>
.container {
  display: inherit;
  width: 95vw;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/background.svg");
  background-size: 300%;
}
img {
  margin-top: 30px;
  width: 43vw;
  margin-left: 45px;
}
h1 {
  text-align: center;
  margin-top: 20px;
  font-family: "Merriweather";
}
@media only screen and (max-width: 1000px) {
  .container {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  img {
    width: 70vw;
  }
}
</style>