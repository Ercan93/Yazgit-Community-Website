<template>
  <div class="sessions">
    <h2>Program Akışı</h2>
    <div v-for="sessionsData in conferenceSessionsFlow" class="session">
      <h3>{{sessionsData.title}}</h3>
      <p v-for="session in sessionsData.sessions">{{ session}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      conferenceSessionsFlow: this.$store.state.conferenceSessionsFlow
    };
  }
};
</script>
<style scoped>
.sessions {
  background-color: white;
  font-family: "Merriweather";
  font-weight: bold;
  border-radius: 20px;
  box-shadow: 3px 3px 10px hsla(221, 100%, 50%, 0.356);
  padding-bottom: 40px;
}
* {
  margin-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
}
h2 {
  font-size: 50px;
  color: #004257;
}
h3 {
  font-size: 30px;
  color: darkred;
}
</style>