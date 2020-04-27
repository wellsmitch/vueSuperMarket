<template>
  <div>
    index
    <router-link to="/list">list index</router-link>
    <TabMenus></TabMenus>
  </div>
</template>

<script>
  import TabMenus from '../modal/TabMenus'

  export default {
    name: "index",
    components: {
      TabMenus
    }
  }
</script>

<style scoped>

</style>
