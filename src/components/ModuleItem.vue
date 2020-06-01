<template>
  <div class="module-item">
    <p style="text-align: left; font-size:25px; font-family: Avenir;">
      {{module.moduleCode }}
      {{module.title}}
    </p>
    <p style="text-align: left;">
    {{module.description}}
    </p>
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
    padding: 5px;
    border-bottom: 1px #ccc solid;
  }
</style>
