<template>
  <div class="com-container">
    <div id="com-age2" class="age2"></div>
    <div id="com-age1" class="age1"></div>
  </div>
</template>

<script>
	import sd from "../../assets/js/data/age.js"
export default {
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var myChart1 = this.$echarts.init(document.getElementById("com-age1"));
	 
var jsonData = require('../../assets/js/data/age.js');
var data=jsonData.age;
     let color = [
         "#0090FF",
         "#36CE9E",
         "#FFC005",
         "#FF515A",
         "#8B5CFF",
         "#00CA69"
     ];
     let echartData = [{
             name: "1",
             value1: 100,
             value2: 233
         },
         {
             name: "2",
             value1: 138,
             value2: 233
         },
         {
             name: "3",
             value1: 350,
             value2: 200
         },
         {
             name: "4",
             value1: 173,
             value2: 180
         },
         {
             name: "5",
             value1: 180,
             value2: 199
         },
         {
             name: "6",
             value1: 150,
             value2: 233
         },
         {
             name: "7",
             value1: 180,
             value2: 210
         },
         {
             name: "8",
             value1: 230,
             value2: 180
         }
     ];
     
     let xAxisData = data.map(item=>item.age);
     
     let yAxisData1 =data.map(item=>item.count);
    
     const hexToRgba = (hex, opacity) => {
         let rgbaColor = "";
         let reg = /^#[\da-f]{6}$/i;
         if (reg.test(hex)) {
             rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
           "0x" + hex.slice(3, 5)
         )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
         }
         return rgbaColor;
     }
     
     var option1 = {
         // backgroundColor: bgColor,
         color: color,
         // legend: {
         //   right: 10,
         //   top: 10
         // },
		 // title:{
			//  text:'年龄结构',
			//  textStyle:{
			// 	  color:'white',
			//  },
			
			//  x:'center'
		 // },
         tooltip: {
             trigger: "axis",
             formatter: function(params) {
                 let html = '';
                 params.forEach(v => {
                     html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                     <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                     ${v.seriesName}.${v.name}
                     <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                     人`;
                 })
                 
         
     
                 return html
             },
             extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
            
         },
         grid: {
              // top:50,
			  botton:50,
			 width:300,
			 height:175,
			 x:20,
			 x2:10,
			y2:10,
             containLabel: true
         },
		 dataZoom: [
		         {
		                    type: 'inside',
		                    xAxisIndex: [0],
		 				     // filterMode: 'filter', 
		                    start:0,
		                    end: 100
		                },
		                {
		                    type: 'inside',
		                    yAxisIndex: [0],
		 				    filterMode: 'empty',
		                    start:0,
		                    end:100
		                }
		    ],
         xAxis: [{
             type: "category",
             boundaryGap: false,
             axisLabel: {
                 formatter: '{value}岁',
                 textStyle: {
                     color: "#ffffff"
                 }
             },
             axisLine: {
                 lineStyle: {
                     color: "#ffffff"
                 }
             },
             data: xAxisData
         }],
         yAxis: [{
             type: "value",
             // name: '单位：人',
             axisLabel: {
                 textStyle: {
                     color: "#ffffff"
                 }
             },
             nameTextStyle: {
                 color: "#ffffff",
                 fontSize: 12,
                 lineHeight: 60
             },
             splitLine: {
                 lineStyle: {
                     type: "dashed",
                     color: "#ffffff"
                 }
             },
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             }
         }],
         series: [ {
             name: "age",
             type: "line",
             smooth: true,
             // showSymbol: false,
             symbolSize: 8,
             zlevel: 5,
             lineStyle: {
                 normal: {
                     color: color[1],
                     shadowBlur: 3,
                     shadowColor: hexToRgba(color[1], 0.5),
                     shadowOffsetY: 8
                 }
             },
             areaStyle: {
                 normal: {
                     color: new this.$echarts.graphic.LinearGradient(
                         0,
                         0,
                         0,
                         1,
                         [{
                                 offset: 0,
                                 color: hexToRgba(color[1], 0.3)
                             },
                             {
                                 offset: 1,
                                 color: hexToRgba(color[1], 0.1)
                             }
                         ],
                         false
                     ),
                     shadowColor: hexToRgba(color[1], 0.1),
                     shadowBlur: 10
                 }
             },
             data: yAxisData1
         }]
     };

      myChart1.setOption(option1);
	
	
      var myChart2 = this.$echarts.init(document.getElementById("com-age2"));
     
        // var img = 'data:image/png;base64,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';
	  
	 
	  //职称结构取数
	  var getname = [ '少年','中年','青年', '老年' ];
	  var getvalue = [280 , 13336,69218,215 ];
	  var data = [];
	  for (var i = 0; i < getname.length; i++) {
	      data.push({
	          name: getname[i],
	          value: getvalue[i]
	      })
	  }
	  var colorList = ['#503EFF', '#3E82FF', '#8BF39A', '#00FCFD'];
	  var rich = {
	      name: {
	          color: "#FFF",
	          fontSize: 15,
	          padding: [10, 15, 0, 10],
	          fontWeight: '400',
	          align: 'left',
			  fontFamily: '黑体'
	      },
	      value: {
	          color: "#FFF",
	          fontSize: 15,
	          padding: [10, 10, 0, 15],
	          fontWeight: '500',
	          align: 'right'
	      },
	      percent: {
	          color: "#FFF",
	          align: 'right',
	          fontSize: 15,
	          fontWeight: '500',
	          //padding: [0, 5]
	      },
	      hr: {
	          width: '100%',
	          height: 0,
	      },
	      cir: {
	          fontSize: 26,
	      }
	  }
	  //职称结构图表
	  
	  var option2 = {
	      // backgroundColor: '#0A1934',
		  title:{
		  			 text:'年龄结构',
		  			 textStyle:{
		  				  color:'white',
						  fontSize:20
		  			 },
		  			y:'bottom',
		  			 x:'center'
		  },
	      tooltip: {
	          trigger: 'axis',
	      },
		  grid:{
			  x2:20,
			  y2:40,
			  top:40
		  },
	      series: [{
	          tooltip: {
	              trigger: 'item',
	              formatter: function(params) {
	                  return params.name + '：' + params.value + '人<br>占比：' + params.percent.toFixed(2) + '%'
	              }
	          },
	          itemStyle: {
	              normal: {
	                  borderColor: '#0A1934',
	                  borderWidth: 3,
	                  color: function(params) {
	                      return colorList[params.dataIndex]
	                  }
	              }
	          },
	          type: 'pie',
	          radius: ['30%', '60%'],
	          center: ["50%", "50%"],
	          label: {
	              normal: {
	                  show: false,
	                  position: 'inner',
	                  formatter: params => {
	                      return (
	                          '{percent|' + params.percent.toFixed(0) + '%}'
	                      );
	                  },
	                  rich: rich,
	              }
	          },
	          data: data
	      }, {
	          itemStyle: {
	              normal: {
	                  borderColor: '#0A1934',
	                  borderWidth: 3,
	                  color: function(params) {
	                      return colorList[params.dataIndex]
	                  }
	              }
	          },
	          type: 'pie',
	          silent: true, //取消高亮
	          radius: ['30%', '50%'],
	          center: ["50%", "50%"],
	          labelLine: {
	              normal: {
	                  length: 10,
	                  length2: 0,
	                  lineStyle: {
	                      color: 'transparent'
	                  }
	              }
	          },
	          label: {
	              normal: {
	  
	                  formatter: params => {
						   return '{name|' + params.name  + params.value + '}\n{hr|————————}';
	                      // return '{name|' + params.name + '}{value|' + params.value + '}\n{hr|————————}';
	                  },
	                  rich: rich,
	                  padding: [-10, 20, 0, 25]
	              }
	          },
	          data: data,
	          z: -1
	      }, {
	          itemStyle: {
	              normal: {
	                  borderColor: '#0A1934',
	                  borderWidth: 3,
	                  color: function(params) {
	                      return colorList[params.dataIndex]
	                  }
	              }
	          },
	          type: 'pie',
	          silent: true, //取消高亮
	          radius: ['30%', '50%'],
	          center: ["50%", "50%"],
	          labelLine: {
	              normal: {
	                  length: 10,
	                  length2: 0,
	                  lineStyle: {
	                      color: 'transparent'
	                  }
	              }
	          },
	          label: {
	              normal: {
	                  formatter: params => {
	                      return '\n{cir|●}\n';
	                  },
	                  rich: rich,
	              }
	          },
	          data: data,
	          z: -1
	      }]
	  };
      myChart2.setOption(option2);
	  window.addEventListener("resize", function () {
	                 	myChart1.resize();
	  					myChart2.resize();
	    });
	  
	           
    },
  },
};
</script>
<style>
.com-container {
  float: float;
}

.age1 {
  height: 50%;
  width: 100%;
}

.age2 {
  height: 48%;
  width: 100%;
  margin-top: 2%;
}
</style>
