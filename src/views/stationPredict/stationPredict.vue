<template>
  <div class="stationMonitor">
    <div class="mycalendar">
      <div class="block">
        <!-- <span class="demonstration">默认</span> -->
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          size="small"
          format="yyyy-MM-dd"
          value-format="yyyy-M-d"
          @change="change()"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="stationp" ref="stationp_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "2020-1-1",
    };
  },
  mounted() {
    this.drawChart(this.value1);
  },
  methods: {
    change() {
      this.drawChart(this.value1);
    },
    drawChart(date) {
      var mychart = this.$echarts.init(this.$refs.stationp_ref);
     var jsonData = require('../../assets/js/data/stationday.js');
     var res=jsonData.stationday;
        var mydate = date.split("-");
        var station = [];
        var futuredata = [];
        var setdata = [];
        var realdata = [];
        var predictdata = [];

        res
          .filter((item) => item.time == mydate[1] && item.data == mydate[2])
          .forEach((item) => {
            station.push(item.name);
            realdata.push(item.sum);
            predictdata.push(item.predict);
          });

        setdata = station.map((item) => (item = 100));

        // option
        var option = {
          title: {
            text: "站点每天客流检测情况",
            x: "center",
            y: "2%",
            textStyle: {
              color: "#ffffff",
              fontSize: 20,
              fontWeight: "normal",
              fontFamily: "黑体",
            },
          },

          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(225, 225, 225, 0.1)",
            textStyle: {
              color: "#ffffff",
              lineHeight: 28,
            },
            axisPointer: {
              type: "shadow",
              label: {
                show: true,
                backgroundColor: "#7B7DDC",
              },
            },
          },
          legend: {
            data: ["实际人数", "计划吞吐量", "预测人数"],
            textStyle: {
              color: "#B4B4B4",
            },
            top: "10%",
          },
          grid: {
            width: "94%",
            height: "81%",
            top: "15%",
            left: "3%",
            right: "3%",
            bottom: "4%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: station,
            axisLine: {
              lineStyle: {
                color: "#cfcfcf",
              },
            },
            axisTick: {
              show: false,
            },
          },
          yAxis: [
            {
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: "#cfcfcf",
                },
              },

              axisLabel: {
                formatter: "{value} ",
              },
            },
            {
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: "#cfcfcf",
                },
              },
              axisLabel: {
                formatter: "{value} ",
              },
            },
          ],

          series: [
            {
              name: "预测人数",
              type: "line",
              smooth: true,
              showAllSymbol: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: "#F02FC2",
                },
              },
              data: predictdata,
            },

            {
              name: "实际人数",
              type: "bar",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#956FD4" },
                    { offset: 1, color: "#3EACE5" },
                  ]),
                },
              },
              data: realdata,
            },

            {
              name: "计划吞吐量",
              type: "bar",
              barGap: "-100%",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(156,107,211,0.5)" },
                    { offset: 0.2, color: "rgba(156,107,211,0.3)" },
                    { offset: 1, color: "rgba(156,107,211,0)" },
                  ]),
                },
              },
              z: -12,

              data: setdata,
            },
          ],
        };
        mychart.setOption(option);
        window.addEventListener("resize", function () {
          mychart.resize();
        });
     
    },
  },
};
</script>

<style scoped>


.stationMonitor {
  width: 100%;
  height: 100%;
}
.stationp {
  width: 100%;
  height: 95%;
}
.mycalendar {
  width: 100%;
  height: 5%;
  z-index: 100;
  position: absolute;
  margin-left: 50px;
  margin-top: 5px;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 130px;
}
.el-input__inner {
    background-color: #131e35e6;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #e4e7ed;
}
.el-picker-panel {
    color: #dcdfe6;
    border: 1px solid #E4E7ED;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    background: #130f0fed;
    border-radius: 4px;
    line-height: 30px;
    margin: 5px 0;
}
.el-date-table th {
    padding: 5px;
    color: #dcdfe6;
    font-weight: 400;
    border-bottom: solid 1px #EBEEF5;
}
.el-date-picker__header-label {
    font-size: 16px;
    font-weight: 500;
    padding: 0 5px;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
    color: #dcdfe6;
}

</style>