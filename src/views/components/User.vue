<template>
  <div>
    <h1>{{ user.name }}</h1>
    <h1>{{ user.age }}</h1>
  </div>
</template>

<script>
export default {
  async setup() {
    const fetchUser = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // 页面会先展现Loading ,3s之后会展示user.vue
          resolve({ name: 'Jam', age: '20' })
          // 如果把 resolve({ name: "Jam", age: "20" }); 注释，reject("获取信息失败！");放开，则会展示错误信息
          // reject(new Error('获取信息失败！'))
        }, 3000)
      })
    }

    const user = await fetchUser()
    return { user }
  }
}
</script>
