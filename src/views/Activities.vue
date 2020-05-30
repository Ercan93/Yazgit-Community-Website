<template>
  <div class="container">
    <h1 class="heading">Etkinliklerimiz</h1>
    <div class="wrapper">
      <div v-for="activity in activities" class="boxs">
        <h2>{{activity.title}}</h2>
        <p v-for="activityName in activity.data">{{activityName}}</p>
        <br />
      </div>
    </div>
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
.boxs > h2 {
  color: darkred;
}
.heading {
  margin-top: 30px;
  font-size: 40px;
}
.boxs {
  width: 45vw;
  margin-top: 40px;
}
</style>