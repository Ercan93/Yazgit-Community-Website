<template>
  <div class="navs">
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
.navs {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
}
.nav-button {
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-right: 40px;
  padding: 15px 5px 15px 5px;
}
.nav-button:hover {
  background-color: rgba(0, 114, 180, 0.39);

  border-radius: 10px;
}
</style>