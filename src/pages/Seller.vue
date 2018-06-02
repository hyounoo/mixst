<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 pa-3>
        <coin-info></coin-info>
      </v-flex>
      <v-flex xs12 sm6 pa-3>
        <trade-info></trade-info>
      </v-flex>
      <v-flex xs12 pa-3>
        <available-time></available-time>
      </v-flex>
      <v-flex xs12 pa-3>
        <v-card>
          <v-card-text>
            <v-text-field label="거래설명"></v-text-field>  
          </v-card-text>
        </v-card>        
      </v-flex>
      <v-flex xs12 pa-3>
        <v-card>
          <v-card-text>
            <p>안내문</p>
          </v-card-text>
        </v-card>        
      </v-flex>
    </v-layout>
    <v-btn
      :loading="loading"
      :disabled="loading"
      color="info"
      @click.native="loader = 'loading'"
    >
      판매신청
      <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
    </v-btn>
  </v-container>
</template>

<script>
import CoinInfo from '@/components/CoinInfo'
import TradeInfo from '@/components/TradeInfo'
import AvailableTime from '@/components/AvailableTime'
export default {
  data() {
    return {
      loader: null,
      loading: false
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  components: {
    CoinInfo,
    TradeInfo,
    AvailableTime
  },
  created() {
    this.$store.dispatch('coins/getAllCoins')
  }
}
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
