<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row>
          <v-flex xs12 sm6>
            <v-select label="거래유형"
              :items="tradeTypes"  item-text="text" item-value="type">
            </v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field label="지불방법" :rules="appUtil.requiredRules('판매수량')"
              ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>            
            <v-text-field label="금액" :rules="appUtil.requiredRules('단위')"
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
