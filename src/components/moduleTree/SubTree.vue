<template>
    <div>
      <SubTreeModule v-bind:moduleID='treeRoot' :treeData:='treeData' :modList='modList'/>
    </div>
</template>

<script>
import SubTreeModule from './SubTreeModule.vue'
// var modNode = {
//   numHops = -1,
//   childrenList = []
// }
export default {
  name: 'SubTree',
  components: {
    SubTreeModule
  },
  props: ['treeRoot', 'treeData', 'moduleData', 'modList'],
  data () {
    return {
      // numHopsList = []
    }
  },
  methods: {
    // hopSplit (queue, numHops) {
    //   queue.forEach((value, valueAgain, set) => {
    //     this.moduleData.get(value).
    //   })
    // }
  },
  mounted () {
    // this.hopSplit(this.treeData, 0)
  }
}
</script>

<style scoped>
 #outer-struct ul{
    }
</style>
