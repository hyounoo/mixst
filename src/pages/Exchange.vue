<template>
  <v-container fluid grid-list-md>
    <v-tabs slot="extension" v-model="tab" centered color="accent" slider-color="white" >
        <v-tab :href="`#tab-sell`">
          <span class="white--text">Sell</span>
        </v-tab>
        <v-tab :href="`#tab-buy`">
          <span class="white--text">Buy</span>
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <v-tab-item :id="`tab-sell`" >
        <v-subheader>{{ $t('lang.exchange.saleInfo') }}</v-subheader>
        <sell-tab></sell-tab>
      </v-tab-item>
      <v-tab-item :id="`tab-buy`" >
        <v-subheader>{{ $t('lang.exchange.buyInfo') }}</v-subheader>
        <buy-tab></buy-tab>
      </v-tab-item>
    </v-tabs-items>
    
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
import SellTab from '@/components/SellTab'
import BuyTab from '@/components/BuyTab'
export default {
  data() {
    return {
      loader: null,
      loading: false,
      tab: null,
      text: 'test'
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
    SellTab,
    BuyTab
  },
  created() {
    this.$store.dispatch('coins/getAllCoins')
    this.$store.dispatch('tradeTypes/getAllTypes')
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
