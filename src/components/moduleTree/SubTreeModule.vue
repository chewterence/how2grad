<template>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col>
        <div
          class="pa-6 text-center grey lighten-2 rounded-lg"
          v-text="moduleID"
          ref='pos-moduleCode'
        >
        </div>
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
      ythis: 0
    }
  },
  props: ['moduleID', 'nodeData'],
  methods: {
    calcPosition () {
      // calculate middle coordinate of element for constructing edges

      this.xthis = (this.$refs['pos-moduleCode'].getBoundingClientRect().left + this.$refs['pos-moduleCode'].getBoundingClientRect().right) / 2.0

      this.ythis = (this.$refs['pos-moduleCode'].getBoundingClientRect().top + this.$refs['pos-moduleCode'].getBoundingClientRect().bottom) / 2.0
      Vue.prototype.$xcoordinates.push(this.xthis)
      Vue.prototype.$ycoordinates.push(this.ythis)
      Vue.prototype.$modcoordinates.push(this.moduleID)
    }
  },
  mounted () {
    Vue.nextTick().then(this.calcPosition())
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
