<template>
  <div id="app">
    <div v-if="error">{{ error }}</div>
    <Suspense v-else>
      <template #default>
        <user />
      </template>
      <template #fallback>
        Loading.....
      </template>
    </Suspense>
  </div>
</template>
<script>
import User from './components/User'
import { ref, onErrorCaptured } from 'vue'
export default {
  components: {
    user: User
  },
  setup() {
    const error = ref(null)
    onErrorCaptured(e => {
      error.value = e
      return true
    })
    return { error }
  }
}
</script>
