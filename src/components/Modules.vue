<template>
  <div>
    <div v-bind:key="module.moduleCode" v-for="module in modules">
      <ModuleItem v-bind:module="module"/>
    </div>
  </div>
</template>

<script>
import ModuleItem from './ModuleItem.vue'

export default {
  name: 'Modules',
  components: {
    ModuleItem
  },
  props: ['modules']
}
</script>

<style scoped>

</style>
