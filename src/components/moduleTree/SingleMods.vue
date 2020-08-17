<template>
    <v-container fluid>
      <v-row>
        <v-col v-for="mod in unlinkedMods" v-bind:key="mod" justify="center">
          <StandaloneModule :moduleID='mod' :moduleData='moduleData' :modulePlan="modulePlan" :warnMap='warnMap' :viewSemColours="viewSemColours" :inHighlightedSem="checkHighlighted(mod)"/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import StandaloneModule from './StandaloneModule.vue'

export default {
  name: 'SingleMods',
  components: {
    StandaloneModule
  },
  data () {
    return {
      defaultModColour: 'grey lighten-2',
      hoverColour: 'blue lighten-3',
    }
  },
  methods: {
    checkHighlighted (modCode) {
      if (this.highlightedSem[0] != -1 && this.highlightedSem[1] != -1) {
        return this.modulePlan[this.highlightedSem[0]][this.highlightedSem[1]].includes(modCode)
      } else {
        return false
      }
    }
  },
  props: ['unlinkedMods', 'moduleData', 'modulePlan', 'warnMap', 'viewSemColours', 'highlightedSem']
}
</script>

<style scoped>
</style>
