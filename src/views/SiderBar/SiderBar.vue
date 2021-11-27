<template>
  <div class="com-container">
    <div class="numtit seat pulse">
      <span class="fonttxt">站点总人数:</span
      ><span class="font">{{ count }}</span>
    </div>
            <div class="buttons">
              <router-link to="/Forecast"><button class="slide seat btn">预测分析</button></router-link>
              <router-link to="/HeatMap"> <button class="slide seat btn">客流时间分析</button></router-link>
              <router-link to="/Analysis"><button class="slide seat btn">客流空间分析</button></router-link>
            </div>
    <!-- <div class="com-chart" ref="">
      <div class="wrapper">
        <router-link to="/Analysis"
          ><span class="button">客流空间分析</span></router-link>
      </div>
      <div class="wrapper">
        <router-link to="/HeatMap"
          ><span class="button">客流时间分析</span></router-link>
      </div>
      <div class="wrapper">
        <router-link to="/Forecast"
          ><span class="button">预测分析</span></router-link>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      count:5314,
    };
  },
  mounted: function () {
            this.$nextTick(function () {
                setInterval(this.timer, 2000);
            })
        },
  methods: {
    timer: function () {
      var temp =Math.floor(Math.random()*100) ;
      var plusOrMinus = Math.random() < 0.5 ? -temp: temp; 
                this.count+=plusOrMinus
    },
  },
};
</script>

<style scoped>
.pulse:hover,
.pulse:focus,
.pulse:active {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}
.pulse {
  --color: #3d5b96;
  --hover: #3d5b96;
  cursor:pointer
}
.slide:hover,
.slide:focus {
  box-shadow: inset 11.5em 0 0 0 var(--hover);
}

.slide {
  --hover: #3d5b96;
}
button {
  color: var(--color);
  transition: 0.25s;
  border-width: 0px;
}
button:hover, button:focus {
  border-color: var(--hover);
  color: #fff;
}
.buttons{
  position: relative;
  margin-top: 3%;
}

.seat {
  position: relative;
  /* font-family: "LED"; */
  font-family: "黑体";
  color: #76bada;
  color: #fff;
  top: 30%;
  text-align: center;
  padding: 1%;
  background: linear-gradient(to left, rgb(4, 172, 247), rgb(4, 172, 247)) left
      top no-repeat,
    linear-gradient(to bottom, rgb(4, 172, 247), rgb(4, 172, 247)) left top
      no-repeat,
    linear-gradient(to left, rgb(4, 172, 247), rgb(4, 172, 247)) right top
      no-repeat,
    linear-gradient(to bottom, rgb(4, 172, 247), rgb(4, 172, 247)) right top
      no-repeat,
    linear-gradient(to left, rgb(4, 172, 247), rgb(4, 172, 247)) left bottom
      no-repeat,
    linear-gradient(to bottom, rgb(4, 172, 247), rgb(4, 172, 247)) left bottom
      no-repeat,
    linear-gradient(to left, rgb(4, 172, 247), rgb(4, 172, 247)) right bottom
      no-repeat,
    linear-gradient(to left, rgb(4, 172, 247), rgb(4, 172, 247)) right bottom
      no-repeat;
  background-size: 2px 10px, 10px 2px, 2px 10px, 10px 2px, 2px 10px, 10px 2px,
    2px 10px, 10px 2px;
}
.btn {
  cursor: pointer;
  float: right;
  font-size: 150%;
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 5%;
  padding-bottom: 4%;
  right: 3%;
  width: 19%;
  margin-left: 2%;
  top: 40%;
  background-color: #233961;

}


.numtit {
  float: left;
  margin-right: 1%;
  left: 2%;
  top: 10%;
  padding-left: 1%;
  padding-right: 4%;
  padding-top: 4%;
  padding-bottom: 5.5%;
  background-color: #27395c;
  width: 26%;
}
.font {
  color: #00dcff;
  font-family: "LED";
  font-size: 350%;
}
.fonttxt {
  font-size: 160%;
  position: relative;
}


.com-container {
  background-color: #172846;
  background-size: cover;
}


</style>