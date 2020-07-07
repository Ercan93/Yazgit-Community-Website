<template>
  <div class="date">
    <p class="warning">Konferansımız Pandemi sebebiyle iptal edilmiştir.</p>
    <img src="static/icons/tarih.svg" width="200" alt />
    <p class="month">MART</p>
    <div class="time">
      <flip-countdown class="count" deadline="2020-03-19 00:00:00"></flip-countdown>
    </div>
    <p class="free">
      Konferansımız
      <br />Ücretsizdir
    </p>
  </div>
</template>
<script>
import FlipCountdown from "vue2-flip-countdown";
export default {
  components: { FlipCountdown }
};
</script>
<style scoped>
.warning {
  color: white;
  background-color: rgb(11, 11, 49);
  font-family: "Merriweather";
  text-align: center;
  margin: 30px 0 60px 0;
  padding: 10px 0 10px 0;
  width: 100%;
  font-size: 20px;
  border-radius: 7px;
}
.date {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.free {
  font-size: 30px;
  margin-top: 40px;
  text-align: center;
  color: #004257;
  font-family: "Teko";
  align-self: center;
  margin-top: 60px;
}
.month {
  font-size: 60px;
  color: #004257;
  font-family: Righteous;
  font-weight: bold;
}
.count {
  margin: 0;
  display: inherit;
  font-family: "Teko";
  color: black;
}
.time {
  width: 50vw;
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100;
}
</style>