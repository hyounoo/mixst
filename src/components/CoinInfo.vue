<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row>
          <v-flex xs6>
            <v-select label="판매코인"
              :items="coins"  item-text="text" item-value="type">
            </v-select>
          </v-flex>
          <v-flex xs6>
            <v-text-field label="판매수량" :rules="appUtil.requiredRules('판매수량')"
              ></v-text-field>
          </v-flex>
          <v-flex xs6>            
            <v-text-field label="단위" :rules="appUtil.requiredRules('단위')"
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
    coins() {
      return this.$store.state.coins.coins
    }
  }
}
</script>

<style>
</style>
