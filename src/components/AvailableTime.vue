<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12 md3 offset-md1>
            <v-layout row wrap>
              <v-flex xs1>월</v-flex>
              <v-flex xs1>화</v-flex>
              <v-flex xs1>수</v-flex>
              <v-flex xs1>목</v-flex>
              <v-flex xs1>금</v-flex>
              <v-flex xs1>토</v-flex>
              <v-flex xs1>일</v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs1>
                <v-checkbox v-model="days" value="mon" color="red" hide-details></v-checkbox>
              </v-flex>
              <v-flex xs1>
                <v-checkbox v-model="days" value="tue" color="red darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex xs1>
                <v-checkbox v-model="days" value="wed" color="indigo" hide-details></v-checkbox>
              </v-flex>
              <v-flex xs1>
                <v-checkbox v-model="days" value="thu" color="indigo darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex xs1>
                <v-checkbox v-model="days" value="fri" color="orange" hide-details></v-checkbox>
              </v-flex>
              <v-flex xs1>
                <v-checkbox v-model="days" value="sat" color="orange darken-3" hide-details></v-checkbox>
              </v-flex>
              <v-flex xs1>
                <v-checkbox v-model="days" value="sun" color="blue" hide-details></v-checkbox>
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
                label="Start time"
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
                label="End time"
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
