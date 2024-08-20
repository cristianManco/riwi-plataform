<template>
  <div class="container w-100 p-10">
    <header>
      <SearchBar />
    </header>
    <div class="main p-20">
      <ProfileInfo />
    </div>
    <section class="navigation w-59 p-10">
      <Navigation />
    </section>
    <main class="content w-80 p-10">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/general/navigation.vue'
import ProfileInfo from './components/general/profileInfo.vue'
import SearchBar from './components/general/searchBar.vue'
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  background-color: #f2f2f2;
}

.container {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f2f2f2;
  color: #bbb;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  display: flex;
  justify-content: center;
}

.navigation {
  margin: 5px 0;
}

.content {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
