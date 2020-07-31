<template>
    <v-hover>
        <template v-slot="{ hover }">
            <v-card class="mx-auto"
            min-width="200"
            max-width="300"
            default
            :elevation="hover ? 24 : 3"
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
      defaultModColour: 'grey lighten-2',
      hoverColour: 'blue lighten-3',
      warn: this.warnMap.get(this.moduleID)
    }
  },
  computed: {
  },
  props: ['moduleID', 'moduleData', 'warnMap']
}
</script>

<style scoped>
</style>
