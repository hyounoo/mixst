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
    </v-layout>
  </v-container>
</template>

<script>
import CoinInfo from '@/components/CoinInfo'
import TradeInfo from '@/components/TradeInfo'
import AvailableTime from '@/components/AvailableTime'
export default {
  components: {
    CoinInfo,
    TradeInfo,
    AvailableTime
  }
}
</script>

<style>
</style>
