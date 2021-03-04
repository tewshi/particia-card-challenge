<template>
  <div class="center">
    <card :name="name" :expiry="expiry" :cvv="cvv" :number="number" />
  </div>
</template>

<script>
import Card from "./Card.vue"
export default {
  components: { Card },
  data() {
    return {
      name: "Cardholder Name",
      expiry: "10/12",
      cvv: "455",
      number: "9784978497849784"
    }
  }
}
</script>

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
