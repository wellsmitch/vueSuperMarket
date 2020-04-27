<template>
  <div>
    this is cart~
--{{this.$route.query.a}}
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
