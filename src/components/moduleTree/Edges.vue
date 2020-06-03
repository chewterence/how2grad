<template>
    <div>
        <!-- <ul style="list-style: none"> -->
                <!-- <li v-for="mod in edges" v-bind:key="mod.moduleCode"> -->
                    <svg id="svg">
                        <line x1=506 y1=381 x2=825 y2=671></line>
                    </svg>
                <!-- </li> -->
            <!-- </ul> -->
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
    }
  },
  methods: {
    constructEdge (mod1, mod2) {
      let index1 = 0
      let index2 = 0
      for (index1 = 0; index1 < Vue.prototype.$modcoordinates.length; index1++) {
        if (Vue.prototype.$modcoordinates[index1] === mod1) {
          break
        }
      }
      for (index2 = 0; index2 < Vue.prototype.$modcoordinates.length; index2++) {
        if (Vue.prototype.$modcoordinates[index2] === mod2) {
          break
        }
      }
      this.x1 = Vue.prototype.$xcoordinates[index1]
      this.y1 = Vue.prototype.$ycoordinates[index1]
      this.x2 = Vue.prototype.$xcoordinates[index2]
      this.y2 = Vue.prototype.$ycoordinates[index2]
    }
  },
  props: ['modules'],
  mounted () {
    this.constructEdge('CS1010', 'CS2103')
  }
}
</script>

<style scoped>
   #svg {
        width:100%;
        height:100%;
        position: absolute;
        pointer-events: none;
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
