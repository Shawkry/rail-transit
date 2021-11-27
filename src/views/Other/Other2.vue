<template>
<div style="height: 100%;width: 100%;">
    <span id="Top10title" style="font-family: '黑体'">客流Top10</span>
    <div class="MonthTop" ref="MonthTop_ref"></div>
</div>
  
</template>

<style scoped lang="less">
.MonthTop {
  height: 100%;
  width: 100%;
  //background-color: #fff;
}
#Top10title{
  position: relative;
  //background-color: red;
  font-size: 0.15rem;
  text-align:left;
  left: 3%;
  top: 5%;
}
</style>
<script>
export default {
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var myChart = this.$echarts.init(this.$refs.MonthTop_ref, this.theme);
            var jsonData = require('../../assets/js/data/top10Month.js');
            var res=jsonData.top10;
			
			
                const sta = res.map(item => item.sta);
                const month = res.map(item => item.month);
                const indata = res.map(item => item.indata);
                //console.log(month,sta,indata);
            /* const sta = res.map(item => item.sta);    //读取SingleStationMonth.json计算每月top10
            const indata = res.map(item => item.indata);
            const month = res.map(item => item.month);
            let indataMon = new Array(168);
            let staMon = new Array(168)
            
        for(let count=0;count<8;count++){
            let temp = 0
            for(let i=0;i<sta.length/8;i++){
                indataMon[temp]=Number(indata[count+i*8]);
                staMon[temp]=sta[count+i*8]
                console.log(month[count+i*8]);
                temp++;
            }
            for(let i=0;i<indataMon.length;i++){
                for(let j=0;j<indataMon.length;j++){
                    if(indataMon[i]>indataMon[j]){
                        temp = indataMon[i];
                        indataMon[i] = indataMon[j]
                        indataMon[j] = temp

                        temp = staMon[i];
                        staMon[i] = staMon[j]
                        staMon[j] = temp
                    }
                }
            }
            console.log(indataMon.slice(0,10),staMon.slice(0,10));
        } */
            
            
 var years = month;//月份
 var jdData = sta;//站点
 var data = indata;//进站数值
 var colorRow = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd',//top10显示颜色
                 '#749f83','#ca8622', '#bda29a', '#a8d8ea', '#aa96da', 
                 '#fcbad3', '#ffffd2', '#f38181', '#fce38a', '#eaffd0', 
                 '#95e1d3', '#e3fdfd', '#9ca8b8', '#d8cacf','#c1cbd7',
                 '#b5c4b1','#dfd7d7'
                ];
var sumsta = ["Sta89", "Sta63", "Sta107", "Sta134", "Sta110", "Sta129", //所有出现过的站点
              "Sta5", "Sta126", "Sta65", "Sta108", "Sta9", "Sta115", 
              "Sta87", "Sta88", "Sta47", "Sta136", "Sta146", "Sta42", 
              "Sta20", "Sta40", "Sta67", "Sta30"]
