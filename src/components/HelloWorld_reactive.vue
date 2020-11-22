<template>
  <div class="hello">
    <input type="text" v-model="state.num1" @keyup="add()">
    <span>+</span>
    <input type="text" v-model="state.num2" @keyup="add()">
    <span>=</span>
    {{state.result}}
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const state = reactive({
      num1: 0,
      num2: 0,
      result: 0
    })

    function add () {
      state.result = parseInt(state.num1) + parseInt(state.num2)
    }
    return {
      state,
      add
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
