<template>
    <div class="semester-box">
        <div class="semester-title">
          {{title}}
        </div>
        <AddModuleButton class="mx-1" v-on:addModule="addModule"/>
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
import AddModuleButton from '../components/AddModuleButton.vue'
import axios from 'axios'

export default {
  name: 'Semester',
  components: {
    Module,
    AddModuleButton
  },
  data () {
    return {
    }
  },
  methods: {
    minimizeSearch (value) {
      this.isHidden = value
    },
    addModule (value) {
      this.isHidden = false
      this.modules.push(value)
      this.$emit('addModule', value)
    },
    removeModule (value) {
      this.modules = this.modules.filter(mod => mod !== value)
      this.$emit('removeModule', value)
    }
  },
  props: ['title', 'modules', 'plannedModules'],
  created () {
    axios.get('https://api.nusmods.com/v2/2019-2020/moduleInfo.json')
      .then(response => (
        this.modules = response.data.filter(mod => this.plannedModules.includes(mod.moduleCode)))
      )
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
  .semester-title {
    font-size:26px;
    font-weight: bold;
    margin: 1px;
  }
  .semester-box {
    border-radius: 25px;
    width:400px;
    height:620px;
    background-color: rgb(114, 114, 114);
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
  #add-module-button {
    border-radius: 20px;
    font-size:18px;
    font-family: Avenir;
    font-weight: bold;
    color: rgb(0, 0, 0);
    border:1px solid #000;
    width: 99%;
    height: 10%;
    top: 82%;
  }
  #add-module-button:hover {
    border-radius: 20px;
    font-size:21px;
    font-family: Avenir;
    font-weight: bold;
    color: rgb(0, 0, 0);
    background: #dfdfdf;
    border:1px solid #000;
    width: 99%;
    height: 10%;
    top: 82%;
  }
</style>
