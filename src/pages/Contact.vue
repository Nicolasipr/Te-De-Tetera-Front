<template>
  <b-container class="bg--gray" fluid>
    <b-container class="header__margin p-5">
      <b-row>
        <b-col lg="8" cols="12">
          <div class="contact-form-wrap">
            <h2 class="contact__title">{{$t('contact.getInTouch')}}</h2>
            <p>{{$t('contact.shortTextGetInTouch')}}</p>
            <form id="contact-form" action="mail.php" method="post">
                <div class="single-contact-form space-between">
                    <input type="text" name="firstname" :placeholder="$t('contact.firstName')">
                    <input type="text" name="lastname" :placeholder="$t('contact.lastName')">
                </div>
                <div class="single-contact-form space-between">
                    <input type="email" name="email" :placeholder="$t('contact.email')">
                    <input type="text" name="website" :placeholder="$t('contact.website')">
                </div>
                <div class="single-contact-form">
                    <input type="text" name="subject" :placeholder="$t('contact.subject')">
                </div>
                <div class="single-contact-form message">
                    <textarea name="message" :placeholder="$t('contact.messagePlaceholder')"></textarea>
                </div>
                <div class="contact-btn">
                    <button type="submit">{{$t('contact.sendEmail')}}</button>
                </div>
            </form>
          </div>
        </b-col> 
        <div class="form-output">
            <p class="form-messege"></p>
        </div>
        <b-col lg="4" cols="12" class="md-mt-40 sm-mt-40">
          <div class="wn__address">
            <h2 class="contact__title">{{$t('contact.officeInfo')}}</h2>
            <p>{{$t('contact.shortTextOfficeInfo')}}</p>
            <div class="wn__addres__wreapper">

              <div class="single__address">
                <FontAwesome icon="map-marker-alt"></FontAwesome>
                <div class="content">
                  <span>{{$t('contact.address')}}:</span>
                  <p>In every single Home's Heart</p>
                </div>
              </div>

              <div class="single__address">
                <FontAwesome icon="phone-alt"></FontAwesome>
                <div class="content">
                  <span>{{$t('contact.phoneNumber')}}:</span>
                  <p>Some number</p>
                </div>
              </div>

              <div class="single__address">
                <FontAwesome icon="envelope"></FontAwesome>
                <div class="content">
                  <span>{{$t('contact.emailAddress')}}:</span>
                  <p>contacto@tedetetera.cl</p>
                </div>
              </div>

              <div class="single__address">
                <FontAwesome icon="globe"></FontAwesome>
                <div class="content">
                  <span>{{$t('contact.websiteAddress')}}:</span>
                  <p>www.tedetetera.cl</p>
                </div>
              </div>

            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {

  name: 'Contact',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>