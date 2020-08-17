<template>
    <v-hover>
        <template v-slot="{ hover }">
            <v-card class="mx-auto"
            min-width="200"
            max-width="300"
            default
            :elevation="hover || inHighlightedSem ? 24 : 1"
            :color="hover ? hoverColour : defaultModColour"
            >
            <v-card-title class="headline pb-0 justify-center">{{moduleID}}</v-card-title>
            <v-card-text class="text-sm-subtitle-2">{{moduleData.get(moduleID).title}}</v-card-text>
            <v-row>
                <v-col class='pa-0'>
                <WarningButton v-if='warn' :msg='moduleData.get(moduleID).prerequisite'/>
                </v-col>
            </v-row>
            </v-card>
        </template>
    </v-hover>
</template>

<script>
import WarningButton from './WarningButton.vue'

export default {
  name: 'SingleMods',
  components: {
    WarningButton
  },
  data () {
    return {
      hoverColour: 'blue lighten-3',
      warn: this.warnMap.get(this.moduleID)
    }
  },
  computed: {
    defaultModColour: function () {
      if (this.viewSemColours) {
        let semColourArr= [['teal accent-3', 'teal accent-4'],
                           ['lime accent-3', 'lime accent-4'],
                           ['yellow accent-2', 'yellow accent-3'],
                           ['amber accent-3', 'amber accent-4']]

        for(let i = 0; i < this.modulePlan.length; i++) {
          for(let j = 0; j < this.modulePlan[i].length; j++) {
            if(this.modulePlan[i][j].includes(this.moduleID)) {
              return semColourArr[i][j]
            }
          }
        }
        return 'grey lighten-2'
      } else {
        return 'grey lighten-2'
      }
    }
  },
  props: ['moduleID', 'moduleData', 'modulePlan', 'warnMap', 'viewSemColours', 'inHighlightedSem']
}
</script>

<style scoped>
</style>
