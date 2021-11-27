<template>
	<div class="com-container">
		<div class="com-chart" ref="WorkandWeek_ref">
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.drawChart();
		},
		methods: {
			drawChart() {
				
				var mychart2 = this.$echarts.init(this.$refs.WorkandWeek_ref);
				
				
				var jsonData = require('../../assets/js/data/workandweekSingle.js');
				var res=jsonData.workandweekSingle;
				
				const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
				const xData = res.map(item=>item.intime);
				var yworkdata=res.map(item=>item.workdata);
				var yweekenddata=res.map(item=>item.weekenddata);
				var option2 = {
				    // backgroundColor: '#fff',
				    title: {
				        text: '单天工作日周末客流',
				        textStyle: {
				            fontSize: 20,
				            // fontWeight: 400,
							color:'white',
							fontFamily: '黑体'
				        },
				        left: '25%',
				        top: '8%'
				    },
				    legend: {
				        icon: 'circle',
				        top: '18%',
				        right: '1%',
						
				        itemWidth: 12,
				        itemGap: 20,
				        textStyle: {
				            color: '#ffffff'
				        }
				    },
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
							
							            type: 'cross',
										label:{
											show:true,
											margin:11
										}
							        
				        },
				        
				        textStyle: {
				            color: '#55557f'
				        },
				       
				    },
				    grid: {
						height:"60%",
						width:"80%",
				        top: '24%',
						left:"15%",
						right:"10%",
						 bottom:"25%"
						
       
				    },
				    xAxis: [{
				        type: 'category',
				        data: xData,
						min:5,
				        axisLine: {
				            lineStyle: {
				                color: 'rgba(255, 255, 255, 0.4)', //x轴颜色
				            }
				        },
				        axisTick: {
				            show: false
				        },
				        axisLabel: {
				            interval: 0,
				            textStyle: {
				                color: '#ffffff' //坐标轴字颜色
				            },
				            margin: 15
				        },
				       
				    }],
				    yAxis: [{
				        type: 'value',
				        axisTick: {
				            show: false
				        },
				        axisLine: {
				            show: true,
				            lineStyle: {
				                color: 'rgba(255, 255, 255, 0.4)', //y轴颜色
				            }
				        },
				        axisLabel: {
				            textStyle: {
				                color: '#ffffff'
				            }
				        },
				        splitLine: {
				            show: false
				        }
				    }],
				    series: [{
				        name: '周末',
				        type: 'line',
				        data: yweekenddata,
				        symbolSize: 1,
				        symbol: 'circle',
				        smooth: false,
				        yAxisIndex: 0,
				        showSymbol: true,
				        lineStyle: {
				            width: 3,
				            color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
				                    offset: 0,
				                    color: '#ff007f'
				                },
				                {
				                    offset: 1,
				                    color: '#9E87FF'
				                }
				            ]),
				            shadowColor: 'rgba(158,135,255, 0.3)',
				            shadowBlur: 10,
				            shadowOffsetY: 20
				        },
				        itemStyle: {
				            normal: {
				                color: colorList[0],
				                borderColor: colorList[0]
				            }
				        }
				    }, {
				        name: '工作日',
				        type: 'line',
				        data: yworkdata,
				        symbolSize: 1,
				        symbol: 'circle',
				        smooth: false,
				        yAxisIndex: 0,
				        showSymbol: true,
				        lineStyle: {
				            width: 3,
				            color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [{
				                    offset: 0,
				                    color: '#73DD39'
				                },
				                {
				                    offset: 1,
				                    color: '#73DDFF'
				                }
				            ]),
				            shadowColor: 'rgba(115,221,255, 0.3)',
				            shadowBlur: 10,
				            shadowOffsetY: 20
				        },
				        itemStyle: {
				            normal: {
				                color: colorList[1],
				                borderColor: colorList[1]
				            }
				        }
				    },
					{
					      name: "周末",
					      type: "bar",
					      barWidth: 10,
						  tooltip:{show:false},
					      itemStyle: {
					        normal: {
					          color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					            offset: 0,
					            color: "rgba(61,126,235, 1)"
					          },
					            {
					              offset: 1,
					              color: "rgba(61,126,235, 0)"
					            }
					          ]),
					          borderColor:new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					            offset: 0,
					            color: "rgba(160,196,225, 1)"
					          },
					            {
					              offset: 1,
					              color: "rgba(61,126,235, 1)"
					            }
					          ]),
					          borderWidth: 2
					        }
					      },
					      data: yweekenddata
					    },
					    {
					      name: "工作日",
					      type: "bar",
					      barWidth: 10,
						    tooltip:{show:false},
					      itemStyle: {
					        normal: {
					          color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: 'rgba(15,197,243,1)'}, {offset: 1, color: 'rgba(15,197,243,0)'}]),
					          borderColor:new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: 'rgba(180,240,255,1)'}, {offset: 1, color: 'rgba(15,197,243,1)'}]),
					          borderWidth: 2
					        }
					      },
					      data:yworkdata,
						  }]
				};
				
				// let chart = document.getElementById('chart-panel');
				// let myChart = echarts.init(chart)
				let i = 0
				setInterval(function(){
				    i = i === xData.length ? 0 : i+1
				    mychart2.dispatchAction({
				        type: 'showTip',
				        seriesIndex:0,  // 显示第几个series
				        dataIndex: i // 显示第几个数据
				    });
				}, 1000)
				mychart2.setOption(option2);
				
				window.addEventListener("resize", function () {
				               	// mychart1.resize();
									mychart2.resize();
				            });
				}
				},
				}
</script>

<style scoped="">
	/* .com-chart{
		float: left;
	} */
</style>
