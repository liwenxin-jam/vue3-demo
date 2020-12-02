import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const num1 = ref<string | number>(0)
console.log(num1)

createApp(App).use(store).use(router).mount('#app')
