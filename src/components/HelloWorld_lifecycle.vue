<template>
  <div class="calculator">
    <h3>求和</h3>
    <form>
      <input type="text" v-model="num1">
      <span>+</span>
      <input type="text" v-model="num2">
      <span>=</span>
      <span>{{result}}</span>
    </form>
  </div>
</template>

<script>
import { reactive, computed, toRefs, onMounted, onUnmounted, onUpdated, onRenderTracked, onRenderTriggered } from 'vue'

function useAdd () {
  const state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => {
      return parseInt(state.num1) + parseInt(state.num2)
    })
  })
  return toRefs(state)
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
    onRenderTracked((e) => {
      // 检查哪个依赖性导致组件重新渲染
      console.log('onRenderTracked:', e)
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered!')
    })
    const { num1, num2, result } = useAdd()
    return {
      num1,
      num2,
      result
    }
  },
  mounted () {
    console.log('mounted from mounted()')
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
