<script setup>

// import { useAppStore } from "@/store/app"

const appStore = useAppStore(); 

</script>

<template>
  <div>
    {{ appStore.xyu }}
  </div>
</template>
