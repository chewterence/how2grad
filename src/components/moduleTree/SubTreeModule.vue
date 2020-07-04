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
          color="grey lighten 2"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{moduleID}}</v-list-item-title>
              <v-list-item-subtitle>{{moduleTitle}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
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
      moduleTitle: null
    }
  },
  props: ['moduleID', 'nodeData', 'moduleData'],
  methods: {
    calcPosition () {
      // calculate middle coordinate of element for constructing edges
      this.xthis = (this.$refs['pos-moduleCode'].getBoundingClientRect().left + this.$refs['pos-moduleCode'].getBoundingClientRect().right) / 2.0
      this.ythis = (this.$refs['pos-moduleCode'].getBoundingClientRect().top + this.$refs['pos-moduleCode'].getBoundingClientRect().bottom) / 2.0
      console.log(this.xthis + ', ' + this.ythis)
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
      this.ythis = (this.$refs['pos-moduleCode'].getBoundingClientRect().top + this.$refs['pos-moduleCode'].getBoundingClientRect().bottom) / 2.0
      Vue.prototype.$xcoordinates[index] = this.xthis
      Vue.prototype.$ycoordinates[index] = this.ythis
      console.log('updated: ' + this.xthis + ', ' + this.ythis)
    }
  },
  mounted () {
    if (this.moduleData.get(this.moduleID) === undefined) {
      this.moduleTitle = 'test'
    } else {
      this.moduleTitle = this.moduleData.get(this.moduleID).title
    }
    // console.log(this.moduleTitle)
    this.calcPosition()
    console.log('completed')
    // this.moduleTitle = this.moduleData.get(this.moduleID).title
  },
  updated: function () {
    this.updatePos()
    this.$emit('pos-updated')
  }
}
</script>

<style scoped>
  .module-box {
    border-radius: 20px;
    height: 100%;
    width: 200px;
    background: #D3D3D3;
    border:1px solid #000;
    padding: 0px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .moduleCode-text {
      font-weight: bold;
      font-size: 22px;
      color: rgb(0, 0, 0);
  }
  .title-text {
      font-size: 16px;
      color: rgb(0, 0, 0);
  }
</style>
