<template>
  <div class="container">
    <router-link class="back-to-home" to="/">
      <p>Eve Dön</p>
    </router-link>
    <img class="error" src="../assets/Error404.svg" alt />
  </div>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.error {
  height: 100vh;
}
.back-to-home {
  font-family: "Righteous";
  font-size: 10vh;
  text-decoration: none;
  color: #be234a;
}
</style>