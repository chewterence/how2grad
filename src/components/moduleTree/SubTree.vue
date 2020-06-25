<template>
    <div id="outer-struct">
        <hr>
        <br>
        testPrint: {{treeRoot}}
        <TreeModule v-bind:module='mod' :modlist='requiredModules'/>
        <br><hr>
    </div>
</template>

<script>
import TreeModule from './TreeModule.vue'

export default {
  name: 'SubTree',
  components: {
    TreeModule
  },
  props: ['treeRoot', 'treeData', 'moduleData', 'modList'],
  computed: {
  }
}
</script>

<style scoped>
 #outer-struct ul{
    }
</style>
