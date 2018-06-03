<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row>
          <v-flex xs12 sm6>
            <v-select :label="$t('lang.exchange.tradeInfo.type')" v-if="tradeTypes"              
              :items="tradeTypes" v-model="tradeInfo.tradeType">
              <template slot="selection" slot-scope="data">
                {{$t('lang.exchange.tradeTypes.' + data.item)}}
              </template>
              <template slot="item" slot-scope="data">
                <v-list-tile-content>
                  <v-list-tile-title>{{$t('lang.exchange.tradeTypes.' + data.item)}}</v-list-tile-title>
                </v-list-tile-content>
              </template>
            </v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field :label="$t('lang.exchange.tradeInfo.payment')" :rules="appUtil.requiredRules($t('lang.exchange.tradeInfo.payment'))"
              ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>            
            <v-text-field :label="$t('lang.exchange.tradeInfo.amount')" :rules="appUtil.requiredRules($t('lang.exchange.tradeInfo.amount'))"
              ></v-text-field>
          </v-flex>
        </v-layout>        
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
export default {
  props: ['tradeInfo'],
  data() {
    return {
      valid: true
    }
  },
  computed: {
    tradeTypes() {
      return this.$store.state.tradeTypes.types
    }
  }
}
</script>

<style>
</style>
