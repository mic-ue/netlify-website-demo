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

    <div class="contents">
      <vue-typer :text="['TWST GOODS CALENDAR\n']"
        class="top-text" :repeat="0" :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000">
      </vue-typer>
      <br>

      <font-awesome-icon icon="calendar-alt" class="icon"/>
      <font-awesome-icon icon="book" class="icon"/>
      <font-awesome-icon icon="hat-wizard" class="icon"/>
      <font-awesome-icon icon="broom" class="icon"/>
      <font-awesome-icon icon="birthday-cake" class="icon"/>
      <font-awesome-icon icon="fire" class="icon"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "Top",
}
</script>

<style scoped>
.top {
  width: 100vw;
  height: 70vw;
  position: relative; 
  background-color:#222831;
}
.particles {
  display: flex;
  height: 100%;
}
.contents {
  position: absolute;
  top: 40%;
  left: 25%;
  transform: translateY(-50%) translateX(-50%);
}
</style>