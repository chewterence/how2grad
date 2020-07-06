<template>
  <div class='module-box'>
        <div class='moduleCode-text'>
            {{module.moduleCode}}
            <button v-on:click="addModule" id="add-button">
                + Add
            </button>
        </div>
        <div class='title-text'>
            {{module.title}}
        </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBoxModule',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    addModule (event) {
      this.$emit('addModule', this.module)
    }
  },
  props: ['module']
}
</script>

<style scoped>
  .moduleCode-text {
      font-weight: bold;
      font-size: 22px;
      color: rgb(0, 0, 0);
  }
  .title-text {
      font-size: 18px;
      color: rgb(0, 0, 0);
  }
  #add-button {
    border-radius: 100px;
    border:1px solid #000;
    background-color: rgb(139, 215, 113);
    width:100px;
    height:32px;
    font-size: 22px;
    float: right;
  }
  #add-button:hover {
    border-radius: 100px;
    border:1px solid #000;
    background-color: rgb(64, 255, 0);
    width:101px;
    height:33px;
    font-size: 23px;
    float: right;
    font-weight: bold;
  }
</style>
