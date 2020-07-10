<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col ref='pos-moduleCode'>
        <v-hover>
          <template v-slot="{ hover }">
            <v-card class="mx-auto"
              min-width="150"
              max-width="300"
              default
              :elevation="hover || related ? 24 : 3"
              :color="hover || locked ? 'blue lighten-3' : modColour"
              @click="toggleLockState"
              @mouseover="$emit('mouseover', moduleID)"
              @mouseleave="$emit('mouseleave', moduleID)"
              key="componentKey"
            >
              <v-card-title class="headline pb-0 justify-center">{{moduleID}}</v-card-title>
              <v-card-text class="text-sm-subtitle-1">{{moduleTitle}}</v-card-text>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
// import axios from 'axios'

export default {
  name: 'SubTreeModule',
  components: {
  },
  data () {
    return {
      xthis: 0,
      ythis: 0,
      greenMod: 'green lighten-2',
      redMod: 'red lighten-2',
      defaultMod: 'grey lighten-2',
      state: 'default',
      componentKey: 0,
      locked: false,
      cachedColour: '',
      frozen: false,
      related: false
    }
  },
  props: ['moduleID', 'nodeData', 'moduleData'],
  methods: {
    calcPosition () {
      // calculate middle coordinate of element for constructing edges
      this.xthis = (this.$refs['pos-moduleCode'].getBoundingClientRect().left + this.$refs['pos-moduleCode'].getBoundingClientRect().right) / 2.0
      this.ythis = (this.$refs['pos-moduleCode'].getBoundingClientRect().top + this.$refs['pos-moduleCode'].getBoundingClientRect().bottom) / 2.0 + window.scrollY
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

    toggleLockState () {
      this.$emit('lock-toggled', this.moduleID)
    },

    changeColour (newState) {
      if (!this.locked && !this.frozen) {
        this.state = newState
        this.forceRender()
      }
    },

    forceRender () {
      this.componentKey += 1
    },

    getColour () {
      if (!this.frozen) {
        switch (this.state) {
          case 'red':
            this.cachedColour = this.redMod
            return this.redMod
          case 'green':
            this.cachedColour = this.greenMod
            return this.greenMod
          default:
            this.cachedColour = this.defaultMod
            return this.defaultMod
        }
      } else {
        return this.cachedColour
      }
    }
  },
  computed: {
    moduleTitle: function () {
      return this.moduleData.get(this.moduleID).title
    },

    modColour: function () {
      return this.getColour()
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
  /* .defaultClass {
    background: rgb(211, 211, 211);
  }

  .hoverClass {
    background: rgb(171, 210, 223);
  } */
</style>
