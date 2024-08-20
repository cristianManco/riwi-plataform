import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// Importar Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Agregar los íconos sólidos a la librería
library.add(fas)

const app = createApp(App)

// Registrar el componente de Font Awesome globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
