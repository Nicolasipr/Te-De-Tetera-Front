<template>
  <b-container class="bg--gray" fluid>
    <b-container class="header__margin pl-5 pr-5 pt-5">
      <b-row>
        <b-col lg="12">
          <div class="section__title--3 text-center pb--30">
            <h2>{{$t('about.ourStory')}}</h2>
          </div>
        </b-col>
      </b-row>
      <b-row class="pb-5 justify-content-center">
        <b-col cols="12" class="text-justify">
          <p class="mt--20 mb--20">{{$t('about.story')}}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <div class="section__title--3 text-center">
            <h2>{{$t('about.meetOurTeam')}}</h2>
          </div>
        </b-col>
      </b-row>
      <br>
      <b-row class="d-flex justify-content-start align-items-center">
        <!-- Start Single Team Gloria -->
        <b-col lg="4" md="4" sm="6" cols="12">
          <div class="wn__team ">
            <div class="thumb">
              <img src="../assets/images/about/team/gloria.jpg" alt="Team images">
            </div>
            <div class="content text-center">
              <h4>{{$t('about.gloriaName')}}</h4>
              <p>{{$t('about.gloriaRole')}}</p>

            </div>
          </div>
        </b-col>
        <b-col lg="8" md="8" sm="6" cols="12">
            <!--          Description -->
            <div class="text-justify ">
              <p>
                Si bien soy Administradora de empresas mi pasión por el dibujo está desde que tengo
                conciencia, todo lo pintaba, recortaba o intervenía y de manera casi mágica me embarque
                en este camino de ser una mujer emprendedora cuando Violeta llegó a mi vida.


              </p>
              <br>
              <p>
                Cada día me capacito y busco nuevas herramientas para hacer de Te de tetera una gran
                empresa llena de colores y mucho corazón.
              </p>
              <br>
              <p>
                Viví rodeada de naturaleza sureña y es esa belleza la que busco plasmar en mis teteras,
                para que puedas llevar a tu mesa algo único y creado especialmente para ti.
              </p>
            </div>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center"  >
        
        <b-col lg="4" md="4" sm="6" cols="12">
          <div class="wn__team">
            <div class="thumb">
              <img src="../assets/images/about/team/2.jpg" alt="Team images">
            </div>
            <div class="content text-center">
              <h4>{{$t('about.catName')}}</h4>
              <p>{{$t('about.catRole')}}</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="css" scoped>

</style>