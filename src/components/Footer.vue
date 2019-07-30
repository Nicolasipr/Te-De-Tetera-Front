<template>
  <footer id="wn__footer">
    <div class="footer-static-top">
      <b-container>
        <b-row>
          <b-col lg="12">
            <div class="footer__widget footer__menu">
              <div class="ft__logo">
                <router-link to="/">
                  <img class="logo-img" src="../assets/images/logo/te-de-tetera-logoi-black.png" alt="logo">
                </router-link>
                <p>{{$t("footer.text")}}</p>
              </div>
              <div class="footer__content">
                <ul class="social__net social__net--2 d-flex justify-content-center">
                  <li><a href="https://www.facebook.com/tedetetera/"><FontAwesome :icon="['fab', 'facebook']"></FontAwesome></a></li>
                  <li><a href="https://www.instagram.com/tedetetera/"><FontAwesome :icon="['fab', 'instagram']"></FontAwesome></a></li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {

  name: 'Footer',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.logo-img {
  height: 300px;
  width: auto;
}
</style>