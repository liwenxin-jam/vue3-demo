<template>
  <div class="hello">
    <input type="text" v-model="num1" @keyup="add()">
    <span>+</span>
    <input type="text" v-model="num2" @keyup="add()">
    <span>=</span>
    {{result}}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const num1 = ref(0)
    // 支持泛型T
    const num2 = ref(0)
    const result = ref(0)

    function add () {
      result.value = parseInt(num1.value) + parseInt(num2.value)
    }
    return {
      num1,
      num2,
      result,
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
