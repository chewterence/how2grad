<template>
  <div class='module-box'>
        <div class='moduleCode-text'>
            {{module.moduleCode}}
        </div>
        <button v-on:click="removeModule" class="remove-button">
          x
        </button>
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
    removeModule (event) {
      this.$emit('removeModule', this.module)
    }
  },
  props: ['module']
}
</script>

<style scoped>
  .module-box {
    border-radius: 20px;
    height: 10%;
    width: 390px;
    background: #dedede;
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
  .remove-button {
    border-radius: 100px;
    border:1px solid #000;
    background-color: rgb(255, 143, 143);
    width:28px;
    height:28px;
    font-size: 22px;
    font-weight: bold;
    float: right;
  }
</style>
