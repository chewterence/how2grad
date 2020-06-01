<template>
  <div class="module-item">
    <p>{{module.moduleCode}}</p>
  </div>
</template>

<script>
export default {
  name: 'ModuleItem',
  props: ['module']
}
</script>

<style scoped>
  .module-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc solid;
  }
</style>
