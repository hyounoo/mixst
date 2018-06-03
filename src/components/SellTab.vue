<template>  
  <v-layout row wrap>
    <v-flex xs12 sm6 pa-3>
      <coin-info type="sell" :coinInfo="coinInfo"></coin-info>
    </v-flex>
    <v-flex xs12 sm6 pa-3>
      <trade-info :tradeInfo="tradeInfo"></trade-info>
    </v-flex>
    <v-flex xs12 pa-3 v-if="tradeInfo.tradeType && tradeInfo.tradeType != 'normal'">
      <split-info type="sell" :tradeType="tradeInfo.tradeType"></split-info>
    </v-flex>
    <v-flex xs12 pa-3>
      <available-time></available-time>
    </v-flex>
    <v-flex xs12 pa-3>
      <v-card>
        <v-card-text>
          <v-text-field :label="$t('lang.exchange.description')"></v-text-field>
        </v-card-text>
      </v-card>        
    </v-flex>
    <v-flex xs12 pa-3>
      <v-card>
        <v-card-text>
          <p>안내문</p>
          {{tradeInfo.tradeType}}
        </v-card-text>
      </v-card>              
    </v-flex>
    
  </v-layout>
</template>

<script>
import CoinInfo from '@/components/CoinInfo'
import TradeInfo from '@/components/TradeInfo'
import SplitInfo from '@/components/SplitInfo'
import AvailableTime from '@/components/AvailableTime'
export default {
  components: {
    CoinInfo,
    TradeInfo,
    SplitInfo,
    AvailableTime
  },
  data() {
    return {
      coinInfo: {},
      tradeInfo: { tradeType: null }
    }
  }
}
</script>

<style>
</style>
