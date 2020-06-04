<template>
    <div id="outer-struct">
        <!-- {{trueNoPrereq}} -->
        <br>
        {{requiredModules}}
        <br>
        {{prereqData}}
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in modules" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod' />
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
  },
  props: ['modules', 'prereqData', 'requiredModules'],
  computed: {
    trueNoPrereq: function () {
      const returnarray = []
      let i = 0
      const noprereq1 = this.modules.filter(m => m.prerequisite == null)
      for (i = 0; i < this.requiredModules.length; i++) {
        if (this.prereqData[i] == null) {
          returnarray.push(this.requiredModules[i])
        }
      }
      return returnarray
    }
  }
}
</script>

<style scoped>
</style>
