<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @send-msg="handle" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld_ref.vue' // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld_reactive.vue' // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld_computed.vue' // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld_emit.vue' // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld_lifecycle.vue' // @ is an alias to /src

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
