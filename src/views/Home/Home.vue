<template>
  <div class="screen-container">
    <header class="screen-header">
      <div>
        <img src="~assets/img/header_border_dark.png" alt="" />
      </div>
      <span class="title">轨道交通大数据分析平台</span>

      <div class="title-right">
        <span class="datetime"><istime></istime></span>
      </div>
    </header>
    <div class="screen-body">
      <section class="screen-left">
        <div id="left-top">
          <Station></Station>
        </div>
        <div id="left-bottom">
          <Lines></Lines>
        </div>
      </section>
      <section class="screen-middle">
        <div id="middle-top">
          <SiderBar></SiderBar>
        </div>
        <div id="middle-bottom">
          <router-view v-if="update"></router-view>
        </div>
      </section>
      <section class="screen-right">
        <div id="right-top">
          <Age ref="Age"></Age>
        </div>
        <div id="right-bottom">
          <Other2 ref="Other"></Other2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Age from "views/Age/Age.vue";
import istime from "components/common/istime";
import Map from "views/Map/Map.vue";
import Station from "views/Station/Station.vue";
import Other2 from "views/Other/Other2.vue";
import SiderBar from "views/SiderBar/SiderBar.vue";
import Lines from "views/lines/lines.vue";
export default {
  data() {
    return {
      update: true,
    };
  },

  methods: {
    reload() {
      // 移除组件
      this.update = false;
      // 在组件移除后，重新渲染组件
      // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
      this.$nextTick(() => {
        this.update = true;
      });
    },
  },
  components: {
    Age,
    Map,
    Station,
    SiderBar,
    istime,
    Other2,
    Lines,
  },
};
</script>
<style lang="less" scoped>
.title-left {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0px;
  top: 30px;
  transform: translateY(-80%);
}
.screen-container {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  background-color: #121b30;
  color: #fff;
  box-sizing: border-box;
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
  height: 92%;
  display: flex;
  .screen-left {
    height: 100%;
    width: 23%;

    #left-top {
      height: 55%;
      position: relative;
      border-style: double;
      border-color: #2e7ac79f;
      background-color: #2e7ac733;
    }
    #left-bottom {
      width: 100%;
      height: 40%;
      margin-top: 5%;

      position: relative;
      background-image: url(../../assets/img/26.png);
      background-size: 100% 100%;
    }
  }
  .screen-middle {
    height: 100%;
    width: 52%;
    margin-left: 0.6%;
    margin-right: 0.6%;

    #middle-top {
      width: 100%;
      height: 20%;
      margin-bottom: 1%;
      position: relative;
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
    }
    #middle-bottom {
      width: 100%;
      height: 75%;
      position: relative;
      border: 2px solid #76bada;
      background: linear-gradient(#76bada, #76bada) left top,
        linear-gradient(#76bada, #76bada) left top,
        linear-gradient(#76bada, #76bada) right top,
        linear-gradient(#76bada, #76bada) right top,
        linear-gradient(#76bada, #76bada) left bottom,
        linear-gradient(#76bada, #76bada) left bottom,
        linear-gradient(#76bada, #76bada) right bottom,
        linear-gradient(#76bada, #76bada) right bottom;
      background-repeat: no-repeat;
      background-size: 10px 50px, 50px 10px;
    }
  }
  .screen-right {
    height: 100%;
    width: 26%;
    #right-top {
      height: 50%;
      position: relative;
      background-image: url(../../assets/img/27.png);
      background-size: 100% 100%;
    }
    #right-bottom {
      height: 47%;
      margin-top: 2%;
      position: relative;
      background-image: url(../../assets/img/27.png);
      background-size: 100% 100%;
    }
  }
}
</style>
<style>
.el-input__inner{
  width:90px;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
	.el-input__inner {
	  
	    background-color: #131e35e6;
	    background-image: none;
	    border-radius: 4px;
	    border: 1px solid #DCDFE6;
	    box-sizing: border-box;
	    color: #e4e7ed;

	}
</style>
