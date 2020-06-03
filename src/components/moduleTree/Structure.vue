<template>
  <div>
    <!-- <div id="outer-struct"> -->
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in noprereq" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod'/>
                    </div>
                </li>
            </ul>
        </div>
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in level1k" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod'/>
                    </div>
                </li>
            </ul>
        </div>
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in level2k" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod'/>
                    </div>
                </li>
            </ul>
        </div>
        <div id="inner-struct">
            <ul style="list-style: none">
                <li v-for="mod in level3k" v-bind:key="mod.moduleCode">
                    <div class="leaf-style">
                        <TreeModule v-bind:module='mod'/>
                    </div>
                </li>
            </ul>
        </div>
    <!-- </div> -->
  </div>
</template>

<script>
import TreeModule from './TreeModule.vue'

export default {
  name: 'Structure',
  components: {
    TreeModule
  },
  props: ['noprereq', 'level1k', 'level2k', 'level3k', 'level4k']
}
</script>

<style scoped>
    #inner-struct {
        display: inline-flex;
    }
    /* #outer-struct {
    } */
    .leaf-style {
        padding: 5px;
    }
</style>
