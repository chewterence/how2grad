<template>
    <div>
        <!-- {{}} -->
        <svg id="svg">
            <line x1="this.x1" y1=381 x2=1047 y2=671></line>
        </svg>
    </div>
</template>

<script>
export default {
  data () {
    return {
      x1: 506,
      y1: 381,
      x2: 825,
      y2: 671
    }
  },
  props: ['modules']
}
</script>

<style scoped>
   #svg {
        width:100%;
        height:100%;
        position: absolute;
        pointer-events: none;
    }
    #svg line {
        stroke:#000;
        stroke-width:5px;
        position: absolute;
    }
    .img-overlay-wrap {
        position: relative;
    }
    .img-overlay-wrap svg {
        position: relative;
        top: 0;
        left: 0;
    }
</style>
