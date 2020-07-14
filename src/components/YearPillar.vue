<template>
  <v-container>
    <Semester :title="'Year ' + title + ' ' + 'Sem 1'" :plannedModules='plannedModules'/>
    <!-- <v-card class="mb-5">
      <v-card-title class="headline justify-center">Year {{title}} Sem 1</v-card-title>
    </v-card> -->
    <Semester :title="'Year ' + title + ' ' + 'Sem 2'" :plannedModules='plannedModules'/>
    <Semester v-if="specialTerm1" :title="'Year ' + title + ' ' + 'Special Term 1'" :plannedModules='plannedModules'/>
    <Semester v-if="specialTerm2" :title="'Year ' + title + ' ' + 'Special Term 2'" :plannedModules='plannedModules'/>

    <v-row>
      <v-col>
        <v-btn @click="toggleST(1)" class="text-sm-subtitle-2">{{st1Message}}</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="toggleST(2)" class="text-sm-subtitle-2">{{st2Message}}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Semester from '../components/Semester.vue'

export default {
  name: 'YearPillar',
  components: {
    Semester
  },
  data () {
    return {
      specialTerm1: false,
      st1Message: 'Add Special Term 1',
      specialTerm2: false,
      st2Message: 'Add Special Term 2'
    }
  },
  methods: {
    toggleST (termToToggle) {
      switch (termToToggle) {
        case 1:
          this.specialTerm1 = !this.specialTerm1
          if (this.specialTerm1) {
            this.st1Message = 'Remove Special Term 1'
          } else {
            this.st1Message = 'Add Special Term 1'
          }
          break
        case 2:
          this.specialTerm2 = !this.specialTerm2
          if (this.specialTerm2) {
            this.st2Message = 'Remove Special Term 2'
          } else {
            this.st2Message = 'Add Special Term 2'
          }
          break
        default:
          console.log('INVALID ST NUMBER')
      }
    }
  },
  props: ['title', 'plannedModules']
}
</script>

<style scoped>

</style>
