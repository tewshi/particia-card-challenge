<script setup>
import { ref } from 'vue';
import Card from "./components/Card.vue";

const name = ref("Cardholder Name");
const expiry = ref("10/12");
const cvv = ref("455");
const number = ref("9784978497849784");
</script>

<template>
  <div class="center">
    <card :name="name" :expiry="expiry" :cvv="cvv" :number="number" />
  </div>
</template>

<style lang="stylus">
*, *::before, *::after
  box-sizing border-box

html, body
  font 16px/1.2 BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
  padding 10px

.center
    min-height 100vh
    display flex
    justify-content center
    align-items center
</style>
