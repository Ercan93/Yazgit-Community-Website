<template>
  <header class="wrapper">
    <div class="header-left">
      <img width="70" class="logo" src="../assets/logos/yazgit_logo.svg" alt />
      <a class="logoName">YAZGİT</a>
    </div>
    <div class="header-right">
      <a>1.Yapay Zeka Buluşmaları</a>

      <a>Etkinliklerimiz</a>

      <a>Hakkımızda</a>
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
</style>