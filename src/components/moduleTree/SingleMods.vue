<template>
    <v-container fluid>
      <v-row>
        <v-col v-for="mod in unlinkedMods" v-bind:key="mod" justify="center">
          <StandaloneModule :moduleID='mod' :moduleData='moduleData' :modulePlan="modulePlan" :warnMap='warnMap' :viewSemColours="viewSemColours"/>
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
  computed: {
  },
  props: ['unlinkedMods', 'moduleData', 'modulePlan', 'warnMap', 'viewSemColours']
}
</script>

<style scoped>
</style>
