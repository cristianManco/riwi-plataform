<template>
  <div class="teams">
    <h2>Teams</h2>
    <div class="teams-grid">
      <div class="team-card" v-for="team in teams" :key="team.id">
        <div class="card-header">
          <div class="team-info">
            <img :src="team.icon" alt="team icon" class="team-icon" />
            <h3 class="team-name">{{ team.name }}</h3>
          </div>
          <div class="tags">
            <span v-for="tag in team.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="card-body">
          <p class="team-description">{{ team.description }}</p>
          <div class="team-members">
            <img v-for="member in team.members" :key="member.id" :src="team.members.avatar" alt="member avatar" class="member-avatar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          id: 1,
          name: 'React Developers',
          icon: 'react-icon.png',
          tags: ['React', 'MUI'],
          description: 'We don\'t make assumptions about the rest of your technology stack, so you can develop new features in React.',
          members: [
            { id: 1, name: 'John Doe', avatar: '../assets/logo.svg' },
            { id: 2, name: 'Jane Doe', avatar: '../assets/logo.svg' },
            { id: 3, name: 'Alex Smith', avatar: '../assets/logo.svg' }
          ]
        },
        {
          id: 2,
          name: 'Vue.js Dev Team',
          icon: '../assets/logo.svg',
          tags: ['Vuejs', 'Developer'],
          description: 'The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.',
          members: [
            { id: 1, name: 'Anna Johnson', avatar: '../assets/logo.svg' },
            { id: 2, name: 'Mark White', avatar: '../assets/logo.svg' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.teams {
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 12px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #343a40;
    font-family: 'Poppins', sans-serif;
  }

  .teams-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .team-card {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      .team-info {
        display: flex;
        align-items: center;

        .team-icon {
          width: 24px;
          height: 24px;
          margin-right: 0.5rem;
        }

        .team-name {
          font-size: 1.2rem;
          color: #343a40;
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }
      }

      .tags {
        .tag {
          background-color: #e9ecef;
          color: #007bff;
          border-radius: 20px;
          padding: 0.2rem 0.5rem;
          font-size: 0.75rem;
          margin-left: 0.5rem;
          font-family: 'Poppins', sans-serif;

          &:first-child {
            margin-left: 0;
          }
        }
      }
    }

    .card-body {
      .team-description {
        font-size: 0.9rem;
        color: #6c757d;
        margin-bottom: 1rem;
        font-family: 'Poppins', sans-serif;
      }

      .team-members {
        display: flex;

        .member-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 0.5rem;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
