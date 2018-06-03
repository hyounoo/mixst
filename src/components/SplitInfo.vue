<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row wrap v-if="tradeType === 'split' || tradeType === 'combined'">
          <v-flex xs6>
            <v-text-field :label="$t('lang.exchange.splitInfo.minimum')" :rules="appUtil.requiredRules($t('lang.exchange.splitInfo.minimum'))">
            </v-text-field>      
          </v-flex>
          <v-flex xs6 >
            <v-text-field :label="$t('lang.exchange.splitInfo.maximum')" :rules="appUtil.requiredRules($t('lang.exchange.splitInfo.maximum'))">
            </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap v-if="tradeType === 'bid' || tradeType === 'split' || tradeType === 'combined'">
          <v-flex xs6>
            <v-text-field :label="$t(countLabel)" :rules="appUtil.requiredRules($t(countLabel))">              
            </v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field :label="$t('lang.exchange.splitInfo.price')" :rules="appUtil.requiredRules($t('lang.exchange.splitInfo.price'))">
            </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap v-if="tradeType === 'bid' || tradeType === 'combined'">
          <v-flex xs6>
            <v-text-field :label="$t('lang.exchange.splitInfo.rate')" :rules="appUtil.requiredRules($t('lang.exchange.splitInfo.rate'))">              
            </v-text-field>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
export default {
  props: ['type', 'tradeType'],
  data() {
    return {
      valid: true
    }
  },
  computed: {
    tradeTypes() {
      return this.$store.state.tradeTypes.types
    },
    countLabel() {
      return this.type === 'sell'
        ? 'lang.exchange.splitInfo.sellingAmount'
        : 'lang.exchange.splitInfo.buyingAmount'
    }
  }
}
</script>

<style>
</style>
