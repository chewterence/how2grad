<template>
    <div id="outer-struct">
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in modules" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod' :modlist='requiredModules'/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TreeModule from './TreeModule.vue'

export default {
  name: 'SubTree',
  components: {
    TreeModule
    // Edges
  },
  props: ['modules', 'requiredModules'],
  // methods: {
  //   isPartOfSubTree(module1, module2) {

  //   }
  // },
  computed: {
    // subtrees: function () {
    //   for (let i = 0; i < modules.length(); i++) {
    //     const element = array[index];
    //   }
    // }
  }
}
</script>

<style scoped>
</style>
