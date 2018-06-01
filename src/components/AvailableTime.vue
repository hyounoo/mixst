<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs6 sm3>
            <v-dialog
              ref="startDatePicker"
              :close-on-content-click="false"
              v-model="startDatePickerModal"
              :return-value.sync="startDate"
              persistent
              lazy
              full-width
              width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="startDate"
                label="Start date"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="startDate" @input="$refs.startDatePicker.save(startDate)"></v-date-picker>
            </v-dialog>
          </v-flex>
          <v-flex xs6 sm3>
            <v-dialog
              v-show="startDate"
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
          <v-flex xs6 sm3>
            <v-dialog
              ref="endDatePicker"
              :close-on-content-click="false"
              v-model="endDatePickerModal"
              :return-value.sync="endDate"
              persistent
              lazy
              full-width
              width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="endDate"
                label="End date"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="endDate" @input="$refs.endDatePicker.save(endDate)"></v-date-picker>
            </v-dialog>
          </v-flex>
          <v-flex xs6 sm3>
            <v-dialog
              v-show="endDate"
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
      startDate: null,
      startTime: null,
      startDatePickerModal: false,
      startTimePickerModal: false,
      endDate: null,
      endTime: null,
      endDatePickerModal: false,
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
