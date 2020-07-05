<template>
    <div>
      <svg key="componentKey" class="svg" :class="strokeColour">
        <line v-bind:x1='this.x1' :y1='this.y1' :x2='this.x2' :y2='this.y2'></line>
      </svg>
      {{edge}}
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      v1: '',
      v2: '',
      componentKey: 0,
      strokeColour: this.edge[2]
    }
  },
  methods: {
    constructEdge (mod1, mod2) {
      let index1 = 0
      let index2 = 0
      this.v1 = mod1
      this.v2 = mod2
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
    },
    updateEdge () {
      // console.log('---(' + this.x1 + ',' + this.y1 + ')' + '(' + this.x2 + ',' + this.y2 + ')')
      this.constructEdge(this.v1, this.v2)
      this.forceRender()
    },
    forceRender () {
      this.strokeColour = this.edge[2]
      this.componentKey += 1
    }
    // ,
    // greenEdge () {
    //   this.strokeColour = 'greenEdge'
    // },
    // redEdge () {
    //   this.strokeColour = 'redEdge'
    // },
    // revertEdge () {
    //   this.strokeColour = 'defaultEdge'
    // }
  },
  props: ['edge'],
  mounted () {
    this.constructEdge(this.edge[0], this.edge[1])
  }
  // ,
  // computed: {
  //   strokeColour: function () {
  //     return this.edge[2]
  //   }
  // }
}
</script>

<style scoped>
   .svg {
        width:100%;
        height:100%;
        position: absolute;
        pointer-events: none;
        z-index: -100px;
    }
    .svg line {
        /* stroke:#000; */
        stroke-width:5px;
        position: absolute;
        z-index: -100px;
    }
    .img-overlay-wrap {
        position: absolute;
        z-index: -100px;
    }
    .img-overlay-wrap svg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -100px;
    }
    .defaultEdge {
      stroke: #000
    }
    .greenEdge {
      stroke: green
    }
    .redEdge {
      stroke: red
    }
</style>
