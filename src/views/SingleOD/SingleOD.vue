<template>
  <div class="com-container">
    <div style="width:60% height: 100%; margin-left: 270px; margin-top: 3%; margin-bottom: 1%;		font-size: 13px;font-family: '黑体';">
<!--       <el-dropdown size="mini">
        <span class="el-dropdown-link"> -->
          <font class="txt1">线路OD客流 </font>
         <el-select v-model="one" @change="changeline(one)" size="mini">
				    <el-option
				      v-for="item in lineList"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
				  </el-select>

	  <div class="btn1"><input id="selectall" type="button" v-model="value" ref="btnclick" /></div>
    </div>
   
  
    <div
      style="width: 100%; height: 93%;  padding-right: 0px"
      ref="SingleOD_ref"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lineList: [],
      one: "10号线",
      id: 0,
      value: "全不选",
    };
  },
  created() {
   var jsonData = require('../../assets/js/data/OD.js');
   var res=jsonData.od;
      var Line = res.map((item) => item.line);
      Line = [...new Set(Line)];
      this.lineList = Line;
    
  },
  mounted() {
    this.drawChart(this.id);
  },
  methods: {
    changeline(item) {
      this.one = item;
      this.value = "全不选";
      $("#selectall")
        .unbind("click")
        .click(function () {
          // alert("a") ;
        });
      for (var i = 0; i < this.lineList.length; i++) {
        if (item == this.lineList[i]) {
          this.drawChart(i);
        }
      }
    },
    drawChart(id) {
      var mychart = this.$echarts.init(this.$refs.SingleOD_ref, this.theme);
     var jsonData = require('../../assets/js/data/OD.js');
     var res=jsonData.od;
        var hash = {};
        var i = 0;
        var newdata = [];

        res.forEach(function (item) {
          var line = item.line;
          var inName = item.inName;
          var data = [
            {
              inName: inName,
              outName: item.outName,
              count: item.count,
            },
          ];

          // console.log(instation);
          hash[line]
            ? newdata[hash[line] - 1].data.push(data)
            : (hash[line] =
                ++i &&
                newdata.push({
                  line: line,
                  data: data,
                }));
        });
        var line = res.map((item) => item.line);
        line = [...new Set(line)];
        var legendData = [];
        legendData = res
          .filter((item) => item.line == line[id])
          .map((item) => item.inName);
        legendData = [...new Set(legendData)];
        var max;
        legendData.forEach((station) => {
          var arr = res
              .filter((item) => item.line == line[id] && item.inName == station)
              .map((item) => {
                return item.count;
              }),
            max = arr.reduce(function (a, b) {
              return b > a ? b : a;
            });
        });
        var indicator = [];
        var value = [];
        var dataArr = [];

        var p = [];

        legendData.forEach((station) => {
          indicator.push({
            text: station,
            max: max,
          });

          // value.push(res.filter(item=>item.line=="10号线"&&item.inName==item).map(item=>item.count));
          dataArr.push({
            value: res
              .filter((item) => item.line == line[id] && item.inName == station)
              .map((item) => {
                return item.count;
              }),
            name: station,

            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#4A99FF",
                  // shadowColor: '#4A99FF',
                  // shadowBlur: 10,
                },
                shadowColor: "#4A99FF",
                shadowBlur: 10,
              },
            },
            areaStyle: {
              normal: {
                // 单项区域填充样式
                color: {
                  type: "linear",
                  x: 0, //右
                  y: 0, //下
                  x2: 1, //左
                  y2: 1, //上
                  colorStops: [
                    {
                      offset: 0,
                      color: "#4A99FF",
                    },
                    {
                      offset: 0.5,
                      color: "rgba(0,0,0,0)",
                    },
                    {
                      offset: 1,
                      color: "#4A99FF",
                    },
                  ],
                  globalCoord: false,
                },
                opacity: 1, // 区域透明度
              },
            },
          });
        });

        var option = {
/*           title: {
            show: false,
            text: "线路OD",
            x: "4%",

            textStyle: {
              color: "#fff",
              fontSize: "22",
            },
            subtextStyle: {
              color: "#90979c",
              fontSize: "16",
            },
          }, */
          grid: {
            left: 0,
            x: 0,
            top:'70%',
		      	bottom:10,
            containLabel: true,
          },

          tooltip: {
            trigger: "item",
            confine: true,
            position: function (point, params, dom, rect, size) {
              return [point[1], 0];
            },
            // formatter: function(params) {
            // 	let res = params[0].axisValueLabel;
            
            // 	function getHtml(param) {
            // 		let str = '<div style="float: left"><span style="background: ' + param.color +
            // 			'; width: 11px; height: 11px; border-radius: 11px;float: left; margin: 5px 3px;"></span>' +
            // 			param.seriesName + ':' + param.data + '&emsp;&emsp;</div>';
            // 		return str;
            // 	}
            
            // 	let flag = false;
            // 	res += '<div style="clear: both">';
            // 	for (let i = 0; i < params.length; i++) {
            // 		res += getHtml(params[i]);
            // 		if (params.length > 11 && i % 2 == 1) {
            // 			res += '</div><div style="clear: both">';
            // 		}
            // 		if (params.length <= 11) {
            // 			res += '</div><div style="clear: both">';
            // 		}
            // 	}
            // 	res += "</div>";
            // 	return res;
            // }
            
          },
          legend: {
            orient: "vertical",
            icon: "circle", //图例形状
            data: legendData,
            // left:200,

            bottom: 40,
            right: 20,
            itemWidth: 12, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 10, // 图例标记的图形高度。[ default: 14 ]
            itemGap: 13, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
              fontSize: 12,
              color: "#00E4FF",
            },
          },
          radar: {
            // shape: 'circle',
            radius: "70%",
            splitNumber: 6,
            name: {
              textStyle: {
                color: "#fff",
                fontSize: 12,
              },
            },
            indicator: indicator,
            center: ["30%", "45%"],
            splitArea: {
              // 坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: true,
              areaStyle: {
                // 分隔区域的样式设置。
                color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
              },
            },
            axisLine: {
              //指向外圈文本的分隔线样式
              lineStyle: {
                color: "#153269",
              },
            },
            splitLine: {
              lineStyle: {
                color: "gray", // 分隔线颜色
                width: 1, // 分隔线线宽
              },
            },
          },

          series: [
            {
              type: "radar",
              symbolSize: 3,

              // symbol: 'angle',
              data: dataArr,
            },
          ],
        };
        mychart.setOption(option, true);
        // 使用刚指定的配置项和数据显示图表

        mychart.getOption().tooltip = {
          confine: true,
          trigger: "item",
          formatter: function (params) {
            let relVal = params.name;
            let typeList = _this.warningDetailData;
            for (let i = 0; i < params.data.value.length; i++) {
              relVal +=
                "<br/>" +
                typeList[i]["measureDimensionName"] +
                " : " +
                params.data.value[i] +
                " " +
                "分";
            }
            return relVal;
          },
        };
        var selectArr = legendData;
      $('#selectall').click(function() {
      
      	var val = false;
      	var obj = {};
      	var flag = $(this).attr('value');
      	if (flag == '全不选') {
      		val = false;
      		// $(this).attr('flag', 0);
      		for (var key in selectArr) {
      			obj[selectArr[key]] = val;
      		}
      		this.value = '全选中';
      	} else {
      		val = true;
      		// $(this).attr('flag', 1);
      		this.value = '全不选';
      		for (var key in selectArr) {
      			obj[selectArr[key]] = val;
      		}
      		// $(this).val('全不选');
      	}
      
      
      	option.legend.selected = obj;
      	mychart.setOption(option, true);
      });
     
      window.addEventListener("resize", function () {
        mychart.resize();
      });
    },
  },
};
</script>

<style scoped="">
#selectall{
  display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #13111147;
    border: 1px solid #DCDFE6;
    color: #dcdfe6;
        padding: 7px 15px;
            font-size: 12px;
    border-radius: 3px;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
}
.el-input__inner{
  width:90px;
}
.btn1{
	z-index: 99999;
  right: 8%;
  top: 6%;
  position: absolute;
}
</style>
