<template>
  <div class="top">
    <div class="particles">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.5"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#eee"
        :linesWidth="0.5"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="push"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>

    <b-container class="contents">
      <b-row align-h="center" md="4">
        <b-col align-self="stretch">
          <b-row class="text-center">
            <vue-typer :text="['TWST GOODS CALENDAR\n']"
              class="top-text" :repeat="0" :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000">
            </vue-typer>
          </b-row>
          <b-row>
            <font-awesome-icon icon="calendar-alt" class="icon"/>
            <font-awesome-icon icon="book" class="icon"/>
            <font-awesome-icon icon="hat-wizard" class="icon"/>
            <font-awesome-icon icon="broom" class="icon"/>
            <font-awesome-icon icon="birthday-cake" class="icon"/>
            <font-awesome-icon icon="fire" class="icon"/>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "Top",
}
</script>

<style scoped>
.top {
  /* display: flex; */
  position: relative;
  width: 90%;
  height: 70vw;
  background-color:#222831;
}
.vue-typer .custom.char {
  color: #eee;
}
.particles {
  display: flex;
  width: 100%;
  height: 100%;
}
.contents {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  color: #eee;
}
.icon {

}
</style>