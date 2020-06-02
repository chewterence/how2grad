<template>
  <div class='module-box'>
        <div class='moduleCode-text'>
            {{module.moduleCode}}
        </div>
        <div class='title-text'>
            {{module.title}}
        </div>
  </div>
</template>

<script>
export default {
  name: 'Module',
  components: {
  },
  data () {
    return {
      module: {
        moduleCode: 'CS2030',
        title: 'Programming Methodology II',
        description: 'This module is a follow up to CS1010. It explores two modern programming paradigms, object-oriented programming and functional programming. Through a series of integrated assignments, students will learn to develop medium-scale software programs in the order of thousands of lines of code and tens of classes using objectoriented design principles and advanced programming constructs available in the two paradigms. Topics include\nobjects and classes, composition, association, inheritance, interface, polymorphism, abstract classes, dynamic binding, lambda expression, effect-free programming, first class functions, closures, continuations, monad, etc.'
      }
    }
  }
//   props: ['module']
}
</script>

<style scoped>
  .module-box {
    border-radius: 20px;
    height: 10%;
    width: 99%;
    background: #a5a5a5;
    border:1px solid #000;
  }
  .moduleCode-text {
      font-weight: bold;
      font-size: 22px;
      color: rgb(0, 0, 0);
  }
  .title-text {
      font-size: 18px;
      color: rgb(0, 0, 0);
  }
</style>
