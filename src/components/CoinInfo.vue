<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row>
          <v-flex xs6>
            <v-select :label="$t(coinLabel)" v-if="coins"
              v-model="selectedCoin" item-text="name" item-value="code"
              :items="coins" >
              <template slot="selection" slot-scope="data" v-if="data.item">
                <div
                  :selected="data.selected"
                  :key="JSON.stringify(data.item)"
                  @input="data.parent.selectItem(data.item)">
                <i :class="data.item.icon"></i>
                  {{ data.item.code }}
                </div>
              </template>
              <template slot="item" slot-scope="data">
                <template>
                  <v-list-tile-avatar>
                    <i v-if="data.item" :class="data.item.icon"></i>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                  </v-list-tile-content>
                </template>
              </template>
            </v-select>
          </v-flex>
          <v-flex xs6>
            <v-text-field :label="$t(amountLabel)" :rules="appUtil.requiredRules($t(amountLabel))"
              ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field :label="$t('lang.exchange.coinInfo.exchangeRate')" :rules="appUtil.requiredRules($t('lang.exchange.coinInfo.exchangeRate'))"
              ></v-text-field>
          </v-flex>
        </v-layout>        
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
export default {
  props: ['type'],
  data() {
    return {
      valid: true,
      selectedCoin: null
    }
  },
  computed: {
    coins() {
      return this.$store.state.coins.coins
    },
    coinLabel() {
      return this.type === 'sell'
        ? 'lang.exchange.coinInfo.sellCoin'
        : 'lang.exchange.coinInfo.buyCoin'
    },
    amountLabel() {
      return this.type === 'sell'
        ? 'lang.exchange.coinInfo.sellAmount'
        : 'lang.exchange.coinInfo.buyAmount'
    }
  }
}
</script>

<style>
</style>
