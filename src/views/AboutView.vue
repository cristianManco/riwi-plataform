<script setup lang="ts">
import Proyectlist from '@/components/proyectlist.vue'
import connection from '@/components/connection.vue'
import teamProfile from '@/components/teamProfile.vue'
import timeline from '@/components/timeline.vue'
</script>

<template>
  <div class="profile-container">
    <!-- Profile Header -->
    <div class="profile-header">
      <img class="profile-pic" src="../assets/images/hombre.png" alt="Profile Picture" />
      <h1 class="profile-name">Cristian Camilo</h1>
      <p class="profile-contact">riwiaprender@gmail.com</p>
      <p class="profile-role">Role: Developer</p>
      <p class="profile-status">Status: Active</p>
    </div>

    <!-- Profile Details Section -->
    <div class="profile-details">
      <connection />
    </div>

    <!-- Timeline Section -->
    <div class="timeline-section">
      <timeline />
    </div>

    <!-- Team Profile Section -->
    <div class="team-profile-section">
      <teamProfile />
    </div>

    <!-- Project List Section -->
    <div class="project-list-section">
      <Proyectlist />
    </div>
  </div>
</template>

<style lang="scss">
.profile-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  color: #343a40;
  font-family: 'Poppins', sans-serif;
  margin: 2rem;

  .profile-header {
    grid-column: 1 / span 2;
    text-align: center;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    .profile-pic {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .profile-name {
      font-size: 1.5rem;
      font-weight: 600;
      color: #007bff;
    }

    .profile-contact {
      font-size: 1rem;
      color: #6c757d;
    }

    .profile-role,
    .profile-status {
      font-size: 0.875rem;
      color: #28a745;
    }
  }
}
</style>
