<template>
  <div id="app">
    <Header/>
    <router-view :key="this.$route.path"/>
    <Footer/>
    <a v-if="!onTop" id="scrollUp" href="#top" style="position: fixed; z-index: 10;">
      <FontAwesome icon="angle-up"></Fontawesome>
    </a>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/style.css'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      onTop: true
    }
  },
  methods: {
    handleScroll() {
      const scrollValue = document.body.scrollTop + document.documentElement.scrollTop
      this.onTop = scrollValue < 250
    },
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#scrollUp {
  display: flex;
  justify-content: center;
}
</style>
