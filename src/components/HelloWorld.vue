<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <button @click="num++">{{num}}</button>
  <button @click="Add">{{sta.cou}}</button>
</template>

<script>
  import {ref, reactive, toRef, toRefs} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    item: Object
  },
  data() {
    return {
      count: 0
    }
  },
  setup (prop) {
    const num = ref(0)

    const sta = reactive({cou: 99})

    const Add = () => {
      sta.cou++
    }

    const n1 = toRefs(prop)
    // console.log(n1.item.value.counts

    return {
      num,
      sta,
      Add,
      n1
    }
  }
}
</script>
