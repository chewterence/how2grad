<template>
    <div class="semester-box">
        <div class="semester-title">
          Year 1 Semester 1
        </div>
        <div class="module-search" v-if="isHidden">
          <SearchBox v-on:minimize="isHidden = false" v-on:addModule="addModule"/>
        </div>
        <button class="add-module-button" v-if="!isHidden" v-on:click="isHidden = true">
          <p> + Add Module </p>
        </button>
        <ul style="list-style: none;">
          <li class="module-list" v-for="mod in modules" v-bind:key="mod.moduleCode">
            <div class="module-element">
              <Module v-bind:module='mod' v-on:removeModule="removeModule"/>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
import Module from '../components/Module.vue'
import SearchBox from '../components/SearchBox/SearchBox.vue'

export default {
  name: 'Semester',
  components: {
    Module,
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
    },
    addModule (value) {
      this.isHidden = false
      this.modules.push(value)
    },
    removeModule (value) {
      this.modules = this.modules.filter(mod => mod !== value)
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
    width:400px;
    height:500px;
    background-color: rgb(102, 150, 255);
    border:1px solid #000;
    padding: 5px;
    color: rgb(0, 0, 0);
  }
  .module-element {
    /* position: relative; */
    float: right;
    padding: 2px;
    text-align: left;
  }
  .add-module-button {
    border-radius: 20px;
    font-size:18px;
    font-family: Avenir;
    font-weight: bold;
    color: rgb(0, 0, 0);
    border:1px solid #000;
    width: 99%;
    position: relative;
    top: 82%;
  }
</style>
