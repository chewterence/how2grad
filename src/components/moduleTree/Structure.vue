<template>
  <div class="tree-structure">
    <Edges v-bind:modules='modules'/>
    <div id="outer-struct">
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in noprereq" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod' />
                    </div>
                </li>
            </ul>
        </div>
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in level1k" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod' />
                    </div>
                </li>
            </ul>
        </div>
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in level2k" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod' v-on:returningCoordinates="receiveCoordinates"/>
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
      <!-- <div>
      {{$xcoordinates}}
      </div>
      <div>
      {{$ycoordinates}}
      </div>
      <div>
      {{$modcoordinates}}
      </div> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TreeModule from './TreeModule.vue'
import Edges from './Edges.vue'

Vue.prototype.$xcoordinates = []
Vue.prototype.$ycoordinates = []
Vue.prototype.$modcoordinates = []

export default {
  name: 'Structure',
  components: {
    TreeModule,
    Edges
  },
  data () {
    return {
      xcoordinates: [],
      ycoordinates: [],
      modcoordinates: []
    }
  },
  methods: {
    receiveCoordinates (x, y, mod) {
      this.xcoordinates = x
      this.ycoordinates = y
      this.modcoordinates = mod
    }
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
