<template>
  <div class="moduleinfo">
    <h1>This page is to search for module information (Search bar goes here)</h1>
      <div id="app-instasearch">
        <div class="input-container">
          <input type="text" placeholder="Type a module name" v-model="authorNameSearchString" />
        </div>
        <ul>
          <li class="photo" v-for="mod in filteredmodules" v-bind:key="mod.moduleCode">
            <span class="author">{{ mod.title }}</span>
          </li>
        </ul>
      </div>
    <!-- <div>
      <Modules v-bind:modules="modules"/>
    </div> -->
  </div>
</template>

<script>
// Search bar credits https://medium.com/better-programming/instant-search-with-vue-js-and-axios-5b78a3a59f01
import axios from 'axios'
import Modules from '../components/Modules.vue'

export default {
  name: 'app',
  el: '#app-instasearch',
  components: {
    // Modules
  },
  data () {
    return {
      authorNameSearchString: '',
      modules: null
    }
  },
  computed: {
    filteredmodules: function () {
      let mod = this.modules
      const authorNameSearchString = this.authorNameSearchString
      if (!authorNameSearchString) {
        return mod
      }
      const SearchString = authorNameSearchString.trim().toLowerCase()
      mod = mod.filter(function (item) {
        if (item.title.toLowerCase().indexOf(authorNameSearchString) !== -1) {
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
  },
  mounted () {
    axios.get('https://api.nusmods.com/v2/2018-2019/moduleInfo.json')
      .then(response => (this.modules = response.data))
      .catch(err => console.log(err))
  }
}
</script>

<style>
  .input-container {
    border-radius: 5px;
    background: #677482;
    padding: 10px;
  }

  .input-container input {
    border: none;
    background: transparent;
    color: white;
    padding: 6px 50px;
    font-size: 18px;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #a6b0ba;
    opacity: 1; /* Firefox */
  }
</style>
