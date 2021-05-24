<template>
  <HelloWorld msg="Hello" :item="obj"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      obj: {
        count: 1000
      }
    }
  }
}
</script>
