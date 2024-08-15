<template>
  <div class="user-projects container">
    <h1>User Projects</h1>
    <div class="card" v-for="project in projects" :key="project.id">
      <div class="card-header">
        {{ project.name }}
      </div>
      <div class="card-content">
        <p>{{ project.description }}</p>
        <p><strong>Progress:</strong> {{ project.progress }}%</p>
        <p><strong>Budget:</strong> ${{ project.budget }}</p>
        <p><strong>Team Members:</strong> {{ project.members.join(', ') }}</p>
      </div>
      <div class="card-footer">
        <button class="button" @click="editProject(project.id)">Edit Project</button>
      </div>
    </div>
    <div class="card" v-for="project in projects" :key="project.id">
      <div class="card-header">
        {{ project.name }}
      </div>
      <div class="card-content">
        <p>{{ project.description }}</p>
        <p><strong>Progress:</strong> {{ project.progress }}%</p>
        <p><strong>Budget:</strong> ${{ project.budget }}</p>
        <p><strong>Team Members:</strong> {{ project.members.join(', ') }}</p>
      </div>
      <div class="card-footer">
        <button class="button" @click="editProject(project.id)">Edit Project</button>
      </div>
    </div>
    <div class="card" v-for="project in projects" :key="project.id">
      <div class="card-header">
        {{ project.name }}
      </div>
      <div class="card-content">
        <p>{{ project.description }}</p>
        <p><strong>Progress:</strong> {{ project.progress }}%</p>
        <p><strong>Budget:</strong> ${{ project.budget }}</p>
        <p><strong>Team Members:</strong> {{ project.members.join(', ') }}</p>
      </div>
      <div class="card-footer">
        <button class="button" @click="editProject(project.id)">Edit Project</button>
      </div>
    </div>
    <div class="card" v-for="project in projects" :key="project.id">
      <div class="card-header">
        {{ project.name }}
      </div>
      <div class="card-content">
        <p>{{ project.description }}</p>
        <p><strong>Progress:</strong> {{ project.progress }}%</p>
        <p><strong>Budget:</strong> ${{ project.budget }}</p>
        <p><strong>Team Members:</strong> {{ project.members.join(', ') }}</p>
      </div>
      <div class="card-footer">
        <button class="button" @click="editProject(project.id)">Edit Project</button>
      </div>
    </div>
    <div class="card" v-for="project in projects" :key="project.id">
      <div class="card-header">
        {{ project.name }}
      </div>
      <div class="card-content">
        <p>{{ project.description }}</p>
        <p><strong>Progress:</strong> {{ project.progress }}%</p>
        <p><strong>Budget:</strong> ${{ project.budget }}</p>
        <p><strong>Team Members:</strong> {{ project.members.join(', ') }}</p>
      </div>
      <div class="card-footer">
        <button class="button" @click="editProject(project.id)">Edit Project</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProjects',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Riwi Platform',
          description: 'Development of a connectivity platform for Riwi.',
          progress: 70,
          budget: 10000,
          members: ['Alice', 'Bob', 'Charlie']
        }
        // Agrega más proyectos según sea necesario
      ]
    }
  },
  methods: {
    editProject(id) {
      alert(`Edit project ${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.user-projects {
  .card {
    margin-bottom: 20px;
  }
}
</style>
