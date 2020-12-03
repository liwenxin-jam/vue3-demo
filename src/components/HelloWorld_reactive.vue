<template>
  <div class="hello">
    <input type="text" v-model="state.num1" @keyup="add()">
    <span>+</span>
    <input type="text" v-model="state.num2" @keyup="add()">
    <span>=</span>
    {{state.result}}
    <p>{{state.time}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
import { ref, reactive, shallowReactive, shallowRef, triggerRef, toRaw, markRaw } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    // 创建一个响应式数据，参数是对象或者数组，数组会转为key val的形式存在，key是下标
    // 本质：就是将传入的数据包装成一个 Proxyc 对象，vue2使用的 Object.defineProperty 实现
    const state = reactive({
      num1: 0,
      num2: 0,
      result: 0,
      // 传递其它对象，默认情况下修改对象，界面不会自动更新，可以通过重新赋值的方式实现响应式
      time: new Date()
    })
    // const state = reactive(123)

    const obj = { name: 'xx', info: { desc: 'handsome boy' } }
    // 添加不可转为响应式数据的标记
    // obj = markRaw(obj) // 类似Object.freeze() 冻结一个对象
    const objInfo = reactive(obj)
    // 响应式对象转普通对象，使用场景操作频繁不需要实时刷新界面
    const obj2 = toRaw(objInfo)
    console.log(obj === obj2)

    function add () {
      state.result = parseInt(state.num1) + parseInt(state.num2)
    }

    function myFn() {
      // 直接修改以前的，界面不会更新
      // state.time.setDate(state.time.getDate() + 1)
      // 重新赋值
      const newTime = new Date(state.time.getTime())
      newTime.setDate(state.time.getDate() + 1)
      state.time = newTime
      console.log(state.time)
    }

    // ref与reactive 相同点是都是递归监听，但两者并不等价
    // 弊端，数量量大会影响性能，每一个对象都是proxy
    // shallowReactive shallowRef 注意点 shallowReactive监听第一层 shallowRef 监听的是.value非第一层
    const age1 = ref(18)
    const age2 = reactive({ value: 18 })
    // const state = shallowRef({ a: 'a', b: { c: 'c' } })
    // triggerRef(state) // 类似vue2的$set

    return {
      state,
      add,
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
