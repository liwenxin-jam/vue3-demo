<template>
  <!-- Fragment -->
  Hello World!
  <div>Vue</div>

  <!-- Teleport -->
  <button @click="showToast" class="btn">打开 toast</button>
  <!-- to 属性就是目标位置 -->
  <teleport to="#teleport-target">
    <div v-if="visible" class="toast-wrap">
      <div class="toast-msg">我是一个 Toast 文案</div>
    </div>
  </teleport>
  <!-- 与 Vue components 一起使用 —— modal -->
  <button @click="showModal = true" class="btn">打开 Modal</button>
  <modal
    :visible="showModal"
    title="用户登录"
    @close-model="showModal = false"
  ></modal>
</template>

<script>
import { ref } from 'vue'
import Modal from './components/Modal.vue'

export default {
  components: {
    Modal
  },
  setup() {
    // toast 的封装
    const visible = ref(false)
    let timer
    const showToast = () => {
      visible.value = true
      clearTimeout(timer)
      timer = setTimeout(() => {
        visible.value = false
      }, 2000)
    }
    // modal 的封装
    const showModal = ref(false)
    return {
      visible,
      showToast,
      showModal
    }
  }
}
</script>

<style lang="scss" scoped></style>
