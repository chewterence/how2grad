<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col ref='pos-moduleCode'>
        <!-- <div
          class="pa-6 text-center grey lighten-2 rounded-lg"
          v-text="moduleID"
          ref='pos-moduleCode'
        > -->
        <v-card class="mx-auto"
          min-width="150"
          max-width="300"
          default
          @mouseover="hover = true"
          @mouseleave="hover = false"
          :class="{ active: hover}"
        >
          <v-card-title class="headline pb-0 justify-center">{{moduleID}}</v-card-title>
          <v-card-text class="text-sm-subtitle-1">{{moduleTitle}}</v-card-text>
          <!-- <v-card-text class="text-sm-subtitle-1">{{this.xthis}} , {{this.ythis}}</v-card-text> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
// import axios from 'axios'

export default {
  name: 'TreeModule',
  components: {
  },
  data () {
    return {
      xthis: 0,
      ythis: 0,
      // moduleTitle: null,
      hover: false
    }
  },
  props: ['moduleID', 'nodeData', 'moduleData'],
  methods: {
    calcPosition () {
      // calculate middle coordinate of element for constructing edges
      this.xthis = (this.$refs['pos-moduleCode'].getBoundingClientRect().left + this.$refs['pos-moduleCode'].getBoundingClientRect().right) / 2.0
      this.ythis = (this.$refs['pos-moduleCode'].getBoundingClientRect().top + this.$refs['pos-moduleCode'].getBoundingClientRect().bottom) / 2.0 + window.scrollY
      // console.log(this.xthis + ', ' + this.ythis)
      Vue.prototype.$xcoordinates.push(this.xthis)
      Vue.prototype.$ycoordinates.push(this.ythis)
      Vue.prototype.$modcoordinates.push(this.moduleID)
    },

    updatePos () {
      let index

      for (let i = 0; i < Vue.prototype.$modcoordinates.length; i++) {
        if (this.moduleID === Vue.prototype.$modcoordinates[i]) {
          index = i
          break
        }
      }

      this.xthis = (this.$refs['pos-moduleCode'].getBoundingClientRect().left + this.$refs['pos-moduleCode'].getBoundingClientRect().right) / 2.0
      this.ythis = (this.$refs['pos-moduleCode'].getBoundingClientRect().top + this.$refs['pos-moduleCode'].getBoundingClientRect().bottom) / 2.0 + window.scrollY
      Vue.prototype.$xcoordinates[index] = this.xthis
      Vue.prototype.$ycoordinates[index] = this.ythis
    },

    getOffsetTop (elem) {
      let offsetTop = 0
      do {
        if (!isNaN(elem.offsetTop)) {
          offsetTop += elem.offsetTop
        }
        elem = elem.offsetParent
      } while (elem !== null)
      return offsetTop
    }
  },
  computed: {
    moduleTitle: function () {
      return this.moduleData.get(this.moduleID).title
    }
  },
  mounted () {
    this.calcPosition()
  },
  updated: function () {
    this.updatePos()
    this.$emit('pos-updated')
  }
}
</script>

<style scoped>
  .active {
    background: brown
  }
</style>
