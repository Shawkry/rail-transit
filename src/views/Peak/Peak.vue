<template>
	<div class="com-container" style="width: 100%; height: 100%;">
		<div class="com-chart" style="width: 100%; height: 100%;" ref="Peak_ref">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				xdata: [],
				y1data: [],
				y2data: [],

			}
		},
		
		mounted() {
			this.drawChart();
		},
		methods: {
			drawChart() {
				//各站点的折线图
					
				var mychart1 = this.$echarts.init(this.$refs.Peak_ref);

				var option1 = {

					title: {
						text: '早晚高峰进出站客流',
						textStyle: {
							fontSize: 20,
							color: 'white',
							fontFamily: '黑体'
						},
						left:"center",
						y:'8%'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['早高峰进站', '晚高峰进站','早高峰出站', '晚高峰出站','tinatna'],
						textStyle:{
							color:'white'
						},
						top:'20%',
						width:'100%'
					},
					grid:{
						left:'12%',
						top:'32%',
						right:'13%',
						bottom:30
					},
					toolbox: {
						show: true,
						color:'white',
						feature: {
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

						},
						y:'9%'
					},
					dataZoom: [
					        {
					                   type: 'inside',
					                   xAxisIndex: [0],
									     // filterMode: 'filter', 
					                   start:0,
					                   end: 5
					               },
					        //        {
					        //            type: 'inside',
					        //            yAxisIndex: [0],
									    // filterMode: 'empty',
					        //            start:0,
					        //            end: 10
					        //        }
					   ],
					calculable: true,
					xAxis: [{
						type: 'category',
						data: [],
						 axisLabel: {
						       show: true,
						        textStyle: {
						          color: '#ffffff',  //更改坐标轴文字颜色
						          fontSize : 10      //更改坐标轴文字大小
						        }
						     },
						     axisTick: {
						         show: false
						     },
						     axisLine:{
						         lineStyle:{
						            color:'#ffffff' //更改坐标轴颜色
						         },
								 }
					
					}],
					yAxis: [{
						type: 'value',
						axisLabel: {
						      show: true,
						       textStyle: {
						         color: '#ffffff',  //更改坐标轴文字颜色
						         fontSize : 10      //更改坐标轴文字大小
						       }
						    },
						    axisTick: {
						        show: false
						    },
						    axisLine:{
						        lineStyle:{
						           color:'#ffffff' //更改坐标轴颜色
						        },
								}
					}],
					series: [{
							name: '早高峰进站',
							type: 'bar',
							stack:'early',
							data: [],
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
							markLine: {
								data: [{
									type: 'average',
									name: '平均值'
								}]
							}
						},
						{
							name: '晚高峰进站',
							type: 'bar',
							stack:'night',
							data: [],
							markLine: {
								data: [{
									type: 'average',
									name: '平均值'
								}]
							}
						},
						{
								name: '早高峰出站',
								type: 'bar',
								stack:'early',
								data: [],
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
								markLine: {
									data: [{
										type: 'average',
										name: '平均值'
									}]
								}
							},
							{
								name: '晚高峰出站',
								type: 'bar',
								stack:'night',
								data:[],
								markLine: {
									data: [{
										type: 'average',
										name: '平均值'
									}]
								}
							}
					]
				};
				mychart1.setOption(option1);
				var jsonData = require('../../assets/js/data/inpeak.js');
				var res=jsonData.inpeak;
					let xdata = res.map(item => item.Name);
					let y1data = res.map(item => item.inearlycount);
					let y2data = res.map(item => item.innightcount);
					let y12data = res.map(item => -item.outearlycount);
					let y22data=res.map(item => -item.outnightcount);
					 // 隐藏加载动画**
					            mychart1.hideLoading();
					            // 加载数据图表
					            mychart1.setOption({
					              xAxis: {
					                data: xdata
					              },
					              series: [
					                {
					                  data: y1data
					                },
									{
										data:y2data
									},
									{
										data:y12data
									
									},
									{
										data:y22data
									}
					              ]
					            });
				
				
				
				
			

				window.addEventListener("resize", function() {
					mychart1.resize();
				
				});

			}
		},
	}
</script>

<style>
</style>
