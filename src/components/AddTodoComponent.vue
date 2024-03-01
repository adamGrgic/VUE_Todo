<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore()
console.log('addTodoButtonComponent');
function doAThing() {
    console.log('doing a store thing');
    console.log('count before increment');
    console.log(store.count);
    store.increment()
    console.log('count after increment');
    console.log(store.count);
    console.log('double count');
    console.log(store.doubleCount);
}

const { name, doubleCount } = store
name // will always be "Eduardo"
doubleCount // will always be 0


</script>

<template>
    <button @click="doAThing">click me</button>
</template>

<style scoped>
</style>