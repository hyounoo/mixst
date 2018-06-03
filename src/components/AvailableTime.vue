<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12 md4 lg3 offset-md1>
            <v-layout row wrap>
              <v-flex pa-0>{{$t('lang.seller.availableTime.mon')}}</v-flex>
              <v-flex pa-0>{{$t('lang.seller.availableTime.tue')}}</v-flex>
              <v-flex pa-0>{{$t('lang.seller.availableTime.wed')}}</v-flex>
              <v-flex pa-0>{{$t('lang.seller.availableTime.thu')}}</v-flex>
              <v-flex pa-0>{{$t('lang.seller.availableTime.fri')}}</v-flex>
              <v-flex pa-0>{{$t('lang.seller.availableTime.sat')}}</v-flex>
              <v-flex pa-0>{{$t('lang.seller.availableTime.sun')}}</v-flex>
              <v-flex pa-0>{{$t('lang.seller.availableTime.all')}}</v-flex>
            </v-layout>
            <v-layout row wrap> 
              <v-flex pl-2>
                <v-checkbox  v-model="days" value="mon" color="red" hide-details></v-checkbox>
              </v-flex>
              <v-flex pl-2>
                <v-checkbox v-model="days" value="tue" color="red darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex pl-2>
                <v-checkbox v-model="days" value="wed" color="indigo" hide-details></v-checkbox>
              </v-flex>
              <v-flex pl-2>
                <v-checkbox v-model="days" value="thu" color="indigo darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex pl-2>
                <v-checkbox v-model="days" value="fri" color="orange" hide-details></v-checkbox>
              </v-flex>
              <v-flex pl-2>
                <v-checkbox v-model="days" value="sat" color="orange darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex pl-2>
                <v-checkbox v-model="days" value="sun" color="blue" hide-details></v-checkbox>
              </v-flex>
              <v-flex pl-2>
                <v-checkbox v-model="days" value="all" color="blue darken-3" hide-details></v-checkbox>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs6 md3 offset-md2>
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
                :label="$t('lang.seller.availableTime.start')"                
                prepend-icon="access_time"
                readonly
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
            >
              <v-text-field
                slot="activator"
                v-model="endTime"
                :label="$t('lang.seller.availableTime.end')"
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
      startTime: null,
      startTimePickerModal: false,
      endTime: null,
      endTimePickerModal: false
    }
  },
  watch: {},
  methods: {},
  computed: {}
}
</script>

<style>
</style>
