<template>
<v-container fill-height justify-center align-center >
    <v-flex xs12 sm6>      
      <v-card class="mt-0 pt-0">
        <v-card-title class="blue darken-1">
          <h4 style="color:white">{{$t('lang.login.applicationName')}}</h4>
        </v-card-title>
        <v-progress-linear :indeterminate="$store.state.loading" class="ma-0"></v-progress-linear>
        <v-card-text>            
          <v-form v-model="valid" @submit.prevent="login">
            <v-layout row>
              <v-flex xs4>
                <v-subheader>{{$t('lang.signup.email')}}</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field :readonly="$store.state.loading" class="input-group--focused" name="email" clearable
                  v-model="email" :rules="appUtil.emailRules($t('lang.signup.email'))" :label="$t('lang.signup.email')" 
                  value="Input text"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>{{$t('lang.login.password')}}</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field :readonly="$store.state.loading" class="input-group--focused" name="password" type="password" clearable
                v-model="pass" :label="$t('lang.login.password')" :rules="appUtil.requiredRules($t('lang.login.password'))"
                value="Input text"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>{{$t('lang.signup.passwordConfirm')}}</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field :readonly="$store.state.loading" class="input-group--focused" name="passwordConfirm" type="password" clearable
                v-model="passConfirm" :label="$t('lang.signup.passwordConfirm')" :rules="appUtil.requiredRules($t('lang.signup.passwordConfirm'))"
                value="Input text"></v-text-field>
              </v-flex>
            </v-layout>                        
            <v-layout row>
              <v-flex xs4>
                <v-subheader>{{$t('lang.login.userId')}}</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field :readonly="$store.state.loading" class="input-group--focused" name="userId" clearable
                  v-model="userId" :rules="appUtil.requiredRules($t('lang.login.userId'))" :label="$t('lang.login.userId')" 
                  value="Input text"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs9>
                <v-checkbox v-model="agreement" :rules="[v => !!v || $t('lang.signup.agreementMsg')]" :label="$t('lang.signup.agreement')" ></v-checkbox>                
              </v-flex>
              <v-flex xs3>약관</v-flex>
            </v-layout>
            <v-layout row>
              <v-flex sm6 md4 lg3></v-flex>
              <v-flex xs12>
                <div id="recapcha" class="g-recaptcha" data-sitekey="6LckllsUAAAAAL2V2SANquFVgP1-xtwOmlDOw9J0"></div>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-btn :disabled="$store.state.loading ||!valid" type="submit">{{$t('lang.signup.signup')}}</v-btn>
              </v-flex>              
            </v-layout>
            <v-snackbar v-if="error" :top="true" v-model="error">              
              <span v-t="text"></span>              
              <v-btn class="pink--text" flat @click.native="error = false">Close</v-btn>
            </v-snackbar>            
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
import auth from '../utils/auth'
export default {
  data() {
    return {
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      valid: true,
      email: '',
      userId: '',
      pass: '',
      passConfirm: '',
      agreement: false,
      error: false,
      text: ''
    }
  },
  methods: {
    login() {
      var recapcha = document.getElementById('g-recaptcha-response')
      var token = recapcha ? recapcha.value : null
      console.log('recapcha :', token)

      this.$store.dispatch('setLoadingStatus', true)
      auth.login(this.email, this.pass, token, (loggedIn, err) => {
        this.$store.dispatch('setLoadingStatus', false)
        if (err) {
          if (err.response) {
            console.log('err response data', err.response.data)
            this.text = 'lang.error.' + err.response.data.error
            this.error = true
          } else {
            console.log('err message', err.message)
            this.text = 'lang.error.network_error'
            this.error = true
          }
        } else if (loggedIn === false) {
          console.log('loggedIn', loggedIn)
          this.error = true
          this.text = 'Bad login information'
        } else {
          console.log(this.$route)
          this.$router.push(this.$route.query.redirect || '/')
        }
      })
    }
  }
}
</script>
<style>
</style>
