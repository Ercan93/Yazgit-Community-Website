<template>
  <div class="date">
    <img src="../assets/icons/tarih.svg" width="200" alt />
    <p>MART</p>
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
.date p {
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