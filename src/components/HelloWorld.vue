<template>
  <div class="hello">
    <input type="text" v-model="num1">
    <!-- <input type="text" ref="num1" @keyup="add()"> -->
    <span>+</span>
    <input type="text" v-model="num2">
    <!-- <input type="text" ref="num2" @keyup="add()"> -->
    <span>=</span>
    {{result}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      num1: 0,
      num2: 0
      // result: 0
    }
  },
  computed: {
    result () {
      return parseInt(this.num1) + parseInt(this.num2)
    }
  },
  methods: {
    add () {
      this.result = parseInt(this.$refs.num1.value) + parseInt(this.$refs.num2.value)
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
