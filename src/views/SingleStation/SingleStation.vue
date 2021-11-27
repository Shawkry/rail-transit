<template>
  <div class="com-container">
    <div class="main">
      <div class="menu">
        <router-link to="/Home/MapPage">
          <a href="#" class="back"
            ><div></div>
            <h4>地铁线路图</h4>
            <span>Back to home</span>
          </a></router-link
        >
        <span class="title">当前站点：{{ name }} </span>
      </div>
      <div class="container">
        <div class="left"><SingleStaLeft ref="SingleStaLeft"></SingleStaLeft></div>
        <div class="rightTop"><SingleStaRT></SingleStaRT></div>
        <div class="rightBottom"><SingleStaRB></SingleStaRB></div>
      </div>
    </div>
  </div>
</template>



<style scoped lang="less">
.title {
  position: relative;
  margin-left: 20%;
  font-size: 25px;
  font-family: '黑体'
}
.back {
  position: relative;
  left: 2%;
  display: inline-block;
  text-decoration: none;
  padding: 10px 10px 10px 40px;
}
.back h4 {
  color: #4a4f6a;
  font-size: 16px;
  transform: translateY(8px);
  transition: transform 500ms 0s cubic-bezier(0.2, 0, 0, 1);
  margin: 0 0;
}
.back span {
  opacity: 0;
  color: #858ba9;
  font-size: 12px;
  font-weight: 300;
  display: inline-block;
  transform: translateY(10px);
  transition: transform 500ms 0s cubic-bezier(0.2, 0, 0, 1),
    opacity 500ms 0s cubic-bezier(0.2, 0, 0, 1);
}
.back div {
  top: 11px;
  left: 0;
  content: "";
  width: 30px;
  height: 30px;
  display: block;
  overflow: hidden;
  position: absolute;
  border-radius: 50%;
  transform: scale(1);
  background-color: #e9e7f2;
  transition: transform 400ms 0s cubic-bezier(0.2, 0, 0, 1.6);
}
.back div::after {
  top: 0;
  left: 0;
  content: "";
  width: 60px;
  height: 30px;
  position: absolute;
  background-position: 0 0;
  background-image: url("https://s3-eu-west-1.amazonaws.com/thomascullen-codepen/back.svg");
  transition: transform 400ms 0s cubic-bezier(0.2, 0, 0, 1);
}
.back:hover h4 {
  color: #ffffff;
}
.back:hover h4,
.back:hover span {
  opacity: 1;
  transform: translateY(0);
}
.back:hover div {
  transform: scale(1.1);
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(185, 182, 198, 0),
    0 1px 3px 0 rgba(175, 172, 189, 0.25);
}
.back:hover div::after {
  transform: translateX(-30px);
}

.com-container {
  font-family: '黑体';
  background-color:#1b243b;
}
.main {
  height: 97%;
  width: 99%;
  position: relative;
  left: 2px;
  top: 2%;
}
.menu {
  height: 10%;
  width: 100%;
  //background-color: rgba(47, 198, 224, 0.151);
}
.container {
  height: 90%;
  width: 100%;
        border: 1px solid #76bada;
      background: linear-gradient(#76bada, #76bada) left top,
        linear-gradient(#76bada, #76bada) left top,
        linear-gradient(#76bada, #76bada) right top,
        linear-gradient(#76bada, #76bada) right top,
        linear-gradient(#76bada, #76bada) left bottom,
        linear-gradient(#76bada, #76bada) left bottom,
        linear-gradient(#76bada, #76bada) right bottom,
        linear-gradient(#76bada, #76bada) right bottom;
      background-repeat: no-repeat;
      background-size: 1px 10px, 10px 1px;
  //background-color: red;
}
.left {
  height: 100%;
  width: 50%;
  //background-color:yellow;
  float: left;
}

.rightTop {
  height: 50%;
  width: 50%;
  //background-color:skyblue;
  float: right;
}
.rightBottom {
  height: 50%;
  width: 50%;
  //background-color:slateblue;
  float: right;
  
}
</style>
<script>
import SingleStaLeft from "./SingleStaCharts/SingleStaLeft";
import SingleStaRT from "./SingleStaCharts/SingleStaRT";
import SingleStaRB from "./SingleStaCharts/SingleStaRB";
export default {
  data() {
    return { name: "Sta1" };
  },
  methods: {
    
  },
  mounted() {
    this.name = this.$route.query.name;
  },
  watch: {
    $route() {
      this.name = this.$route.query.name;
    },
  },

  components: {
    SingleStaLeft,
    SingleStaRT,
    SingleStaRB,
  },
  computed: {},
};
</script>