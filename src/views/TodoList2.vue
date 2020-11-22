<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <a class="navbar-brand d-flex align-item-center">
        <div class="logo mr-2"></div>
        <span class="h-title">TodoList</span>
      </a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item mr-2">
          <router-link class="nav-link" to="/add">待办事项</router-link>
        </li>
        <li class="nav-item mr-2">
          <router-link class="nav-link" to="/done">已完成</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/delete">已删除</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, toRefs } from 'vue'

export default {
  name: 'TodoList',
  setup() {
    const myinput = ref(null)
    let editIndex = 0
    // 1.加入checkbox -> checked
    // 2.统计哪些 -> checked -> finish 列表
    // 3.add添加item -> item数据结构 -> name, checked, isEdit
    const add = () => {
      state.lists.push({
        name: state.value,
        checked: false,
        isEdit: false
      })
      state.value = ''
    }
    // 4.双击进行编辑
    const showEdit = (item, index) => {
      editIndex = index
      item.isEdit = true
      state.editValue = item.name
    }

    const mouseDown = e => {
      // if (myinput.value && !e.target.contains(myinput.value)) {
      if (myinput.value && e.target !== myinput.value) {
        state.lists[editIndex] = {
          name: state.editValue,
          checked: false,
          isEdit: false
        }
      }
    }
    // 5.删除功能 -> 删除特定index的元素
    const remove = index => {
      state.lists.splice(index, 1)
    }

    const state = reactive({
      value: '',
      editValue: '',
      lists: [
        {
          name: '1',
          checked: false,
          isEdit: false
        },
        {
          name: '2',
          checked: false,
          isEdit: false
        },
        {
          name: '3',
          checked: false,
          isEdit: false
        }
      ],
      finished: computed(() => state.lists.filter(item => item.checked)),
      myinput,
      add,
      showEdit,
      mouseDown,
      remove
    })

    // 等价于在reactive直接写add
    // return { ...toRefs(state), add }
    return toRefs(state)
  }
}
</script>

<style lang="scss" scoped>
.logo {
  background: url('~@/assets/logo.png') no-repeat center center;
  background-size: contain;
  width: 40px;
  height: 40px;
}

.h-title {
  line-height: 40px;
}

.navbar-nav {
  flex-direction: row;
}
</style>
