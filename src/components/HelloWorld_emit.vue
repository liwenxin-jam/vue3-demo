<template>
  <div class="hello">
    <input type="text" v-model="state.num1">
    <span>+</span>
    <input type="text" v-model="state.num2">
    <span>=</span>
    {{state.result}}
    <p>{{copy}}</p>
    <button type="button" @click="clickEvent()">emit event</button>
  </div>
  <!-- 允许多个根节点 -->
  <!-- {{msg}} -->
</template>

<script>
import { reactive, computed, ref, toRef, toRefs } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 注意第一个参数不允许解构，第二个可以，因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性
  // setup (props, ctx) {
  setup (props, { emit }) {
    // 如果需要解构 prop，可以通过使用 setup 函数中的 toRefs 来完成此操作
    // const { title } = toRefs(props)
    console.log('setup -> props', props)

    const obj = { name: 'xx', age: 18 }
    const copy = ref(obj.name)
    // const age = ref(obj.age)
    // const copy = toRefs(obj)
    // 将某个对象中的属性变成响应式数据，修改响应式数据是会影响到原始数据的。但是需要注意，如果修改通过toRef创建的响应式数据，并不会触发UI界面的更新。
    // ref和toRef区别 ref是复制 toRef的本质是引用，与原始数据有关联
    // const copy = toRef(obj, 'name')
    console.log(copy)

    const state = reactive({
      num1: 0,
      num2: 0,
      // 区别vue的对象形式计算属性
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    })

    const clickEvent = () => {
      copy.value = 'jam'
      console.log(obj)
      console.log(copy)
      // this.$emit('', payload)
      console.log('click')
      // ctx.$emit('send-msg', state.result)
      emit('send-msg', state.result)
    }

    return {
      state,
      clickEvent,
      copy
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
