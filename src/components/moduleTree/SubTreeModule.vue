<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col ref='pos-moduleCode'>
        <v-hover>
          <template v-slot="{ hover }">
            <v-card class="mx-auto"
              min-width="125"
              max-width="300"
              default
              :elevation="hover || related ? 24 : 3"
              :color="hover || locked ? hoverColour : modColour"
              @click="toggleLockState"
              @mouseover="$emit('mouseover', moduleID)"
              @mouseleave="$emit('mouseleave', moduleID)"
              key="componentKey"
            >
              <v-card-title offset-lg12 class="headline pb-0 justify-center">{{moduleID}}</v-card-title>
              <v-card-text class="pt-0 text-sm-subtitle-2">{{moduleTitle}}</v-card-text>
              <v-btn icon v-if="warn" class="pa-0" @click="showMorePrereq">
                  <v-icon class="justify-center" color="orange">mdi-alert</v-icon>
              </v-btn>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'
// import axios from 'axios'

export default {
  name: 'SubTreeModule',
  components: {
  },
  data () {
    return {
      xthis: 0,
      ythis: 0,
      greenModColour: 'green lighten-2',
      redModColour: 'red lighten-2',
      defaultModColour: 'grey lighten-2',
      hoverColour: 'blue lighten-3',
      cachedColour: '',
      state: 'default',
      componentKey: 0,
      locked: false,
      frozen: false,
      related: false
    }
  },
  props: ['moduleID', 'nodeData', 'moduleData', 'warnMap'],
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
      this.state = newState
      const wtf = this.modColour
      if (!this.locked && !this.frozen) {
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
            this.cachedColour = this.redModColour
            return this.redModColour
          case 'green':
            this.cachedColour = this.greenModColour
            return this.greenModColour
          default:
            this.cachedColour = this.defaultModColour
            return this.defaultModColour
        }
      } else {
        return this.cachedColour
      }
    },

    showMorePrereq () {
      this.toggleLockState()
    }
  },
  computed: {
    moduleTitle: function () {
      return this.moduleData.get(this.moduleID).title
    },

    modColour: function () {
      return this.getColour()
    },

    warn: function () {
      return this.warnMap.get(this.moduleID)
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
</style>
