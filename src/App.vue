<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <header class="header">
      <div class="header-content">
        <!-- Barra de búsqueda y perfil -->
        <div class="search-profile">
          <input type="text" class="search-bar" placeholder="Search..." />
          <div class="profile-menu">
            <img src="./components/icons/Imagen.jpg" alt="Profile" class="profile-pic" />
          </div>
        </div>
      </div>
    </header>

    <!-- Banner con imagen de fondo -->
    <section class="banner">
      <div class="banner-content">
        <img src="./components/icons/Imagen.jpg" alt="Profile" class="profile-image" />
        <div class="user-info">
          <h2>Cristian Manco</h2>
          <p>Coder • Medellin • Joined october 2023</p>
        </div>
        <button class="connect-btn">Connected</button>
      </div>
    </section>

    <!-- Navegación de usuario -->
    <nav class="user-nav">
      <RouterLink to="/profile" class="nav-link">Profile</RouterLink>
      <RouterLink to="/teams" class="nav-link">Team</RouterLink>
      <RouterLink to="/project" class="nav-link">Projects</RouterLink>
      <RouterLink to="/connection" class="nav-link">Connections</RouterLink>
    </nav>

    <!-- Contenido de las Vistas -->
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: lightblue;

}

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: lightblue;

}

.header {
  width: 100%;
    background-color: lightblue;
    /* background-color: #fff; */
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-profile {
  display: flex;
  align-items: center;
}

.search-bar {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-right: 1rem;
}

.profile-menu {
  display: flex;
  align-items: center;
}

.profile-pic {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.banner {
  width: auto;
  height: 200px;
  background: linear-gradient(90deg, rgba(255, 0, 132, 1) 0%, rgba(0, 119, 255, 1) 100%);
  display: flex;
  align-items: flex-end;
  padding: 1rem 2rem;
}

.banner-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.profile-image {
  border: 3px solid rgb(9, 7, 7);
  border-radius: 50%;
  width: 140px;
  height: 140px;
  margin-right: 1rem;
}

.user-info {
  flex-grow: 1;
}

.user-info h2 {
  margin: 0;
  font-size: 1.5rem;
  color: white;
}

.user-info p {
  margin: 0;
  color: white;
  opacity: 0.8;
}

.connect-btn {
  padding: 0.5rem 1rem;
  background-color: #5a00ff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.user-nav {
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  position: relative;
}

.nav-link.active::after,
.nav-link:hover::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #5a00ff;
}

main {
  flex-grow: 1;
  /* padding: 2rem; */
  width: 100vw;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .banner-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .user-info h2 {
    font-size: 1.25rem;
  }

  .user-info p {
    font-size: 0.875rem;
  }

  .connect-btn {
    margin-top: 1rem;
    width: 100%;
  }

  .nav-link {
    margin: 0.5rem 0;
  }
}
</style>
