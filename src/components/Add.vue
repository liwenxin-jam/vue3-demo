<template>
  <div class="form-group">
    <label>添加待办事项</label>
    <input
      type="text"
      class="form-control"
      v-model="inputValue"
      @keydown.enter="add(inputValue)"
    />
    <small class="form-text text-muted">回车即可添加</small>
  </div>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(item, index) in todos"
      :key="'todo-' + index"
    >
      <div class="form-check float-left">
        <input
          type="checkbox"
          class="form-check-input"
          :id="'check-' + index"
          @click.prevent="check(index)"
        />
        <label class="form-check-label" :for="'check-' + index">{{ item }}</label>
      </div>
      <div class="float-right">
        <button type="button" class="btn btn-danger" @click="delItem(index)">
          删除
        </button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import store from '@/store'

export default defineComponent({
  setup() {
    const inputValue = ref('')

    const add = (value: string) => {
      if (value.trim() === '') return
      store.commit('add', value)
      inputValue.value = ''
    }

    const delItem = (index: number) => {
      store.commit('delete', index)
    }

    const check = (index: number) => {
      store.commit('check', index)
    }

    return reactive({
      inputValue,
      todos: computed(() => store.state.todos),
      add,
      delItem,
      check
    })
  }
})
</script>

<style scoped></style>
