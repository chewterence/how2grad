<template>
  <div class="moduleinfo">
      <div id="app-instasearch">
        <div class="input-container">
          <input type="text" placeholder="Search for Modules by Module Code or Name..." v-model="NameSearchString" />
        </div>
          <ul style="list-style: none;">
            <li v-for="mod in filteredmodules" v-bind:key="mod.moduleCode">
              <p style="text-align: left; font-size:25px; font-family: Avenir;">
                {{mod.moduleCode + " " + mod.title}}
              </p>
              <p style="text-align: left;">
                {{mod.description}}
              </p>
              <p style="text-align: left;">
                {{'Prerequisite: ' + mod.prerequisite}}
              </p>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
// Live search bar credits from https://medium.com/better-programming/instant-search-with-vue-js-and-axios-5b78a3a59f01
import axios from 'axios'

export default {
  name: 'ModuleInfo',
  el: '#app-instasearch',
  components: {
  },
  data () {
    return {
      NameSearchString: '',
      modules: null
    }
  },
  computed: {
    filteredmodules: function () {
      let mod = this.modules
      const NameSearchString = this.NameSearchString
      if (!NameSearchString) {
        return mod
      }
      const SearchString = NameSearchString.trim().toLowerCase()
      mod = mod.filter(function (item) {
        if ((item.title.toLowerCase().indexOf(NameSearchString) !== -1) || (item.moduleCode.toLowerCase().indexOf(NameSearchString) !== -1)) {
          return item
        }
      })
      return mod
    }
  },
  methods: {
  },
  created () {
    axios.get('https://api.nusmods.com/v2/2018-2019/moduleInfo.json')
      .then(response => (this.modules = response.data))
      .catch(err => console.log(err))
      // .slice limits the display to 20 so it wont lag so much
  }
}
</script>

<style scoped>
  .input-container {
    border-radius: 25px;
    background: #c1c1c1;
    padding: 10px;
    text-align: left;
  }

  .input-container input {
    border: none;
    background: transparent;
    color: rgb(58, 58, 58);
    padding: 6px 10px;
    font-size: 22px;
    text-align: left;
    width: 90%;
  }

  ::placeholder {
    color: #545454;
    opacity: 1;
    text-align: left
  }
</style>
