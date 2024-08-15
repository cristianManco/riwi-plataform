<template>
  <div class="connections">
    <h2>Connections</h2>
    <input type="text" placeholder="Search connections..." v-model="searchQuery" />
    <ul class="connections-list">
      <li v-for="connection in filteredConnections" :key="connection.id">
        <span>{{ connection.name }}</span>
        <button @click="disconnect(connection.id)">Disconnect</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      connections: [
        { id: 1, name: 'Jane Doe' },
        { id: 2, name: 'Alex Smith' },
        { id: 3, name: 'Sara Connor' }
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
      this.connections = this.connections.filter((connection) => connection.id !== id)
    }
  }
}
</script>

<style lang="scss">
.connections {
  color: black;
  input[type='text'] {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid blue;
  }
  .connections-list {
    list-style: none;
    li {
      display: flex;
      justify-content: space-between;
      margin: 0.5rem 0;
      padding: 0.5rem;
      background-color: lightpink;
      border-radius: 5px;
      button {
        background-color: pink;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
