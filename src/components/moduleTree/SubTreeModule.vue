<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col>
        <div
          class="pa-6 text-center grey lighten-2 rounded-lg"
          v-text="moduleID"
        ></div>
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
      prerequisite: [],
      or: [],
      and: [],
      xthis: 0,
      ythis: 0,
      prereqTree: -1
    }
  },
  props: ['moduleID', 'treeData', 'modList'],
  methods: {
    // calcPosition () {
    //   // calculate middle coordinate of element for constructing edges
    //   this.xthis = this.$refs['pos-moduleCode'].getBoundingClientRect().x + 100
    //   this.ythis = this.$refs['pos-moduleCode'].getBoundingClientRect().y
    //   Vue.prototype.$xcoordinates.push(this.xthis)
    //   Vue.prototype.$ycoordinates.push(this.ythis)
    //   Vue.prototype.$modcoordinates.push(this.module.moduleCode)
    // },
    // processpreq () {
    //   let temp = []
    //   // FILTER 1: to filter out the other words leaving only the module
    //   temp = this.module.prerequisite.split(' ').filter(str => str.includes('CS' | 'ES' | 'MA'))
    //   // FILTER 2: to fIlter out unwanted characters like brackets and stuff
    //   for (let i = 0; i < temp.length; i++) {
    //     temp[i] = temp[i].replace(/[{()}]/g, '')
    //   }
    //   // FILTER 3: to filter out the modules that is not included in the list of modules taken
    //   for (let i = 0; i < temp.length; i++) {
    //     if (this.modlist.includes(temp[i])) {
    //       this.prerequisite.push(temp[i])
    //     }
    //   }
    // }
  },
  created (module) {
    // this.processpreq()
  },
  mounted () {
    // this.calcPosition()
  }
}
</script>

<style scoped>
  /* .module-box {
    border-radius: 20px;
    height: 10%;
    width: 200px;
    background: #94bbff;
    border:1px solid #000;
    padding: 5px;
  }
  .moduleCode-text {
      font-weight: bold;
      font-size: 18px;
      color: rgb(0, 0, 0);
  }
  .title-text {
      font-size: 16px;
      color: rgb(0, 0, 0);
  } */
</style>
