<template>
  <div>
    <intro></intro>
    <div id="body">
      <div id="current">
        <current v-bind:currentCurrency="currentCurrency"></current>
      </div>
      <div id="previous">
        <previous v-bind:previousCurrency="previousCurrency"></previous>
      </div>
    </div>
  </div>
</template>
<script>
// import this.moment from 'this.moment'
// import this.axios from 'this.axios'
import Intro from '@/components/Intro'
import Current from '@/components/Current'
import Previous from '@/components/Previous'
export default {
  components: { Intro, Current, Previous },
  data() {
    return {
      test: 'test',
      currentCurrency: { BTC: '', ETH: '', LTC: '' },
      previousCurrency: {
        yesterday: {},
        twoDays: {},
        threeDays: {},
        fourDays: {},
        fiveDays: {}
      }
    }
  },
  methods: {
    spreadData(BTC, ETH, LTC, date, key) {
      this.previousCurrency[key] = {
        BTC: BTC.data.BTC.USD,
        LTC: LTC.data.LTC.USD,
        ETH: ETH.data.ETH.USD,
        DATE: this.$moment.unix(date).format('MMMM Do YYYY')
      }

      localStorage.setItem(
        `${key}Prices`,
        JSON.stringify(this.previousCurrency[key])
      )
    },
    _fetchDataFor(key, daysAgo) {
      var date = this.$moment()
        .subtract(daysAgo, 'days')
        .unix()
      let fetch = (curr, date) =>
        this.axios.get(
          `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${curr}&tsyms=USD&ts=${date}`
        )

      var vm = this
      this.axios
        .all([fetch('BTC', date), fetch('ETH', date), fetch('LTC', date)])
        .then(
          this.axios.spread((BTC, ETH, LTC) => {
            vm.spreadData(BTC, ETH, LTC, date, key)
          })
        )
    },
    _fetchDataForToday() {
      var currentCurrency = this.currentCurrency
      let url =
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD'
      this.axios.get(url).then(res => {
        localStorage.setItem('BTC', (currentCurrency.BTC = res.data.BTC.USD))
        localStorage.setItem('ETH', (currentCurrency.ETH = res.data.ETH.USD))
        localStorage.setItem('LTC', (currentCurrency.LTC = res.data.LTC.USD))
      })
    }
  },
  created() {
    if (!navigator.onLine) {
      this.currentCurrency = {
        BTC: localStorage.getItem('BTC'),
        ETH: localStorage.getItem('ETH'),
        LTC: localStorage.getItem('LTC')
      }
      this.previousCurrency = {
        yesterday: JSON.parse(localStorage.getItem('yesterdayPrices')),
        twoDays: JSON.parse(localStorage.getItem('twoDaysPrices')),
        threeDays: JSON.parse(localStorage.getItem('threeDaysPrices')),
        fourDays: JSON.parse(localStorage.getItem('fourDaysPrices')),
        fiveDays: JSON.parse(localStorage.getItem('fiveDaysPrices'))
      }
    } else {
      this._fetchDataFor('yesterday', 1)
      this._fetchDataFor('twoDays', 2)
      this._fetchDataFor('threeDays', 3)
      this._fetchDataFor('fourDays', 4)
      this._fetchDataFor('fiveDays', 5)
      this._fetchDataForToday()
    }
  }
}
</script>
<style scoped>
header {
  background: linear-gradient(
    to bottom right,
    rgb(0, 193, 131),
    rgb(50, 72, 95)
  );
  padding: 1em;
  margin-bottom: 1em;
  text-align: center;
  height: 300px;
  color: #fff;
}
header h3 {
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  float: left;
}
bar {
  padding: 20px;
  height: 48px;
}
.monitor {
  text-transform: uppercase;
  float: right;
  background-color: rgba(255, 255, 255, 0.2);
  line-height: 23px;
  border-radius: 25px;
  width: 175px;
  height: 48px;
  margin: auto;
}
.monitor:hover,
monitorText:hover {
  cursor: pointer;
}
.monitorText {
  width: 104px;
  height: 23px;
  font-weight: bold;
  line-height: 50px;
  font-size: 14px;
}
header h1 {
  padding-top: 80px;
  width: 80%;
  margin: auto;
}
header h2 {
  padding-top: 20px;
}
</style>