<template>
  <div class="SingleSection-container">
    <div style="width:100% height: 10%; float: left;">
      <div style="width:60% height: 100%; margin-left: 240px;margin-top: 4%;">
        <font class="txt1" style="font-family: '黑体'">线路截断面客流分析 </font>
        <!--<font style="font-size: large; font-weight: 700">线路断面客流</font>-->
<!--         <el-dropdown size="mini">
          <span class="el-dropdown-link">
            
            <font class="txt2">{{ one }}</font
            ><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in lineList"
              :value="item"
              :key="item"
              @click.native="changeline(item)"
              >{{ item }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown> -->
        				<el-select v-model="value" @change="changeline(value)" size="mini">
				    <el-option
				      v-for="item in lineList"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
				  </el-select>
      </div>
      <div style=" width:40% height: 100%; margin-right: 40px;">
        <!--<select v-model="one" @change="changeline()">
          <option v-for="item in lineList" :value="item" :key="item">
            {{ item }}
          </option>
        </select>-->
      </div>
    </div>

    <div class="com-chart" ref="SingleSection_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineList: [],
      one: "3号线",
      id: 2,
      value:"3号线"
    };
  },
  created() {
   var jsonData = require('../../assets/js/data/singlesection.js');
   var res=jsonData.singlesection;
      var Line = res.map((item) => item.line);
      //console.log(Line);
      Line = [...new Set(Line)];
      this.lineList = Line;
      //console.log("xialu:" + this.lineList);
    
  },
  mounted() {
    this.drawChart(this.id);
  },
  methods: {
    changeline(item) {
      this.one = item;
      for (var i = 0; i < this.lineList.length; i++) {
        //console.log(this.one, this.lineList[i]);
        if (item == this.lineList[i]) {
          this.drawChart(i);
        }
      }
    },
    drawChart(id) {
      var mychart = this.$echarts.init(
        this.$refs.SingleSection_ref,
        this.theme
      );
     var jsonData = require('../../assets/js/data/singlesection.js');
     var res=jsonData.singlesection;
        let Line = res.map((item) => item.line);
        Line = [...new Set(Line)];
        var xAxisData = res
          .filter((item) => item.line == Line[id])
          .map((item) => item.Station);
        xAxisData = [...new Set(xAxisData)];
        var time = res
          .filter((item) => item.line == Line[id])
          .map((item) => item.time);
        time = [...new Set(time)];
        let i = 0;
        var data1 = [];
        var data2 = [];
        var dom = [];
        var p = [];
        // console.log(dom[0]);
        for (i; i < time.length; i++) {
          data1[i] = res
            .filter((item) => item.line == Line[id] && item.time == time[i])
            .map((item) => item.incount);

          data2[i] = res
            .filter((item) => item.line == Line[id] && item.time == time[i])
            .map((item) => -item.outcount);
          // console.log("线路"+Line[id]+"时间" +time[i]+"进站"+data1[i]+"出站"+data2[i]);
          p.push({
            title: {
              text: time[i] + "时",
              subtext: Line[id],
            },
            series: [
              {
                name: "上行流",
                type: "bar",
                stack: "station",
                data: data1[i],
                color: "#5fc7c8",
                emphasis: {
                  focus: "series",
                },
                animationDelay: function (idx) {
                  return idx * 10;
                },
              },
              {
                name: "下行流",
                type: "bar",
                stack: "station",
                data: data2[i],
                color: "#724990",
                emphasis: {
                  focus: "series",
                },
                animationDelay: function (idx) {
                  return idx * 10 + 100;
                },
              },
            ],
            animationEasing: "elasticOut",
            animationDelayUpdate: function (idx) {
              return idx * 5;
            },
          });
          dom[i] = p;
        }
        var option = {
          baseOption: {
            title: {
              text: "线路断面流量",
              textStyle: {
                color: "white",
              },
              x: "center",
              y:30,
            },
            legend: {
              data: ["上行流", "下行流"],
              right: 20,
              y:30,
              textStyle: {
                color: "white",
              },
            },
            timeline: {
              axisType: "category",
              // realtime: false,
              // loop: false,
              autoPlay: true,
              // currentIndex: 2,
              playInterval: 2000,
              // controlStyle: {
              //     position: 'left'
              // },
              color: "white",
              data: time,
            },
            grid: {
              width: '95%',
              height: '62%',
              left:'10px',
              top:60,
              bottom: 60,
              containLabel: true,
            },
            dataZoom: [
              {
                type: "inside",
                realtime: true,
                start: 0,
                end: 100,
              },
            ],
            xAxis: [
              {
                type: "category",
                data: xAxisData,
                //设置轴线的属性
                axisLine: {
                  lineStyle: {
                    color: "#ffffff",
                    // width: 8, //这里是为了突出显示加上的
                  },
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#ffffff", //更改坐标轴文字颜色
                    fontSize: 14, //更改坐标轴文字大小
                  },
                },
              },
            ],
            yAxis: [
              {
                type: "value",
                //设置轴线的属性
                axisLine: {
                  lineStyle: {
                    color: "#ffffff",
                    // width: 8, //这里是为了突出显示加上的
                  },
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#ffffff", //更改坐标轴文字颜色
                    fontSize: 14, //更改坐标轴文字大小
                  },
                },
              },
            ],
            tooltip: {},
          },
          options: dom[id],
        };
        mychart.setOption(option, true);
   
      window.addEventListener("resize", function () {
        mychart.resize();
      });
    },
  },
};
</script>

<style>
	.el-input__inner {
	  
	    background-color: #131e35e6;
	    background-image: none;
	    border-radius: 4px;
	    border: 1px solid #DCDFE6;
	    box-sizing: border-box;
	    color: #e4e7ed;

	}
  .el-select{
    width: 90px;
  }
.txt1 {
  font-size: 140%;
}
.txt2 {
  font-size: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}

.SingleSection-container {
  height: 86%;
  width: 100%;
}
</style>
