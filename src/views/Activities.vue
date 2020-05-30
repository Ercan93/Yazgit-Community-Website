<template>
  <div class="container">
    <h1 class="heading">Etkinliklerimiz</h1>
    <div class="wrapper">
      <div v-for="data in activitys" class="boxs">
        <h2>{{activityTitle}}</h2>
        <p>{{activityData}}</p>
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