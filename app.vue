<script setup>

// import { useAppStore } from "@/store/app"

const appStore = useAppStore(); 

</script>

<template>
  <div>
    <h1 class="text-3xl font-bold hover:bg-sky-700">
      Hello world!
    </h1>
    {{ appStore.xyu }}
  </div>
</template>
