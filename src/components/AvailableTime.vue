<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12 md6 lg6 mt-3>
            <v-layout row wrap hidden-sm-and-up>
              <v-flex pa-0>{{$t('lang.exchange.availableTime.mon')}}</v-flex>
              <v-flex pa-0>{{$t('lang.exchange.availableTime.tue')}}</v-flex>
              <v-flex pa-0>{{$t('lang.exchange.availableTime.wed')}}</v-flex>
              <v-flex pa-0>{{$t('lang.exchange.availableTime.thu')}}</v-flex>
              <v-flex pa-0>{{$t('lang.exchange.availableTime.fri')}}</v-flex>
              <v-flex pa-0>{{$t('lang.exchange.availableTime.sat')}}</v-flex>
              <v-flex pa-0>{{$t('lang.exchange.availableTime.sun')}}</v-flex>
              <v-flex pa-0>{{$t('lang.exchange.availableTime.all')}}</v-flex>
            </v-layout>
            <v-layout row wrap hidden-xs-only>
              <v-flex>
                <v-checkbox :label="$t('lang.exchange.availableTime.mon')"
                  v-model="days" value="mon" color="red" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox :label="$t('lang.exchange.availableTime.tue')"
                  v-model="days" value="tue" color="red darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox :label="$t('lang.exchange.availableTime.wed')"
                  v-model="days" value="wed" color="indigo" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox :label="$t('lang.exchange.availableTime.thu')"
                  v-model="days" value="thu" color="indigo darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox :label="$t('lang.exchange.availableTime.fri')"
                  v-model="days" value="fri" color="orange" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox :label="$t('lang.exchange.availableTime.sat')"
                  v-model="days" value="sat" color="orange darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox :label="$t('lang.exchange.availableTime.sun')"
                  v-model="days" value="sun" color="blue" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox :label="$t('lang.exchange.availableTime.all')"
                  v-model="all" value="all" color="blue darken-3" hide-details></v-checkbox>
              </v-flex>
            </v-layout>
            <v-layout row wrap hidden-sm-and-up>
              <v-flex>
                <v-checkbox
                  v-model="days" value="mon" color="red" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox
                  v-model="days" value="tue" color="red darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox
                  v-model="days" value="wed" color="indigo" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox
                  v-model="days" value="thu" color="indigo darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox
                  v-model="days" value="fri" color="orange" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox
                  v-model="days" value="sat" color="orange darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox
                  v-model="days" value="sun" color="blue" hide-details></v-checkbox>
              </v-flex>
              <v-flex>
                <v-checkbox
                  v-model="all" value="all" color="blue darken-3" hide-details></v-checkbox>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs6 md3>
            <v-dialog
              ref="startTimePicker"              
              :close-on-content-click="false"
              v-model="startTimePickerModal"
              :return-value.sync="startTime"
              persistent
              lazy
              full-width
              width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="startTime"
                :label="$t('lang.exchange.availableTime.start')"                
                prepend-icon="access_time"
                readonly
                clearable
              ></v-text-field>
              <v-time-picker v-model="startTime" format="24hr" @input="$refs.startTimePicker.save(startTime)">
              </v-time-picker>
            </v-dialog>
          </v-flex>
          <v-flex xs6 md3>
            <v-dialog
              ref="endTimePicker"              
              :close-on-content-click="false"
              v-model="endTimePickerModal"
              :return-value.sync="endTime"
              persistent
              lazy
              full-width
              width="290px"
              clearable
            >
              <v-text-field
                slot="activator"
                v-model="endTime"
                :label="$t('lang.exchange.availableTime.end')"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker v-model="endTime" format="24hr" @input="$refs.endTimePicker.save(endTime)">
              </v-time-picker>
            </v-dialog>
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
      valid: false,
      days: [],
      all: false,
      startTime: null,
      startTimePickerModal: false,
      endTime: null,
      endTimePickerModal: false
    }
  },
  watch: {
    all(value) {
      if (value === 'all') {
        this.days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        this.startTime = '00:00'
        this.endTime = '00:00'
      } else {
        this.days = []
        this.startTime = null
        this.endTime = null
      }
    }
  },
  methods: {},
  computed: {}
}
</script>

<style>
</style>
