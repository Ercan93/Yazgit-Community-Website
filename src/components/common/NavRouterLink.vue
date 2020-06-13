<template>
  <div>
    <router-link class="nav-button" to="/FirstAIConf">
      <a>1.Yapay Zeka Buluşmaları</a>
    </router-link>
    <router-link class="nav-button" to="/Activities">
      <a>Etkinliklerimiz</a>
    </router-link>
    <router-link class="nav-button" to="About">
      <a>Hakkımızda</a>
    </router-link>
  </div>
</template>

<style scoped>
.nav-button {
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-right: 40px;
  padding: 10px 5px 10px 5px;
}
.nav-button:hover {
  background-color: rgba(0, 114, 180, 0.39);

  border-radius: 10px;
}
</style>