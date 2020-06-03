<template>
  <div class='module-box'>
        <div class='moduleCode-text'>
            {{module.moduleCode}}
        </div>
        <div class='title-text'>
            {{module.title}}
        </div>
        <div class='prerequisite'>
            <!-- {{prerequisite}} -->
        </div>
  </div>
</template>

<script>
export default {
  name: 'TreeModule',
  components: {
  },
  data () {
    return {
      prerequisite: null
    }
  },
  props: ['module'],
  created (module) {
    // this is to filter out the other words leaving only the module
    this.prerequisite = this.module.prerequisite.split(' ').filter(str => str.includes('CS' | 'ES' | 'MA'))
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
    padding: 3px;
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
