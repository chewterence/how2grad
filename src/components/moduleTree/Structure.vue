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
                        <TreeModule v-bind:module='mod' />
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
        {{prereqData}}
        <br>
        {{requiredModules}}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
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
      prereqData: []
    }
  },
  methods: {
    loadPrereqData () {
      let i = 0
      for (i = 0; i < this.requiredModules.length; i++) {
        axios.get('https://api.nusmods.com/v2/2018-2019/modules/' + this.requiredModules[i] + '.json')
          .then(response => (this.prereqData.push(response.data.prereqTree)))
          .catch(err => console.log(err))
      }
    }
  },
  props: ['noprereq', 'level1k', 'level2k', 'level3k', 'level4k', 'requiredModules'],
  mounted () {
    this.loadPrereqData()
  }
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
