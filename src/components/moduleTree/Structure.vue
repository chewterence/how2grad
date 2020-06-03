<template>
  <div class="tree-structure">
    <svg id="svg">
        <line x1=1248 y1=120 x2=158 y2=368.875></line>
    </svg>
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

export default {
  name: 'Structure',
  components: {
    TreeModule
  },
  props: ['noprereq', 'level1k', 'level2k', 'level3k', 'level4k']
}
</script>

<style scoped>
    .tree-structure {
        position: relative;
    }
    #inner-struct ul{
        display: inline-flex;
        position: relative;
    }
    #outer-struct ul{
        /* display: inline-flex; */
    }
    .leaf-style {
        padding: 5px;
    }
    #svg {
        background: rgb(169, 169, 169);
        /* display:block; */
        width:100%;
        height:100%;
        position:relative;
    }
    #svg line {
        stroke:#000;
        stroke-width:5px;
        position: relative;
    }
</style>
