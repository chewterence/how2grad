<template>
  <div class="tree-structure">
    <svg id="svg">
        <line x1=506 y1=381 x2=1047 y2=671></line>
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
    #svg{
        /* background: rgb(169, 169, 169); */
        /* display: inline; */
        width:100%;
        height:100%;
        position: absolute;;
    }
    #svg line {
        stroke:#000;
        stroke-width:5px;
        position: absolute;
    }
    .img-overlay-wrap {
        position: relative;
    }
    .img-overlay-wrap svg {
        position: relative;
        top: 0;
        left: 0;
    }
</style>
