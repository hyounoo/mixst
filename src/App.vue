<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer fixed v-model="drawer" left app class="blue lighten-3" dark>
        <v-list>
          <v-list-tile v-for="item in items.filter(i => i.visible)" :key="item.title" :to="item.url">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>    
      <v-toolbar class="blue lighten-3" dark fixed app>            
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{$t('lang.p2pEnchange')}} </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu bottom offset-y left attach>
          <v-btn slot="activator" flat style="min-width: 64px">
            <img :src="`https://countryflags.io/${currentLanguage.country}/flat/32.png`" width="32px">
          </v-btn>
          <v-list-tile class="blue lighten-3" dark avatar v-for="language in languages" :key="language.locale" @click="translateI18n(language.locale)"> 
            <v-list-tile-avatar size="24px">
              <img :src="`https://countryflags.io/${language.country}/flat/24.png`" width="24px">              
            </v-list-tile-avatar>
            <v-list-tile-title>{{language.title}}</v-list-tile-title>
          </v-list-tile>
        </v-menu>
      </v-toolbar>
      <v-content>
        <router-view></router-view>        
      </v-content>
      <v-footer class="blue lighten-3" dark app>
        <v-spacer></v-spacer>
        <span class="white--text mr-5">Mixst &copy; 2018</span>
      </v-footer>
      <v-btn fab dark fixed bottom right small color="red" v-scroll="onScroll" v-show="fab" @click="toTop">
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-app>
  </div>
</template>

<script>
import auth from '@/utils/auth'
import languages from '@/locales/languages'
export default {
  name: 'app',
  components: {},
  data() {
    return {
      drawer: false,
      languages,
      fab: false
    }
  },
  methods: {
    translateI18n(lang) {
      this.$store.dispatch('switchI18n', lang)
    },
    onScroll() {
      if (typeof window === 'undefined') return

      const top = window.pageYOffset || document.documentElement.offsetTop || 0

      this.fab = top > 300
    },
    toTop() {
      this.$vuetify.goTo(0)
    }
  },
  computed: {
    currentLanguage() {
      return this.languages.find(l => l.locale === this.$store.state.language)
    },
    items() {
      return [
        {
          title: 'Dashboard',
          icon: 'dashboard',
          url: '/dashboard',
          visible: true
        },
        {
          title: 'Exchange',
          icon: 'compare_arrows',
          url: '/exchange',
          visible: auth.loggedIn()
        },
        {
          title: 'Account',
          icon: 'account_box',
          url: '/acount',
          visible: auth.loggedIn()
        },
        {
          title: 'Wallet',
          icon: 'account_balance_wallet',
          url: '/wallet',
          visible: auth.loggedIn()
        },
        {
          title: 'Admin',
          icon: 'gavel',
          url: '/admin',
          visible: auth.loggedIn()
        },
        {
          title: 'Contact',
          icon: 'contact_mail',
          url: '/contact',
          visible: true
        },
        {
          title: 'FAQ',
          icon: 'question_answer',
          url: '/faq',
          visible: true
        },
        {
          title: 'Logout',
          icon: 'lock',
          url: '/logout',
          visible: auth.loggedIn()
        },
        {
          title: 'Login',
          icon: 'lock_open',
          url: '/login',
          visible: !auth.loggedIn()
        },
        {
          title: 'Signup',
          icon: 'exit_to_app',
          url: '/signup',
          visible: !auth.loggedIn()
        }
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
