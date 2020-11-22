<template>
  <div class="container" @mousedown="mouseDown">
    <h1>TodoList</h1>
    <h3>
      共有<span class="text-primary">{{ lists.length }}</span
      >个任务，其中<span class="text-success">{{ finished.length }}</span
      >项已完成
    </h3>
    <h3>未完成的列表</h3>
    <ul class="list-group">
      <template v-for="(item, index) in lists" :key="index">
        <li
          v-if="!item.checked"
          class="list-group-item d-flex justify-content-between"
        >
          <div class="form-group form-check mb-0">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="item.checked"
              @click="() => (item.checked = !item.checked)"
            />
            <label v-if="item.isEdit" class="form-check-label">
              <input type="text" v-model="editValue" ref="myinput" />
            </label>
            <label
              v-else
              class="form-check-label"
              @dblclick="showEdit(item, index)"
              >{{ item.name }}</label
            >
          </div>
          <button type="button" class="close" aria-label="关闭" @click="remove(index)">
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
      </template>
    </ul>
    <h3>已完成的列表</h3>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in finished"
        :key="'finished-' + index"
        @click="() => (item.checked = !item.checked)"
      >
        <div class="form-group form-check mb-0">
          <input
            type="checkbox"
            class="form-check-input"
            :id="'finished-' + index"
            v-model="item.checked"
            disabled
          />
          <label class="form-check-label" :for="'finished-' + index">{{
            item.name
          }}</label>
        </div>
      </li>
    </ul>
    <h3>添加新的Task</h3>
    <div class="form-group">
      <label for="add">添加</label>
      <input
        type="text"
        class="form-control"
        id="add"
        placeholder="添加新的Task"
        v-model="value"
        @keydown.enter="add"
      />
    </div>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click="add">
      确定添加
    </button>
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
    const remove = (index) => {
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
