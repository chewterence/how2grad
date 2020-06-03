<template>
  <div class='module-box' ref='pos-box'>
        <div class='moduleCode-text'>
            {{module.moduleCode}}
        </div>
        <div class='title-text' ref='pos-moduleCode'>
            {{module.title}}
        </div>
        <div class='prerequisite'>
            <!-- {{prerequisite}} -->
        </div>
        <div class='coordinates'>
          {{'('+xthis + ', ' + ythis+')'}}
        </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'TreeModule',
  components: {
  },
  data () {
    return {
      prerequisite: null,
      xthis: 0,
      ythis: 0
    }
  },
  props: ['module'],
  methods: {
    calcPosition () {
      // calculate middle coordinate of element for constructing edges
      this.xthis = this.$refs['pos-moduleCode'].getBoundingClientRect().x + 100
      this.ythis = this.$refs['pos-moduleCode'].getBoundingClientRect().y
      // Vue.prototype.$coordinates.append('hello')
      Vue.prototype.$xcoordinates.push(this.xthis)
      Vue.prototype.$ycoordinates.push(this.ythis)
      Vue.prototype.$modcoordinates.push(this.module.moduleCode)
    },
    returnCoordinates () {
      // this passes information back to Structure.vue
      this.$emit('returningCoordinates', this.xthis, this.ythis, this.module.moduleCode)
    }
  },
  created (module) {
    // this is to filter out the other words leaving only the module
    this.prerequisite = this.module.prerequisite.split(' ').filter(str => str.includes('CS' | 'ES' | 'MA'))
    // this.prerequisite = this.module.prerequisite
    // .filter(str => str.includes('CS' | 'ES' | 'MA'))
  },
  mounted () {
    this.calcPosition()
    this.returnCoordinates()
  }
}
</script>

<style scoped>
  .module-box {
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
  }
</style>
