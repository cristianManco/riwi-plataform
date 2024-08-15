<template>
  <div class="connections">
    <h2>Connections</h2>
    <input type="text" placeholder="Search connections..." v-model="searchQuery" />
    <div class="connections-grid">
      <div class="connection-card" v-for="connection in filteredConnections" :key="connection.id">
        <div class="card-header">
          <img :src="connection.image" alt="Profile Picture" class="profile-pic" />
          <div class="profile-info">
            <h3 class="name">{{ connection.name }}</h3>
            <p class="role">{{ connection.role }}</p>
            <div class="skills">
              <span v-for="skill in connection.skills" :key="skill" class="skill">{{ skill }}</span>
            </div>
          </div>
          <button class="more-options">...</button>
        </div>
        <div class="card-body">
          <div class="stats">
            <div>
              <p class="stat-number">{{ connection.projects }}</p>
              <p class="stat-label">Projects</p>
            </div>
            <div>
              <p class="stat-number">{{ connection.tasks }}</p>
              <p class="stat-label">Tasks</p>
            </div>
            <div>
              <p class="stat-number">{{ connection.connections }}</p>
              <p class="stat-label">Connections</p>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="connect-button" @click="disconnect(connection.id)">
            <span>{{ connection.connected ? 'Connected' : 'Connect' }}</span>
          </button>
          <button class="message-button">
            <i class="fas fa-envelope"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      connections: [
        {
          id: 1,
          name: 'Mark Gilbert',
          role: 'UI Designer',
          skills: ['Figma', 'Sketch'],
          projects: 18,
          tasks: 834,
          connections: 129,
          connected: true,
          image: 'https://via.placeholder.com/100x100'
        },
        {
          id: 2,
          name: 'Eugenia Parsons',
          role: 'Developer',
          skills: ['Angular', 'React'],
          projects: 112,
          tasks: 2310,
          connections: 1280,
          connected: true,
          image: 'https://via.placeholder.com/100x100'
        },
        {
          id: 3,
          name: 'Francis Byrd',
          role: 'Developer',
          skills: ['HTML', 'React'],
          projects: 32,
          tasks: 1250,
          connections: 890,
          connected: false,
          image: 'https://via.placeholder.com/100x100'
        }
        // Add more connection objects as needed
      ]
    }
  },
  computed: {
    filteredConnections() {
      return this.connections.filter((connection) =>
        connection.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  methods: {
    disconnect(id) {
      this.connections = this.connections.map((connection) =>
        connection.id === id ? { ...connection, connected: false } : connection
      )
    }
  }
}
</script>

<style lang="scss">
.connections {
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 12px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #343a40;
    font-family: 'Poppins', sans-serif;
  }

  input[type='text'] {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    border: 1px solid #ced4da;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
  }

  .connections-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .connection-card {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-header {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;

      .profile-pic {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 1rem;
      }

      .profile-info {
        flex-grow: 1;

        .name {
          font-size: 1.1rem;
          color: #343a40;
          margin: 0;
        }

        .role {
          font-size: 0.9rem;
          color: #6c757d;
          margin: 0.25rem 0;
        }

        .skills {
          display: flex;
          gap: 0.5rem;

          .skill {
            background-color: #e9ecef;
            color: #495057;
            padding: 0.3rem 0.5rem;
            border-radius: 5px;
            font-size: 0.75rem;
          }
        }
      }

      .more-options {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #6c757d;
        cursor: pointer;
      }
    }

    .card-body {
      .stats {
        display: flex;
        justify-content: space-between;

        div {
          text-align: center;

          .stat-number {
            font-size: 1.3rem;
            color: #343a40;
            margin: 0;
          }

          .stat-label {
            font-size: 0.8rem;
            color: #6c757d;
          }
        }
      }
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;

      .connect-button {
        background-color: #007bff;
        color: #ffffff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.9rem;
        font-family: 'Poppins', sans-serif;

        &:hover {
          background-color: #0056b3;
        }
      }

      .message-button {
        background-color: #f8f9fa;
        color: #007bff;
        border: 1px solid #007bff;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.9rem;
        font-family: 'Poppins', sans-serif;

        i {
          margin-right: 0.5rem;
        }

        &:hover {
          background-color: #e9ecef;
        }
      }
    }
  }
}
</style>
