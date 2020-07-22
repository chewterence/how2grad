<template>
    <v-container fluid>
      <v-row>
        <v-col v-for="mod in unlinkedMods" v-bind:key="mod" justify="center">
          <v-hover>
            <template v-slot="{ hover }">
              <v-card class="mx-auto"
                min-width="150"
                max-width="300"
                default
                :elevation="hover ? 24 : 3"
                :color="hover ? hoverColour : defaultModColour"
              >
                <v-card-title class="headline pb-0 justify-center">{{mod}}</v-card-title>
                <v-card-text class="text-sm-subtitle-2">{{moduleData.get(mod).title}}</v-card-text>
                <!-- <v-icon>mdi-alert</v-icon> -->
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
// import SubTreeModule from './SubTreeModule.vue'

export default {
  name: 'SingleMods',
  components: {
    // SubTreeModule
  },
  data () {
    return {
      defaultModColour: 'grey lighten-2',
      hoverColour: 'blue lighten-3'
    }
  },
  computed: {
  },
  props: ['unlinkedMods', 'moduleData', 'missingMap']
}
</script>

<style scoped>
</style>
