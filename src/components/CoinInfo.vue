<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row>
          <v-flex xs6>
            <v-select label="판매코인" v-if="coins"
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
      valid: true,
      selectedCoin: null
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
