<template>
  <header class="wrapper">
    <router-link to="/">
      <div class="header-left">
        <img width="70" class="logo" src="../assets/logos/yazgit_logo.svg" alt />
        <a class="logoName">YAZGİT</a>
      </div>
    </router-link>
    <div class="header-right">
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
  </header>
</template>

<style scoped>
.wrapper {
  background: #004257;
  height: 19vh;
  color: white;
  line-height: 25px;
  display: flex;
  align-items: center;
  font-family: "Merriweather";
}
a {
  text-decoration: none;
}
.header-right {
  margin-left: auto;
}
.header-left {
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.logoName {
  font-size: 60px;
  margin-left: 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
}

.nav-button {
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-right: 40px;
}
.nav-button:hover {
  background-color: rgba(0, 114, 180, 0.39);
  padding: 10px 5px 10px 5px;
  border-radius: 10px;
}
</style>