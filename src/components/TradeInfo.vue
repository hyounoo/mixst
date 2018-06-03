<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row>
          <v-flex xs12 sm6>
            <v-select :label="$t('lang.seller.tradeInfo.type')"
              :items="tradeTypes"  item-text="text" item-value="type">
            </v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field :label="$t('lang.seller.tradeInfo.payment')" :rules="appUtil.requiredRules($t('lang.seller.tradeInfo.payment'))"
              ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>            
            <v-text-field :label="$t('lang.seller.tradeInfo.amount')" :rules="appUtil.requiredRules($t('lang.seller.tradeInfo.amount'))"
              ></v-text-field>
          </v-flex>
        </v-layout>        
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: true
    }
  },
  computed: {
    tradeTypes() {
      return ['일반', '분할']
    },
    coins() {
      return this.$store.state.coins.coins
    }
  }
}
</script>

<style>
</style>
