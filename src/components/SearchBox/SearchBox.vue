<template>
  <div class="search-container">
      <div id="search-box">
        <div class="input-container">
          <input type="text" placeholder="Search for Module" v-model="NameSearchString" />
            <button v-on:click="onMinimizeClick" class="minimize-button">
              x
            </button>
        </div>
        <perfect-scrollbar>
        <ul style="list-style: none;">
          <li class="photo" v-for="mod in filteredmodules" v-bind:key="mod.moduleCode">
            <p style="text-align: left; font-size:18px; font-family: Avenir;">
              <SearchBoxModule v-bind:module='mod' v-on:addModule="onMinimizeClick"/>
            </p>
            </li>
        </ul>
        </perfect-scrollbar>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import SearchBoxModule from './SearchBoxModule.vue'

Vue.use(PerfectScrollbar)

export default {
  name: 'ModuleSearchBox',
  el: '#search-box',
  components: {
    SearchBoxModule
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
    onMinimizeClick (event) {
      this.$emit('minimize')
    }
  },
  created () {
    axios.get('https://api.nusmods.com/v2/2019-2020/moduleInfo.json')
      .then(response => (this.modules = response.data))
      .catch(err => console.log(err))
  },
  mounted () {
    axios.get('https://api.nusmods.com/v2/2019-2020/moduleInfo.json')
      .then(response => (this.modules = response.data))
      .catch(err => console.log(err))
  }
}
</script>

<style>
  .input-container {
    border-radius: 25px;
    background: #ffffff;
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

  .search-container {
    border-radius: 25px;
    width:500px;
    height:100%;
    background-color: rgb(255, 209, 152);
    border:1px solid #000;
    padding: 5px;
    color: rgb(0, 0, 0);
  }
  .minimize-button {
    border-radius: 100px;
    border:1px solid #000;
    background-color: rgb(255, 143, 143);
    width:28px;
    height:28px;
    font-size: 22px;
    font-weight: bold;
  }
  .ps {
    height: 400px;
  }
</style>
