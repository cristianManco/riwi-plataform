<template>
  <div class="profile-general">
    <div class="profile-header">
      <img
        class="profile-pic"
        src="https://www.bing.com/ck/a?!&&p=505e9bd007011d20JmltdHM9MTcyMzU5MzYwMCZpZ3VpZD0xNzZmNzU2OS1jOTc2LTYxMmYtMGYyMi02MWJjYzhjODYwNmUmaW5zaWQ9NTU1MQ&ptn=3&ver=2&hsh=3&fclid=176f7569-c976-612f-0f22-61bcc8c8606e&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWclMjBwcm9maWxlJkZPUk09SVFGUkJBJmlkPTBGRUY1QjUzRTRDM0E2RkQwNEUxMTVFMDk5ODAwOUMzMjEyQkU2MEM&ntb=1"
        alt="Profile Picture"
      />
      <h1 class="profile-name">John Doe</h1>
      <p class="profile-contact">johndoe@example.com</p>
      <p class="profile-role">Role: Developer</p>
      <p class="profile-status">Status: Active</p>
    </div>
    <div class="profile-details">
      <h2>Skills</h2>
      <ul class="skills-list">
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>Node.js</li>
      </ul>
    </div>
    <div class="timeline">
      <h2>Activity Timeline</h2>
      <ul class="timeline-list">
        <li>12 Invoices have been paid</li>
        <li>Client Meeting: Project meeting with John @10:15am</li>
        <li>Create a new project for client</li>
      </ul>
    </div>
    <div class="project-list">
      <h2>Project List</h2>
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Leader</th>
            <th>Team</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BGC eCommerce App</td>
            <td>Eileen</td>
            <td>React Project</td>
            <td>78%</td>
          </tr>
          <tr>
            <td>Falcon Logo Design</td>
            <td>Owen</td>
            <td>Figma Project</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Dashboard Design</td>
            <td>Keith</td>
            <td>VueJS Project</td>
            <td>62%</td>
          </tr>
          <tr>
            <td>Foodita mobile app</td>
            <td>Merline</td>
            <td>Xamarin Project</td>
            <td>95%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
.profile-general {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  color: #343a40;
  font-family: 'Poppins', sans-serif;

  .profile-header {
    grid-column: 1 / span 2;
    text-align: center;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 12px;

    .profile-pic {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      margin-bottom: 1rem;
    }

    .profile-name {
      color: #212529;
      font-size: 1.8rem;
      margin: 0.5rem 0;
    }

    .profile-contact,
    .profile-role,
    .profile-status {
      color: #6c757d;
      margin: 0.2rem 0;
    }
  }

  .profile-details {
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 12px;

    h2 {
      color: #495057;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      li {
        background-color: #e9ecef;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        color: #495057;
      }
    }
  }

  .timeline {
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 12px;

    h2 {
      color: #495057;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    .timeline-list {
      list-style: none;
      padding: 0;

      li {
        margin: 0.5rem 0;
        color: #495057;

        &:before {
          content: '•';
          color: #007bff;
          margin-right: 0.5rem;
        }
      }
    }
  }

  .project-list {
    grid-column: 1 / span 2;
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 12px;

    h2 {
      color: #495057;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;

      th,
      td {
        text-align: left;
        padding: 0.75rem;
        color: #495057;
        border-bottom: 1px solid #e9ecef;
      }

      th {
        background-color: #f8f9fa;
      }
    }
  }
}
</style>
