<template>
  <div class="tree-structure">
    <Edge v-bind:modules='modules'/>
    <div id="outer-struct">
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in noprereq" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod'/>
                    </div>
                </li>
            </ul>
        </div>
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in level1k" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod'/>
                    </div>
                </li>
            </ul>
        </div>
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in level2k" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod'/>
                    </div>
                </li>
            </ul>
        </div>
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in level3k" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod'/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import TreeModule from './TreeModule.vue'
import Edge from './Edge.vue'

export default {
  name: 'Structure',
  components: {
    TreeModule,
    Edge
  },
  props: ['noprereq', 'level1k', 'level2k', 'level3k', 'level4k', 'modules']
}
</script>

<style scoped>
    .tree-structure {
    }
    #inner-struct ul{
        display: inline-flex;
    }
    #outer-struct ul{
    }
    .leaf-style {
        padding: 5px;
        position: relative;
    }
</style>
