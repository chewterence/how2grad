<template>
    <div class="semester-box">
        <div class="semester-title">
          Year 1 Semester 1
        </div>
        <div class="module-search" v-if="isHidden">
          <SearchBox v-on:minimize="isHidden = false"/>
        </div>
        <div class="module-style">
          <!-- <Module /> -->
        </div>
        <button type="button" name="addModule" formtarget="_self" class="add-module-button" v-if="!isHidden" v-on:click="isHidden = true">
          <p> + Add Module </p>
        </button>
    </div>
</template>

<script>
// import Module from '../components/Module.vue'
import SearchBox from '../components/SearchBox/SearchBox.vue'

export default {
  name: 'Semester',
  components: {
    // Module,
    SearchBox
  },
  data () {
    return {
      modules: [],
      isHidden: false
    }
  },
  methods: {
    minimizeSearch (value) {
      this.isHidden = value
    }
  }
}
</script>

<style scoped>
  .semester-title {
    font-size:28px;
    font-weight: bold;
  }
  .semester-box {
    border-radius: 25px;
    width:100%;
    height:100%;
    background-color: rgb(102, 150, 255);
    border:1px solid #000;
    padding: 5px;
    color: rgb(0, 0, 0);
  }
  .module-style {
    padding: 5px;
  }
  .module-search {
    padding: 5px;
  }
  .add-module-button {
    border-radius: 20px;
    font-size:18px;
    font-family: Avenir;
    color: rgb(0, 0, 0);
    width: 99%;
    position: relative;
    top: 82%;
    /* padding: 0%; */
    /* height: 50px; */
  }
</style>
