<template>
  <div class="hello">
    <input type="text" v-model="num1" @keyup="add()">
    <span>+</span>
    <input type="text" v-model="num2" @keyup="add()">
    <span>=</span>
    {{result}}
    <p>{{objInfo}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script lang="ts">
import { ref, toRaw } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const num1 = ref(0)
    // 支持泛型T，本质上还是reactive ref(xx) => reactive({value: xx})
    const num2 = ref<string | number>(0)
    const result = ref(0)

    const obj = { name: 'xx', info: { desc: 'handsome boy' } }
    const objInfo = ref(obj)
    // 响应式对象转普通对象，使用场景操作频繁不需要实时刷新界面
    // const obj2 = toRaw(objInfo)
    const obj2 = toRaw(objInfo.value)
    console.log(obj === obj2)

    function add () {
      result.value = parseInt(num1.value.toString()) + parseInt(num2.value.toString())
    }

    function myFn() {
      // obj.name = 'jam'
      // console.log(obj)
      // console.log(objInfo.value)
      objInfo.value.name = 'hello world'
      objInfo.value.info.desc = 'thanks'
    }

    return {
      num1,
      num2,
      result,
      add,
      obj,
      objInfo,
      myFn
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
