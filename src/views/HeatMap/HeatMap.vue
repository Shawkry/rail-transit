<template>
  <div class="screen-container">
    <header class="screen-header">
      <div>
        <img src="~assets/img/header_border_dark.png" alt="" />
      </div>
      <span class="title">轨道交通大数据分析平台</span>
      <div class="title-left">
                <el-button-group>
          <router-link to="/Home/MapPage"><el-button type="primary" size="mini">主页</el-button></router-link>
          <router-link to="/Analysis"><el-button type="primary" size="mini">客流空间分析</el-button></router-link>
          <router-link to="/Forecast"><el-button type="primary" size="mini">预测分析</el-button></router-link>
        </el-button-group>
      </div>
      <div class="title-right">
        <span class="datetime"><istime></istime></span>
      </div>
    </header>
    <div class="screen-body">
      <section class="screen-left">
        <div id="left-top">
          <Month></Month>
        </div>
        <div id="left-bottom">
          <MonthlyDay></MonthlyDay>
        </div>
      </section>
      <section class="screen-middle">
        <div id="middle-top"></div>
        <div id="middle-bottom" v-if="isReloadData">
          <Peakmap></Peakmap>
        </div>
      </section>
      <section class="screen-right">
        <div id="right-top">
          <WorkandWeek></WorkandWeek>
        </div>
        <div id="right-top">
          <Peak ref="Peak"></Peak>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import istime from "components/common/istime";
import Map from "views/Map/Map.vue";
import WorkandWeek from "../WorkandWeek/WorkandWeek.vue";
import Peak from "../Peak/Peak.vue";
import Peakmap from "../PeakMap/Peakmap.vue";
import MonthlyDay from "../MonthlyDay/MonthlyDay.vue";
import Month from "../Monthly/Month.vue";
export default {
  created() {
    
  },

  data() {
    return {
      isReloadData: true,
     
    };
  },

  methods: {
    reload() {
      this.isReloadData = false;
      this.$nextTick(() => {
        this.isReloadData = true;
      });
    },
   
  },
  components: {
    Map,
    istime,
    WorkandWeek,
    Peak,
    Peakmap,
    Month,
    MonthlyDay,
  },
  computed: {
   
  },
};
</script>
<style lang="less" scoped>
	.title-left {
		display: flex;
		align-items: center;
		position: absolute;
		left: 0px;
		top: 60%;
		width: 40%;
		transform: translateY(-80%);
	}
.screen-container {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: #161522;
  color: #fff;
  box-sizing: border-box;
  background-size: cover;
}
.screen-header {
  width: 100%;
  height: 8%;
  font-size: 20px;
  position: relative;
  > div {
    img {
      width: 100%;
    }
  }
  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
    font-family: '黑体';
  }

  .title-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-80%);
  }
  .qiehuan {
    width: 28px;
    height: 21px;
    cursor: pointer;
  }
  .datetime {
    font-size: 15px;
    margin-left: 10px;
  }
  .logo {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-80%);
    img {
      height: 35px;
      width: 128px;
    }
  }
}
.screen-body {
  width: 100%;
  height: 90%;
  display: flex;
  // margin-top: 10px;
  .screen-left {
    height: 100%;
    width: 28%;
    #left-top {
      height: 50%;
      position: relative;
	  background-image: url(../../assets/img/26.png);
	  background-size: 100% 100%;
   
    }
    #left-bottom {
      height: 49%;
      margin-top: 1%;
      position: relative;
      background-image: url(../../assets/img/26.png);
      background-size: 100% 100%;
      //background-image:  url(../../assets/img/a.png);
    }
  }
  .screen-middle {
    height: 100%;
    width: 43%;
   margin-left: 0.5%;
   margin-right: 0.5%;
    #middle-bottom {
  
      width: 100%;
      height: 98%;
	 
      position: relative;
	  z-index: 100;
	  border:2px solid #76bada;
      background:  linear-gradient(#76bada, #76bada) left top,
      		linear-gradient(#76bada, #76bada) left top,
      		linear-gradient(#76bada, #76bada) right top,
      		linear-gradient(#76bada, #76bada) right top,
      		linear-gradient(#76bada, #76bada) left bottom,
      		linear-gradient(#76bada, #76bada) left bottom,
      		linear-gradient(#76bada, #76bada) right bottom,
      		linear-gradient(#76bada, #76bada) right bottom;
   background-repeat: no-repeat;
   	background-size: 5px 50px, 50px 5px;
    
    }
  }
  .screen-right {
    height: 100%;
    width: 28%;
    #right-top {
      width: 100%;
      height: 50%;
      position: relative;
      background-image: url(../../assets/img/27.png);
     background-size: 100% 100%;
    }
    #right-bottom {
      margin-top: 2%;
      height: 48%;
      position: relative;
      background-image: url(../../assets/img/27.png);
	   background-size: 100% 100%;
    }
  }
}
</style>
<style>
	.el-button {
	    display: inline-block;
	    line-height: 1;
	    white-space: nowrap;
	    cursor: pointer;
	    background: #13111147;
	    border: 1px solid #DCDFE6;
	    color: #dcdfe6;
	}
  	.el-button:hover{
		background-color: #27395c
	}
</style>