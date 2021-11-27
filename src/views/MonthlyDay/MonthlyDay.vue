<template>
	<div class="com-container">
		<div class="com-chart" ref="MonthlyDay_ref"></div>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.drawChart();
		},
		methods: {
			drawChart() {
				var mychart = this.$echarts.init(this.$refs.MonthlyDay_ref, this.theme);
				var jsonData = require('../../assets/js/data/monthday.js');
				var res=jsonData.monthday;
					var hash = {};
					var i = 0;
					var newdata = [];
					
					res.forEach(function(item) {
					   var time= item.time;
					   // var data = {time:item.time,count:item.count};
					   var count=[item.data,item.incount];
					   hash[time] ? newdata[hash[time] - 1].count.push(count) : hash[time] = ++i &&newdata.push({
					      
					       time: time,
					 
						  // data:[data],
						  count:[count]
					   })
					 });
					  
				var dom=[];
				    newdata.forEach((item)=> {
						dom.push(
						{
							title:{
							    text: item.time,
							    
							},
							series:{
							         name: 'new',
							         type: 'line',
							         // smooth: true, //是否平滑
							         showAllSymbol: true,
							         // symbol: 'image://./static/images/guang-circle.png',
							         symbol: 'circle',
							         symbolSize: 10,
							         lineStyle: {
							             normal: {
							                 color: "#6c50f3",
							                 shadowColor: 'rgba(0, 0, 0, .3)',
							                 shadowBlur: 0,
							                 shadowOffsetY: 5,
							                 shadowOffsetX: 5,
							             },
							         },
							         label: {
							             show: true,
							             position: 'right',
							             textStyle: {
							                 color: '#6c50f3',
							             }
							         },
							         itemStyle: {
							             color: "#6c50f3",
							             borderColor: "#fff",
							             borderWidth: 3,
							             shadowColor: 'rgba(0, 0, 0, .3)',
							             shadowBlur: 0,
							             shadowOffsetY: 2,
							             shadowOffsetX: 2,
							         },
							         tooltip: {
							             show: false
							         },
							         areaStyle: {
							             normal: {
							                 color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							                         offset: 0,
							                         color: 'rgba(108,80,243,0.3)'
							                     },
							                     {
							                         offset: 1,
							                         color: 'rgba(108,80,243,0)'
							                     }
							                 ], false),
							                 shadowColor: 'rgba(108,80,243, 0.9)',
							                 shadowBlur: 20
							             }
							         },
							         data: item.count
							     
							}
						});
					
						
				     });
				
				var option = {
				    baseOption: {
				        // backgroundColor: '#080b30',
				        title: {
				            text: 'compare',
				            textStyle: {
				                align: 'center',
				                color: '#fff',
				                fontSize: 20,
								fontFamily: '黑体'
				            },
				            top: '6%',
				            left: 'center',
				        },
				        tooltip: {
				            trigger: 'axis',
				            axisPointer: {
				                lineStyle: {
				                    color: {
				                        type: 'linear',
				                        x: 0,
				                        y: 0,
				                        x2: 0,
				                        y2: 1,
				                        colorStops: [{
				                            offset: 0,
				                            color: 'rgba(0, 255, 233,0)'
				                        }, {
				                            offset: 0.5,
				                            color: 'rgba(255, 255, 255,1)',
				                        }, {
				                            offset: 1,
				                            color: 'rgba(0, 255, 233,0)'
				                        }],
				                        global: false
				                    }
				                },
				            },
				        },
				        timeline: {
				            axisType: 'category',
				            // realtime: false,
				            // loop: false,
				            autoPlay: true,
				            // currentIndex: 2,
				            playInterval: 2000,
				            // controlStyle: {
				            //     position: 'left'
				            // },
							color:'white',
				            data: newdata.map(item=>item.time),
							left: '5%',
             right: '5%',
             bottom: '5%',
             width: '80%',
             //  height: null,
             label: {
				 interval:0,
									rotate:20,
									position:20,
									textStyle: {
										color: 'white',
									},
                 
             },
				        },
				        grid: {
				            top: '20%',
				            left: '5%',
				            right: '5%',
				            bottom: '20%',
				            containLabel: true
				        },
				        xAxis: [{
				            type: 'category',
				            axisLine: {
				                show: true
				            },
				            splitArea: {
				                // show: true,
				                color: '#f00',
				                lineStyle: {
				                    color: '#f00'
				                },
				            },
				            axisLabel: {
				                color: '#fff'
				            },
				            splitLine: {
				                show: false
				            },
				            boundaryGap: false,
				           
				
				        }],
				
				        yAxis: [{
				            type: 'value',
				            // name:'绿色为老数据,蓝色为新数据,橙色为标准线',
				            nameTextStyle:{
				                color:'#fff',
				                align:'left'
				            },
				            min: 0,
				            // max: 140,
				            splitNumber: 4,
				            splitLine: {
				                show: true,
				                lineStyle: {
				                    color: 'rgba(255,255,255,0.1)'
				                }
				            },
				            axisLine: {
				                show: false,
				            },
				            axisLabel: {
				                show: false,
				                margin: 20,
				                textStyle: {
				                    color: '#d1e6eb',
				
				                },
				            },
				            axisTick: {
				                show: false,
				            },
				        }],
				    },
				    options: dom
				          
				};
				mychart.setOption(option);
				
				window.addEventListener("resize", function () {
				           
									mychart.resize();
				            });
			}
			},
			}
</script>

<style>
</style>
