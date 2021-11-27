<template>
  <div class="stationPredict">
    <div class="stationtime">
      <div class="stationcalendar">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          size="small"
          format="yyyy-M-d"
          value-format="yyyy-M-d"
          @change="datechange()"
          @focus="defaultdata"
        >
        </el-date-picker>
      </div>
      <div class="stationmonth">
        <el-date-picker
          v-model="value2"
          type="month"
          placeholder="选择月"
          size="small"
          value-format="yyyy-M"
          @change="monthchange()"
          @focus="defaultmonth"
        >
        </el-date-picker>
      </div>
      <div class="selectStation">
        <el-select v-model="value" @change="stationchange()" size="small">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="view" ref="view_ref"></div>
    <i
      class="boxswich"
      :class="{
        'el-icon-video-pause': this.moveswitch == true,
        'el-icon-video-play': this.moveswitch == false,
      }"
      @click="changeSwitch"
    ></i>
    <div class="linep" ref="linep_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "Sta126",
      value1: "",
      value2: "",
      options: ["Sta126", "Sta110", "Sta114", "Sta102"],
      moveswitch: true,
      animationswitch: true,
            nowZoomStart: 0,
      nowZoomEnd: 2,
      initSwitch:false,
      sumdata:[],
      predictdata:[],
      futuredata:[],
      markdata:[],
      date:[],
      max:[]
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
      this.moveswitch = !this.moveswitch;
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
    stationchange() {
      if (this.value2 == null || this.value1 == null) {
        this.value2 = "";
        this.value1 = "";
      }
      this.initSwitch=true
      this.drawChart(this.value, this.value1, this.value2);
    },
    drawChart(station, newdate, month) {
      var that = this;
      var mychart = this.$echarts.init(this.$refs.view_ref);
      function getRandom(min, max) {
        //根据最小值和最大值产生一个随机数
        return Math.floor(Math.random() * (max - min) + min);
      }
    var jsonData = require('../../assets/js/data/allview.js');
    var res=jsonData.allview;
        
          var date = [];
          var sumdata = [];
          var predictdata = [];
          var futuredata = [];
          var sta126 = [
            { station: "Sta126", data: "2020/7/16", time: "23", predict: "3" },
            { station: "Sta126", data: "2020/7/17", time: "1", predict: "2" },
            { station: "Sta126", data: "2020/7/17", time: "2", predict: "1" },
          ];
          var sta110 = [
            { station: "Sta110", data: "2020/7/16", time: "17", predict: "3" },
            { station: "Sta110", data: "2020/7/16", time: "20", predict: "4" },
            { station: "Sta110", data: "2020/7/16", time: "23", predict: "6" },
          ];
          var markdata = [];
          var max = 0;
          if (newdate != "") {
            newdate = newdate.split("-");
            newdate = newdate[0] + "/" + newdate[1] + "/" + newdate[2];
            res
              .filter((item) => item.station == station && item.data == newdate)
              .forEach((item) => {
                console.log(item.data);
                date.push(item.data + "-" + item.time + "点");
                sumdata.push(item.real);
                if (item.predict != null) {
                  max =
                    max > parseInt(item.predict) ? max : parseInt(item.predict);
                  predictdata.push(item.predict);
                }
              });

            max = max - 5;

            res
              .filter((item) => item.station == station && item.data == newdate)
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
                  item.station == station &&
                  item.data.split("/")[0] + "/" + item.data.split("/")[1] ==
                    month
              )
              .forEach((item) => {
                date.push(item.data + "-" + item.time + "点");
                sumdata.push(item.real);
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
                  item.station == station &&
                  item.data.split("/")[0] + "/" + item.data.split("/")[1] ==
                    month
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
              .filter((item) => item.station == station)
              .forEach((item) => {
                date.push(item.data + "-" + item.time + "点");
                sumdata.push(item.real);
                if (item.predict != null) {
                  max =
                    max > parseInt(item.predict) ? max : parseInt(item.predict);
                  predictdata.push(item.predict);
                }
              });

            max = max - 5;

            res
              .filter((item) => item.station == station)
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
          }

          var option = {
            title: {
              text: "站点客流预测分析",
              x: "center",
              y: "2%",
              left: "30%",
              textStyle: {
                color: "#ffffff",
                fontSize: 20,
                fontWeight: "normal",
              },
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
              },
              /*               formatter: function(list) {
                  var msg = "";
                  for (let i in list) {
                      if (i == 0) {
                          msg += list[i].name + "<br>";
                      }
                      msg += list[i].seriesName + "：" + list[i].data + "万元<br>";
                      if (i > 0 && list[i].seriesName == "不可用余额" && list[i - 1].seriesName == "可用余额") {
                          msg += "总存款余额" + "：" + (list[i].data + list[i - 1].data) + "万元<br>";
                      }
                      if (i > 0 && list[i].seriesName == "支出" && list[i - 1].seriesName == "收入") {
                          msg += "净收入" + "：" + (list[i - 1].data - list[i].data) + "万元<br>";
                      }
                  }
                  return msg;
              } */
            },
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
                end: 2,
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
            legend: {
              textStyle: {
                color: "#fff",
              },
              itemWidth: 8,
              itemHeight: 8,
              data: ["实际人数", "预测人数", "未来预测"],
              top: 36,
              left: 10,
            },
            grid: {
              width: "93%",
              height: "73%",
              top: "20%",
              left: "3%",
              right: "3%",
              bottom: "10%",
              containLabel: true,
            },
            visualMap: [
              {
                top: 50,
                right: 10,
                show: false,
                pieces: [
                  {
                    min: max,
                    max: 100000,
                    color: "#d90b27",
                  },
                ],

                seriesIndex: 4,
                textStyle: {
                  color: "#dfdfdf",
                },
                outOfRange: {
                  color: "#ff999a",
                },
              },
              {
                top: 50,
                right: 10,
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
                  color: "#0088D4",
                },
              },
              {
                top: 50,
                right: 10,
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
                  color: "#974be3",
                },
              },
            ],
            xAxis: {
              type: "category",
              axisLine: {
                lineStyle: {
                  color: "#cfcfcf",
                  width: 2,
                },
              },
              data: date,
            },
            yAxis: {
              axisLine: {
                lineStyle: {
                  color: "#cfcfcf",
                  width: 2,
                },
              },
              splitLine: {
                //分割线配置
                lineStyle: {
                  color: "#AAAAAA56",
                },
              },
            },
            series: [
              {
                type: "bar",

                barMaxWidth: 30,
                data: sumdata,
                tooltip: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      1,
                      0,
                      0,
                      [
                        {
                          offset: 1,
                          color: "#00ffff", // 0% 处的颜色
                        },
                        {
                          offset: 0,
                          color: "#3893e5", // 100% 处的颜色
                        },
                      ],
                      false
                    ),
                  },
                },
              },

              {
                name: "实际人数",
                data: sumdata,
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
                itemStyle: {
                  normal: {
                    color: "#0088D4",
                  },
                },
              },
              {
                name: "预测人数",
                data: predictdata,
                type: "line",
                smooth: true,
                itemStyle: {
                  normal: {
                    color: "#974be3",
                  },
                },
              },
              {
                name: "未来预测",
                data: futuredata,
                type: "line",
                smooth: true,
                itemStyle: {
                  normal: {
                    color: "#00c760",
                  },
                },
              },
            ],
          };
          setTimeout(mychart.setOption(option), 500);
          // mychart.setOption(option);
          that.max=max
                that.markdata=markdata
                  that.sumdata=sumdata
        that.predictdata=predictdata
                that.futuredata=futuredata
                that.date=date
          if (that._data.animationswitch == true) {
            setInterval(function () {
              mychart.on("datazoom", (params) => {
              that.nowZoomEnd = params.end;
              that.nowZoomStart = params.start;
              
            });
              var t = that._data.moveswitch;

              if (that._data.animationswitch == true) {
                that._data.animationswitch = false;
              }

              if (t) {
                // 每次向后滚动一个，最后一个从头开始。
                 if (option.dataZoom[0].end > 99||that.initSwitch) {
                that.initSwitch=false
                option.dataZoom[0].end = 2;
                option.dataZoom[0].start = 0;
                that.nowZoomEnd = option.dataZoom[0].end;
                that.nowZoomStart = option.dataZoom[0].start;
              } else {
                option.dataZoom[0].end = that.nowZoomEnd + 0.05;
                option.dataZoom[0].start = that.nowZoomStart + 0.05;
                that.nowZoomEnd = option.dataZoom[0].end;
                that.nowZoomStart = option.dataZoom[0].start;
              }
              option.visualMap[0].pieces[0].min=that.max
              option.visualMap[1].pieces[0].min=that.max
              option.visualMap[2].pieces[0].min=that.max
              option.series[1].markLine.data[0].yAxis=that.max
              option.xAxis.data=that.date
              option.series[1].markPoint.data=that.markdata
              option.series[0].data=that.sumdata
              option.series[1].data=that.sumdata
              option.series[2].data=that.predictdata
              option.series[3].data=that.futuredata
              mychart.setOption(option);
              }
            }, 2000); 
          }

          window.addEventListener("resize", function () {
            mychart.resize();
          });
        
    },
  },
};
</script>

<style >


.boxswich {
  position: absolute;
  right: 87%;
  bottom: 5%;
  z-index: 9999;
  font-size: 20px;
  cursor: pointer;
}
.stationPredict {
  width: 100%;
  height: 100%;
}
.view {
  width: 100%;
  height: 95%;
}
.stationtime {
  width: 100%;
  height: 5%;
  z-index: 100;
  position: absolute;
  margin-top: 3%;
  margin-left: 54%;
}
.stationcalendar {
  width: 35%;
  height: 100%;
  /* position: relative; */
  /* margin-left: 200px; */
}
.stationmonth {
  width: 30%;
  height: 100%;
  margin-left: 105px;
  position: absolute;
  top: 0px;
}
.selectStation {
  width: 13%;
  height: 100%;
  margin-left: 205px;
  position: absolute;
  top: 0px;
}
.el-input__inner {
    background-color: #131e35e6;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #e4e7ed;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 120px;
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