/*  var sumsta = [];   //计算所有出现过的站点
 for(let i=0;i<8;i++){
     for(let j=0;j<10;j++){
        if(sumsta.indexOf(sta[i][j])==-1){
            sumsta.push(sta[i][j]);
        }
     }
 }
    console.log(sumsta); */

      var option = {
       baseOption: {
         //backgroundColor: '#2c343c', //背景颜色
         timeline: {
             data: years,
             axisType: 'category',
             autoPlay: true,
             playInterval: 2000, //播放速度
             left: '5%',
             right: '5%',
             bottom: '10%',
             width: '80%',
             height: '13%',
             label: {
                 normal: {
                     textStyle: {

                         color: 'white',
                     }
                 },
                 emphasis: {
                     textStyle: {
                         color: 'red'
                     }
                 }
             },
             symbolSize: 10,
             lineStyle: {
                 color: '#red'
             },
             checkpointStyle: {
                 borderColor: '#red',
                 borderWidth: 2
             },
             controlStyle: {
                 showNextBtn: true,
                 showPrevBtn: true,
                 normal: {
                     color: '#ff8800',
                     borderColor: '#ff8800'
                 },
                 emphasis: {
                     color: 'red',
                     borderColor: 'red'
                 }
             },

         },
         title: {
             text: '',
             right: '3%',
             bottom: '28%',
             textStyle: {
                 fontSize: 40,
                 color: 'white', //标题字体颜色
             }
         },
         tooltip: {
             'trigger': 'axis'
         },
         calculable: true,
         grid: {
             left: '24%',
             right: '10%',
             bottom: '24%',
             top: '10%',
             containLabel: true
         },
         label: {
             normal: {
                 textStyle: {
                     color: 'red'
                 }
             }
         },
         yAxis: [{

             nameGap: 50,
             offset: '37',
             'type': 'category',
             interval: 50,
             //inverse: ture,//图表倒叙或者正序排版
             data: '',
             nameTextStyle: {
                 color: 'red'
             },


             axisLabel: {
                 //rotate:45,
                 show: false,
                 textStyle: {
                     fontSize: 32,

                     color: function(params, Index) { // 标签国家字体颜色

                         //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色

                         var colorarrays = colorRow /* ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                             '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
                             '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                         ];
 */
                         //console.log("111", Index, colorarrays[Index],params); //打印序列

                         return colorarrays[sumsta.indexOf(params)];
                     },


                 }, //rotate:45,
                 interval: 50
             },
             axisLine: {

                 lineStyle: {
                     color: '#fedd8b' //Y轴颜色
                 },
             },
             splitLine: {
                 show: false,
                 lineStyle: {
                     color: '#fedd8b'
                 }
             },

         }],
         xAxis: [{
             'type': 'value',
             'name': '',

             splitNumber: 1, //轴线个数
             nameTextStyle: {
                 color: 'balck'
             },
             axisLine: {
                 lineStyle: {
                     color: '#ffa597' //X轴颜色
                 }
             },
             axisLabel: {
                 formatter: '{value} '
             },
             splitLine: {
                 show: false,
                 lineStyle: {
                     color: '#fedd8b'
                 }
             },
         }],
         series: [{
                 'name': '',
                 'type': 'bar',
                 markLine: {
                     label: {
                         normal: {
                             show: false
                         }
                     },
                     lineStyle: {
                         normal: {
                             color: 'red',
                             width: 3
                         }
                     },
                 },
                 label: {
                     normal: {
                         show: true,
                         position: 'right', //数值显示在右侧
                         formatter: '{c}'
                     }
                 },
                 itemStyle: {
                     normal: {
                         color: function(params) {
                             // build a color map as your need.
                             //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色         
                             var colorList = colorRow  /* ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                                 '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
                                 '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                             ] */;
                             // return colorList[params.dataIndex]

                             //console.log("111", params.name); //打印序列
                             return colorList[sumsta.indexOf(params.name)];
                         },

                     }
                 },
             },

             {
                 'name': '',
                 'type': 'bar',
                 markLine: {
                     
                     
                     label: {
                         normal: {
                             show: false
                         }
                     },
                     lineStyle: {
                         
                         normal: {
                             color: 'red',
                             width: 3
                         }
                     },
                 },
                 barWidth: '50%',
                 barGap: '-100%',
                 label: {
                     normal: {
                         show: true,
                         fontSize: 16,  //标签站点字体大小
                         position: 'left', //数值显示在右侧
                         formatter: function(p) {
                             return p.name;
                         }
                     }
                 },
                 itemStyle: {
                     normal: {
                         
                         
                         color: function(params) {
                             // build a color map as your need.
                             //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色         
                             var colorList =colorRow   /* ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                                 '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
                                 '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                             ] */;
                             // return colorList[params.dataIndex]

                             // console.log("111", params.name); //打印序列
                             return colorList[sumsta.indexOf(params.name)];
                         },

                     }
                 },
             }
         ],
         animationEasingUpdate: 'quinticInOut',
         animationDurationUpdate: 1500, //动画效果
        },
        options: []
       };
       for (var n = 0; n < years.length; n++) {

     var res = [];
     //alert(jdData.length);
     for (var j = 0; j < data[n].length; j++) {
         res.push({
             name: jdData[n][j],
             value: data[n][j]
         });

     }

     res.sort(function(a, b) {
         return b.value - a.value;
     }).slice(0, 6);

     res.sort(function(a, b) {
         return a.value - b.value;
     });


     var res1 = [];
     var res2 = [];
     //console.log(res);
     for (var t = 0; t < res.length; t++) {
         res1[t] = res[t].name;
         res2[t] = res[t].value;
     }
     option.options.push({
         title: {
             text: years[n] + '月'
         },
         yAxis: {
             data: res1,
         },
         series: [{
             data: res2
         }, {
             data: res2
         }]
     });
 }
      myChart.setOption(option);
    
        window.addEventListener("resize", function () {
			myChart.resize();
		});
    },
  },
};
</script>