<template>
  <div class="card">
    <div class="card_header">
      <img class="card_header_logo" src="./assets/logo.png" alt="Particia" />
      <button
        class="card_header_button"
        :class="{ reveal: obscure }"
        @click.stop.prevent="showDetails"
      ></button>
    </div>

    <transition name="fade">
      <div v-if="obscured" class="card_numbers">
        <span v-for="(num, i) in numbers" :key="i">
          {{ num }}
        </span>
      </div>
    </transition>

    <div class="card_footer">
      <span>{{ name }}</span>
      <div class="card_footer_expiry_cvv">
        <div class="card_footer_expiry">
          <span class="label">
            <p>VALID</p>
            <p>THRU</p>
          </span>
          <span>{{ expiry }}</span>
        </div>
        <div class="card_footer_cvv">
          <span class="label"><p>CVV</p></span>
          <span class="card_footer_cvv_value">
            <transition name="fade">
              <span v-if="obscured">{{ cvvNumber }}</span>
            </transition>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    expiry: { type: String, required: true },
    cvv: { type: String, required: true },
    number: { type: String, required: true }
  },
  data() {
    return {
      obscure: false,
      obscured: true,
      timeout: null
    }
  },
  beforeUnmount() {
    clearTimeout(this.timeout)
  },
  methods: {
    showDetails() {
      clearTimeout(this.timeout)
      this.obscure = !this.obscure
      this.obscured = false
      this.timeout = setTimeout(() => {
        this.obscured = true
      }, 100)
    }
  },
  computed: {
    numbers() {
      let number = this.number
      if (this.obscure) {
        number = this.number.substr(-4).padStart(16, "•")
      }

      return number.split(/(?<p>[0-9•]{4})/).filter((v) => v !== "")
    },
    cvvNumber() {
      if (this.obscure) {
        return "•••"
      }

      return this.cvv
    }
  }
}
</script>

<style lang="stylus">
.card
  background-color #131313
  background-image url('./assets/icon.png')
  background-repeat no-repeat
  width 300px
  height 183px
  border-radius 10px
  padding 18.39px 27.37px 12px 19.39px
  display flex
  flex-direction column
  justify-content space-between
  &_header
    display flex
    justify-content space-between
    &_logo
      height 12px
      width 65px
    &_button
      height 16px
      width 17px
      background-color transparent
      border none
      outline none
      cursor pointer
      background-position center center
      background-repeat no-repeat
      background-size contain
      background-image url('./assets/reveal.png')
      &.reveal
        background-image url('./assets/obscure.png')
      ::focus
        outline none
  &_numbers
    display flex
    justify-content space-between
    color #fff
    font-size 16px
    filter drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
  &_footer
    display flex
    justify-content space-between
    align-items flex-end
    color #D3DCE6
    font-size 12px
    filter drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    &_cvv
      margin-left 15px
      display flex
      align-items flex-end
      &_value
        min-width 30px
    &_expiry
      display flex
      &_cvv
        display flex
        .label
          font-size 7px
          line-height 1
          color #9DA8B6
          margin-right 10px
          p
            margin: 0
            &:first-child
              margin-bottom: 3px

@media screen and (min-width: 425px)
  .card
    width 499px
    height 305px
    border-radius 20px
    padding 38.39px 47.37px 22px 29.39px
    &_header
      &_logo
        height 18px
        width 98px
      &_button
        height 24px
        width 26px
    &_numbers
      font-size 21px
    &_footer
      font-size 16px
      &_cvv
        margin-left 25px
        &_value
          min-width 30px
      &_expiry
        &_cvv
          .label
            font-size 7px
            line-height 1
            color #9DA8B6
            margin-right 10px
            p
              margin: 0
              &:first-child
                margin-bottom: 3px

.fade-enter-active
  animation fade-in .10s

@keyframes fade-in
  0%
    opacity 0
  100%
    opacity 1
</style>
