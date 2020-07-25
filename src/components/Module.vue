<template>
  <div class='module-box'>
        <button v-on:click="removeModule" id="remove-button">
          x
        </button>
        <div class='moduleCode-text'>
            {{module.moduleCode}}
        </div>
        <div class='title-text'>
            {{module.title}}
        </div>
  </div>
</template>

<script>
export default {
  name: 'Module',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    removeModule () {
      this.$emit('removeModule', this.module)
    }
  },
  props: ['module']
}
</script>

<style scoped>
  .module-box {
    border-radius: 20px;
    /* height: 10%; */
    width: 380px;
    padding: 5px;
    background: #d8d8d8;
    border:1px solid #000;
  }
  .moduleCode-text {
      font-weight: bold;
      font-size: 22px;
      color: rgb(0, 0, 0);
      padding-left: 10px
  }
  .title-text {
      font-size: 18px;
      color: rgb(0, 0, 0);
      padding-left: 10px
  }
  #remove-button {
    border-radius: 50px;
    border:1px solid #000;
    background-color: rgb(255, 126, 126);
    width:26px;
    height:26px;
    font-size: 20px;
    font-weight: bold;
    float: right;
  }
  #remove-button:hover {
    border-radius: 50px;
    border:1px solid #000;
    background-color: rgb(255, 0, 0);
    width:27px;
    height:27px;
    font-size: 21px;
    font-weight: bold;
    float: right;
  }
</style>
