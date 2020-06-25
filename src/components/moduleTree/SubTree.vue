<template>
    <div>
      <SubTreeModule v-bind:moduleID='treeRoot' :treeData:='treeData' :modList='modList'/>
    </div>
</template>

<script>
import SubTreeModule from './SubTreeModule.vue'

export default {
  name: 'SubTree',
  components: {
    SubTreeModule
  },
  props: ['treeRoot', 'treeData', 'modulePrereqData', 'modList'],
  data () {
    return {
      stack: [],
      numHopsList: [],
      doneNodes: [],
      distanceMap: new Map()
    }
  },
  methods: {
    findRoots () {
      this.treeData.forEach(modCode => {
        if (this.modulePrereqData.get(modCode) === undefined) {
          const modNode = {
            modCode: modCode,
            numHops: 0,
            // x is a child of y means x is a prerequisite for y
            childrenList: []
          }
          this.stack.push(modNode)
          if (this.numHopsList[0] === undefined) {
            this.numHopsList.push([])
          }
          this.numHopsList[0].push(modNode)
        }
      })
    },
    genGraphDFS () {
      while (this.stack.length !== 0) {
        const currModNode = this.stack.pop()
        console.log(currModNode.modCode)
        console.log('children:')
        const tempChildList = []
        this.modulePrereqData.forEach((modPrereqs, modCode) => {
          if (!modCode.substr(-1).match(/\d/)) {
            modCode = modCode.match(/\w+\d\d\d\d/)[0]
          }
          if (modPrereqs.has(currModNode.modCode)) {
            const modNode = {
              modCode: modCode,
              numHops: currModNode.numHops + 1,
              childrenList: []
            }
            console.log(modNode.modCode)
            const numHops = modNode.numHops
            if (this.distanceMap.get(modCode) === undefined) {
              this.distanceMap.set(modCode, numHops)
            }
            if (numHops >= this.distanceMap.get(modCode)) {
              tempChildList.push(modNode)
              this.stack.push(modNode)
              currModNode.childrenList.push(modNode)
              this.distanceMap.set(modCode, numHops)
              while (this.numHopsList[numHops] === undefined) {
                this.numHopsList.push([])
              }
              this.numHopsList[numHops].push(modNode)
            }
          }
        })
        this.doneNodes.push(currModNode)
        console.log('done\n')
      }
    }
  },
  mounted () {
    this.findRoots()
    this.genGraphDFS()
  }
}
</script>

<style scoped>
 #outer-struct ul{
    }
</style>
