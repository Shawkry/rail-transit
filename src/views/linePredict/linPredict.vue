<template>
  <div class="line">
    <div class="linetime">
      <div class="linecalendar">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          size="small"
          format="yyyy-M-d"
          value-format="yyyy-M-d"
          @change="datechange()"
          @focus="defaultdata()"
        >
        </el-date-picker>
      </div>
      <div class="linemonth">
        <el-date-picker
          v-model="value2"
          type="month"
          placeholder="选择月"
          size="small"
          value-format="yyyy-M"
          @change="monthchange()"
          @focus="defaultmonth()"
        >
        </el-date-picker>
      </div>
      <div class="selectline">
        <el-select v-model="value" @change="linechange()" size="small">
          <el-option v-for="item in options" :key="item" :value="item">
          </el-option>
        </el-select>
      </div>
    </div>
    <i
      class="boxswich"
      :class="{
        'el-icon-video-pause': this.moveswitch2 == true,
        'el-icon-video-play': this.moveswitch2 == false,
      }"
      @click="changeSwitch"
    ></i>
    <div class="linep" ref="linep_ref"></div>
  </div>
</template>

<script>
export default {
  name: "linePredict",
  data() {
    return {
      value: "1号线",
      value1: "",
      value2: "",
      options: ["1号线", "2号线", "3号线", "5号线", "12号线"],
      moveswitch2: true,
      animationswitch2: true,
      nowZoomStart: 0,
      nowZoomEnd: 5,
      initSwitch:false,
      historydata:[],
      predictdata:[],
    };
  },
  created() {
    this.value = this.options[0];
  },
  mounted() {
    this.drawChart(this.value, this.value1, this.value2);
  },
  methods: {
    defaultdata() {
      this.value1 = "2020-1-1";
    },
    defaultmonth() {
      this.value2 = "2020-1";
    },

    changeSwitch() {
      this.moveswitch2 = !this.moveswitch2;
    },
    datechange() {
      this.value2 = "";
      this.initSwitch=true
      this.drawChart(this.value, this.value1, this.value2);
    },
    monthchange() {
      this.value1 = "";
      this.initSwitch=true
      this.drawChart(this.value, this.value1, this.value2);
    },
    linechange() {
      if (this.value2 == null || this.value1 == null) {
        this.value2 = "";
        this.value1 = "";
      }
      this.initSwitch=true
      this.drawChart(this.value, this.value1, this.value2);
    },

    drawChart(line, newdate, month) {
      var that = this;
      var mychart = this.$echarts.init(this.$refs.linep_ref);
     var jsonData = require('../../assets/js/data/linepredict.js');
     var res=jsonData.linepredict;
        var date = [];
        var historydata = [];
        var predictdata = [];
        var markdata = [];
        var max;
        if (newdate != "") {
          newdate = newdate.split("-");
          newdate = newdate[0] + "/" + newdate[1] + "/" + newdate[2];
          res
            .filter((item) => item.line == line && item.data == newdate)
            .forEach((item) => {
              date.push(item.data + "-" + item.time + "点");
              historydata.push(item.real);

              if (item.predict != null) {
                max =
                  max > parseInt(item.predict) ? max : parseInt(item.predict);
                predictdata.push(item.predict);
              }
            });
          max = max - 5;

          res
            .filter((item) => item.line == line && item.data == newdate)
            .forEach((item) => {
              if (item.real >= max) {
                markdata.push({
                  value: item.real,
                  coord: [item.data + "-" + item.time + "点", item.real],
                });
              }
              if (item.predict >= max) {
                markdata.push({
                  name: item.data + "-" + item.time + "点",
                  value: item.predict,
                  coord: [item.data + "-" + item.time + "点", item.predict],
                });
              }
            });
        } else if (month != "") {
          month = month.split("-");
          month = month[0] + "/" + month[1];
          res
            .filter(
              (item) =>
                item.line == line &&
                item.data.split("/")[0] + "/" + item.data.split("/")[1] == month
            )
            .forEach((item) => {
              date.push(item.data + "-" + item.time + "点");
              historydata.push(item.real);
              if (item.predict != null) {
                max =
                  max > parseInt(item.predict) ? max : parseInt(item.predict);
                predictdata.push(item.predict);
              }
            });

          max = max - 5;

          res
            .filter(
              (item) =>
                item.line == line &&
                item.data.split("/")[0] + "/" + item.data.split("/")[1] == month
            )
            .forEach((item) => {
              if (item.real >= max) {
                markdata.push({
                  value: item.real,
                  coord: [item.data + "-" + item.time + "点", item.real],
                });
              }
              if (item.predict >= max) {
                markdata.push({
                  name: item.data + "-" + item.time + "点",
                  value: item.predict,
                  coord: [item.data + "-" + item.time + "点", item.predict],
                });
              }
            });
        } else {
          res
            .filter((item) => item.line == line)
            .forEach((item) => {
              date.push(item.data + "-" + item.time + "点");
              historydata.push(item.real);
              if (item.predict != null) {
                max =
                  max > parseInt(item.predict) ? max : parseInt(item.predict);
                predictdata.push(item.predict);
              }
            });

          max = max - 5;

          res
            .filter((item) => item.line == line)
            .forEach((item) => {
              if (item.real >= max) {
                markdata.push({
                  name: item.data + "-" + item.time + "点",
                  value: item.real,
                  coord: [item.data + "-" + item.time + "点", item.real],
                });
              }
              if (item.predict >= max) {
                markdata.push({
                  name: item.data + "-" + item.time + "点",
                  value: item.predict,
                  coord: [item.data + "-" + item.time + "点", item.predict],
                });
              }
            });
        }
        var option = {
          title: {
            text: "线路的客流预测分析",
            x2: "28%",
            y: "2%",
            textStyle: {
              color: "#ffffff",
              fontSize: 20,
              fontWeight: "normal",
            },
          },
          textStyle: {
            fontFamily: "黑体",
          },
          color: [
            "#123dac",
            "#73e2e2",
            "#ff7e85",
            "#fac524",
            "#9b52ff",
            "#46caff",
            "#a1e867",
            "#10b2b2",
            "#ec87f7",
            "#f4905a",
            "#00baba",
            "#facf24",
            "#e89d67",
            "#23c6c6",
            "#fa8699",
            "#40b7fc",
            "#006d75",
            "#595959",
            "#f4764f",
            "#a640fc",
            "#fda23f",
            "#2d7ae4",
            "#5092ff",
            "#9351ed",
            "#8a89fe",
            "#df89e8",
            "#2797ff",
            "#6ad089",
            "#7c92e8 ",
          ],

          legend: {
            data: [
              {
                name: "实际人数",
                icon:
                  "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z",
              },
              {
                name: "未来预测",
                icon:
                  "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z",
              },
              {
                name: "实际预测",
                icon:
                  "path://M512 139.81262864a286.42534744 286.42534744 0 1 0 286.42534744 286.42534744 286.42534744 286.42534744 0 0 0-286.42534744-286.42534744z m0 477.3755789a190.95023144 190.95023144 0 1 1 190.95023144-190.95023146 190.95023144 190.95023144 0 0 1-190.95023144 190.95023146z",
              },
            ],
            left: "left",
            selected: {
              实际人数: true,
              未来预测: true,
              实际预测: true,
            },
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 10,
            textStyle: {
              color: "#cfcfcf",
              lineHeight: 15,
            },
            type: "scroll",
            top: "11%",
            left: "66%",
          },
          visualMap: [
            {
              top: 50,
              right: 0,
              show: false,
              pieces: [
                {
                  min: max,
                  max: 100000,
                  color: "#d90b27",
                },
              ],

              seriesIndex: 0,
              textStyle: {
                color: "#dfdfdf",
              },
              outOfRange: {
                color: "#123dac",
              },
            },
            {
              top: 50,
              right: 0,
              show: false,
              pieces: [
                {
                  min: max,
                  max: 100000,
                  color: "#d90b27",
                },
              ],

              seriesIndex: 1,
              textStyle: {
                color: "#dfdfdf",
              },
              outOfRange: {
                color: "#73e2e2",
              },
            },
            {
              top: 50,
              right: 0,
              show: false,

              pieces: [
                {
                  min: max,
                  max: 100000,
                  color: "#d90b27",
                },
              ],

              seriesIndex: 2,
              textStyle: {
                color: "#dfdfdf",
              },
              outOfRange: {
                color: "#ff7e85",
              },
            },
          ],
          dataZoom: [
            {
              show: true,
              realtime: true,
              z: 100,
              height: 20,
              width: "70%",
              bottom: 5,
              left: "center",
              containLabel: true,
              start: 0,
              end: 5,
              startValue: 0,
              endValue: 10,
              
            },
            {
              type: "inside",
              realtime: true,
              zoomOnMouseWheel:false,
              moveOnMouseMove:false,
              start: 0,
              end: 100,
            },
            
          ],
          tooltip: {
            backgroundColor: "#fff",
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              label: {
                backgroundColor: "#eee",
              },
            },
            textStyle: {
              color: "#565656",
              lineHeight: 28,
            },
            confine: true,
            padding: 12,
            extraCssText:
              "box-shadow: 0px 2px 8px 0px #cacaca;border-radius: 4px;opacity: 0.9;max-height: 100%;",
            formatter: {
              _custom: {
                type: "function",
                display: "<span>ƒ</span> (params)",
              },
            },
          },
          grid: {
            width: "94%",
            height: "72%",
            top: "20%",
            left: "3%",
            right: "3%",
            bottom: "7%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            boundaryGap: true,
            data: date,
            z: 10,
            axisLabel: {
              color: "#cfcfcf",
              //X轴标签 label 做了特殊处理，防止左右溢出
              formatter: (value, index) => {
                if (index === 0 || index === date.length - 1) {
                  return "";
                }
                return value;
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          yAxis: {
            name: "",
            nameTextStyle: {
              color: "gray",
            },
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#cfcfcf",
              },
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
              },
            },
            // "minInterval": 1,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            {
              name: "实际人数",
              data: historydata,
              z: 5,
              markLine: {
                containLabel: true,
                silent: true,
                lineStyle: {
                  color: "#c7240e",
                },
                data: [
                  {
                    yAxis: max,
                  },
                ],
              },
              markPoint: {
                zeel: 1000,
                data: markdata,
                symbol: "pin",
                itemStyle: {
                  color: "#ff0000", //标志颜色
                },
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff",
                    fontSize: 8,
                  },
                  formatter: function (params) {
                    return "超额预警" + "\n人数" + params.value;
                  },
                },
              },
              type: "line",
              smooth: true,
              smoothMonotone: "x",
              cursor: "pointer",
              showSymbol: false,
              lineStyle: {
                shadowColor: "rgba(18,61,172,0.5)",
                shadowBlur: 10,
              },
              areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(5, 201, 211, 0.7)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(9,188,183,0.01)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0,0,0,0.01)",
                shadowBlur: 10,
              },
            },
            {
              name: "未来预测",
              data: [],
              z: 5,
              type: "line",
              smooth: true,
              smoothMonotone: "x",
              cursor: "pointer",
              showSymbol: false,
              lineStyle: {
                shadowColor: "rgba(115,226,226,0.5)",
                shadowBlur: 10,
              },
              areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(151, 227, 227, 0.7)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(9,188,183,0.01)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0,0,0,0.01)",
                shadowBlur: 10,
              },
            },
            {
              name: "实际预测",
              data: predictdata,
              z: 5,
              type: "line",
              smooth: true,
              smoothMonotone: "x",
              cursor: "pointer",
              showSymbol: false,
              lineStyle: {
                shadowColor: "rgba(255,126,133,0.5)",
                shadowBlur: 10,
              },
              areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(255, 189, 156, 0.7)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(9,188,183,0.01)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0,0,0,0.01)",
                shadowBlur: 10,
              },
            },
          ],
        };
        mychart.setOption(option);
        that.historydata=historydata
        that.predictdata=predictdata

        if (that._data.animationswitch2 == true) {
          setInterval(function () {
            mychart.on("datazoom", (params) => {
              that.nowZoomEnd = params.end;
              that.nowZoomStart = params.start;
              
            });
           
            var t = that._data.moveswitch2;
            if (that._data.animationswitch2 == true) {
              that._data.animationswitch2 = false;
            }
            if (t) {
              
              
              // 每次向后滚动一个，最后一个从头开始。
              if (option.dataZoom[0].end > 99||that.initSwitch) {
                that.initSwitch=false
                option.dataZoom[0].end = 5;
                option.dataZoom[0].start = 0;
                that.nowZoomEnd = option.dataZoom[0].end;
                that.nowZoomStart = option.dataZoom[0].start;
              } else {
                option.dataZoom[0].end = that.nowZoomEnd + 0.1;
                option.dataZoom[0].start = that.nowZoomStart + 0.1;
                that.nowZoomEnd = option.dataZoom[0].end;
                that.nowZoomStart = option.dataZoom[0].start;
              }
              option.series[0].data=that.historydata
              option.series[2].data=that.predictdata
              mychart.setOption(option);
            }
          }, 1500);
        }

        
        window.addEventListener("resize", function () {
          mychart.resize();
        });
    },
  },
};
</script>
<style scoped="scoped">
.boxswich {
  position: absolute;
  right: 87%;
  bottom: 5%;
  z-index: 9999;
  font-size: 20px;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 100%;
}
.linetime {
  width: 100%;
  height: 5%;
  position: absolute;
  z-index: 100;
  right: 20%;
  margin-top: 3%;
  float: left;
}
.linecalendar {
  width: 50%;
  height: 100%;
  /* position: relative; */
  margin-left: 160px;
}
.linemonth {
  width: 50%;
  height: 100%;
  margin-left: 265px;
  position: absolute;
  top: 0px;
}
.selectline {
  width: 12%;
  height: 100%;
  margin-left: 360px;
  position: absolute;
  top: 0px;
}
.linep {
  width: 100%;
  height: 95%;
}
.el-input__inner {
  background-color: #131e35e6;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #e4e7ed;
}
.el-picker-panel {
  color: #dcdfe6;
  border: 1px solid #e4e7ed;
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
  border-bottom: solid 1px #ebeef5;
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
.el-month-table td .cell {
  width: 60px;
  height: 36px;
  display: block;
  line-height: 36px;
  color: #dcdfe6;
  margin: 0 auto;
  border-radius: 18px;
}
</style>
