<template>
  <div class="singleStaRT" ref="singleStaRT_ref"></div>
</template>

<style scoped lang="less">
.singleStaRT {
  height: 100%;
  width: 100%;
  //background-color: #1816889c;
}
</style>
<script>
export default {
  data() {
    return {
      staname: "",
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var myChart = this.$echarts.init(this.$refs.singleStaRT_ref, this.theme);


     var jsonData = require('../../../assets/js/data/SingleStationMonth.js');
     var res=jsonData.singlestationmonth;
     
        this.staname=this.$parent.$route.query.name;
        const sta = res.map(item => item.sta);
        const indataSum = res.map(item => item.indata);
        const outdataSum = res.map(item => item.outdata);
        var indata=[1, 4, 2, 5, 1, 2, 1, 4,];
        var outdata=[0, 1, 1, 3, 8, 2,3,6,];
        for(let i=0;i<sta.length;i++){
          if(sta[i]==this.staname){
              indata = indataSum.slice(i,i+8);
              outdata = outdataSum.slice(i,i+8);
            break;
          }
        }

        var option = {
          //backgroundColor: "#01004C",
          title: {
            text: "站点每月客流",
            textStyle: {
              color: "#fff",
              fontSize: 18,
              fontFamily: '黑体'
            },
          },
          grid:{
          height:'60%',
          width:'85%',
          },
          
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["进站人数", "出站人数"],
            textStyle: {
              color: "#fff",
            },
            x2:'10%',y:'2%'
          } /*
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },*/,
          calculable: true,
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: [
                "12月",
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                
              ],
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#ffffff", //X轴文字颜色
                  fontSize: 10,
                },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              axisLabel: {
                formatter: "{value} ",
                color: "#ffffff",
                textStyle: {
                  fontSize: 10,
                },
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#ccc",
                },
              },
            },
          ],
          series: [
            {
              name: "进站人数",
              type: "line",
              data: indata,
              lineStyle: {
                normal: {
                  width: 8,
                  color: {
                    type: "linear",

                    colorStops: [
                      {
                        offset: 0,
                        color: "#57BD9F", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#19BC8C", // 100% 处的颜色
                      },
                    ],
                    globalCoord: false, // 缺省为 false
                  },
                  shadowColor: "rgba(72,216,191, 0.3)",
                  shadowBlur: 6,
                  shadowOffsetY: 10,
                },
              },
              itemStyle: {
                normal: {
                  color: "#57BD9F",
                  borderWidth: 10,
                  borderColor: "#57BD9F",
                },
              },
              markPoint: {
                data: [
                  {
                    type: "max",
                    name: "最大值",
                  },
                  {
                    type: "min",
                    name: "最小值",
                  },
                ],
              },
            },
            {
            name: '出站人数',
            type: 'line',
            data: outdata,
            lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#7597EB' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#638BEE' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#7597EB',
                    borderWidth: 10,
                    borderColor: "#7597EB"
                }
            },
             markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
           
        }
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
						myChart.resize();
				});
      
    },
  },
};
</script>