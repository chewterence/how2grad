<template>
    <v-container fluid>
      <v-row class="subTreeModules" justify="center" my-5 v-for="(hopList, hopIndex) in numHopsList" v-bind:key="hopIndex">
        <v-col v-for="mod in hopList" v-bind:key="mod.modCode">
          <SubTreeModule v-if="numHopsList.length > 0" v-bind:moduleID='mod.modCode' :nodeData:='mod'/>
        </v-col>
      </v-row>
      <div v-for="edge in edgeList" v-bind:key="edge.index">
          <Edges v-if="numHopsList.length > 0" v-bind:edge='edge'/>
      </div>
    </v-container>
</template>

<script>
import SubTreeModule from './SubTreeModule.vue'
import Edges from './Edges.vue'

export default {
  name: 'SubTree',
  components: {
    SubTreeModule,
    Edges
  },
  props: ['treeRoot', 'treeData', 'modulePrereqData', 'modList'],
  data () {
    return {
      stack: [],
      numHopsList: [],
      doneNodes: [],
      distanceMap: new Map(),
      edgeList: []
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
        const tempChildList = []
        // iterate through prereqData to find mods that require currModNode as a prereq
        this.modulePrereqData.forEach((modPrereqs, modCode) => {
          // remove modifiers
          if (!modCode.substr(-1).match(/\d/)) {
            modCode = modCode.match(/\w+\d\d\d\d/)[0]
          }
          if (modPrereqs.has(currModNode.modCode)) {
            // create new child node. x is a child of y means y is a prereq for x
            const modNode = {
              modCode: modCode,
              numHops: currModNode.numHops + 1,
              childrenList: []
            }
            this.edgeList.push([modCode, currModNode.modCode])
            const numHops = modNode.numHops
            // check if child has been visited before
            if (this.distanceMap.get(modCode) === undefined) {
              this.distanceMap.set(modCode, numHops)
              this.stack.push(modNode)
              tempChildList.push(modNode)
              currModNode.childrenList.push(modNode)
              while (this.numHopsList[numHops] === undefined) {
                this.numHopsList.push([])
              }
              this.numHopsList[numHops].push(modNode)
              // if visited before, is current distance greater than previous distance
            } else {
              currModNode.childrenList.push(modNode)
              if (numHops >= this.distanceMap.get(modCode)) {
                this.stack.forEach(mod => {
                  if (mod.modCode === modCode) {
                    mod.numHops = numHops
                  }
                })
                const oldDList = this.numHopsList[this.distanceMap.get(modCode)]
                const index = oldDList.indexOf(oldDList.find(mod => mod.modCode === modCode))
                this.numHopsList[this.distanceMap.get(modCode)].splice(index, 1)
                this.distanceMap.set(modCode, numHops)
                while (this.numHopsList[numHops] === undefined) {
                  this.numHopsList.push([])
                }
                this.numHopsList[numHops].push(modNode)
              }
            }
          }
        })
        this.doneNodes.push(currModNode)
      }
    },
    numHopsListOrdering () {
      let upperList = []
      let lowerList = []
      for (let hop = 1; hop < this.numHopsList.length; hop++) {
        upperList = this.numHopsList[hop]
        lowerList = this.numHopsList[hop - 1]
        let swapIndex = 0
        for (let LIndex = 0; LIndex < lowerList.length; LIndex++) {
          // bottom mod
          for (let UIndex = 0; UIndex < upperList.length; UIndex++) {
            // upper mod
            if (lowerList[LIndex].childrenList.includes(upperList[UIndex].modCode)) {
              swapIndex++
            } else if (swapIndex !== UIndex) {
              const temp = upperList[swapIndex]
              upperList[swapIndex] = upperList[UIndex]
              upperList[UIndex] = temp
            }
          }
        }
      }
    },
    flipNumHopsList () {
      const temp = []
      while (this.numHopsList.length > 0) {
        temp.push(this.numHopsList.pop())
      }
      this.numHopsList = temp
    }
  },
  mounted () {
    this.findRoots()
    this.genGraphDFS()
    this.numHopsListOrdering()
    this.flipNumHopsList()
  }
}
</script>

<style scoped>
 .subTreeModules{
   z-index: 2;
   position: relative
 }
</style>
