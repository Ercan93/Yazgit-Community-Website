<template>
  <div class="container">
    <h1 class="heading">Etkinliklerimiz</h1>
    <section class="wrapper">
      <div v-for="activity in activities" class="box">
        <h2>{{activity.title}}</h2>
        <p v-for="activityName in activity.data">{{activityName}}</p>
        <br />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      activities: "activitiesGetters"
    })
  }
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: "Merriweather";
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
.box > h2 {
  color: darkred;
}
.heading {
  margin-top: 30px;
  font-size: 40px;
}
.box {
  width: 45vw;
  padding: 30px 0;
}
@media only screen and (max-width: 600px) {
  .wrapper {
    justify-content: center;
  }
  .box {
    width: 60vw;
  }
}
</style>