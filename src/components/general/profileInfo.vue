<template>
  <section class="layout p-20">
    <section class="banner">
      <div class="banner-content">
        <img src="../icons/Imagen.jpg" alt="Profile" class="profile-image" />
        <div class="user-info">
          <h1>Cristian Manco</h1>
          <br />
          <ul class="profile-detail">
            <li style="margin-left: 10px"><i class="fas fa-code"></i> Coder</li>
            <li><i class="fas fa-map-marker-alt"></i> Medellin</li>
            <li><i class="fas fa-calendar-alt"></i> Joined October 2023</li>
          </ul>
        </div>
        <button
          :style="{ backgroundColor: isConnected ? '#673ab7' : '#bbb' }"
          @click="toggleConnection"
          class="button-with-icon"
        >
          <i class="fa-solid fa-user-check"></i>
          {{ isConnected ? 'Connected' : 'Disconnected' }}
        </button>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isConnected = ref(true)

const toggleConnection = () => {
  isConnected.value = !isConnected.value
}
</script>

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

.banner {
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

.profile-detail {
  display: flex;
  gap: 50px;
}

.user-info {
  flex-grow: 1;
}

.user-info h1 {
  margin: 0;
  font-size: 1.8rem;
  color: white;
}

.user-info p {
  margin: 0;
  color: white;
  opacity: 0.8;
}

.button-with-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  color: #fff;
  font-size: 14px;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.button-with-icon i {
  font-size: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
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

  .button-with-icon {
    margin-top: 1rem;
    width: 100%;
  }
}
</style>
