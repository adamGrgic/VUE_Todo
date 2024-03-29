import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AddTodoComponent from './components/AddTodoComponent.vue'

const app = createApp(App)
app.component('AddTodoComponent', AddTodoComponent)
app.use(createPinia())
app.use(router)

app.mount('#app')
