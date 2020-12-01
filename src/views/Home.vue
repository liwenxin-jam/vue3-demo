<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @send-msg="handle" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue' // vue2
// import HelloWorld from '@/components/HelloWorld_ref.vue' // ref
// import HelloWorld from '@/components/HelloWorld_reactive.vue' // reactive
// import HelloWorld from '@/components/HelloWorld_computed.vue' // computed
// import HelloWorld from '@/components/HelloWorld_emit.vue' // emit
// import HelloWorld from '@/components/HelloWorld_lifecycle.vue' // lifecycle

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const handle = value => {
      console.log('handler -> value', value)
    }

    return {
      handle
    }
  }
}
</script>
