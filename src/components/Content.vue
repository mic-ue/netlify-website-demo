<template>
  <div class="main-content">
    <p> グッズ発売情報 </p>
    <div class="calendar">
      <iframe src="https://calendar.google.com/calendar/embed?height=500&amp;wkst=2&amp;bgcolor=%23d3d3d3&amp;ctz=Asia%2FTokyo&amp;src=YWJ1cmFrYXRhYnVyYTEyMThAZ21haWwuY29t&amp;src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%230B8043&amp;showTitle=0&amp;showPrint=0&amp;showTz=0&amp;showTabs=1&amp;showDate=1" style="border-width:0" width="800" height="500" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 600px;

  padding: 2rem;;

  background-color: #eee;
  color: #999fa8;
}
.calendar {
  width: 100%;
  height: 100%;
}
</style>